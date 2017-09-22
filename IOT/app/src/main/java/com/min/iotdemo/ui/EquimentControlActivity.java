package com.min.iotdemo.ui;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.ike.mylibrary.util.T;
import com.ike.mylibrary.widget.dialog.LoadDialog;
import com.min.iotdemo.R;
import com.min.iotdemo.adapter.ElvChildEquipmentControlAdapter;
import com.min.iotdemo.adapter.ElvMainEquimentControlAdapter;
import com.min.iotdemo.base.BaseMvpActivity;
import com.min.iotdemo.bean.EquimentBean;
import com.min.iotdemo.interfaces.IControlActivityView;
import com.min.iotdemo.presenter.EquimentsControlPresenter;
import com.min.iotdemo.utils.DataUtils;
import com.min.iotdemo.view.MyElvListView;

import java.util.ArrayList;
import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class EquimentControlActivity extends BaseMvpActivity<IControlActivityView, EquimentsControlPresenter> implements IControlActivityView {


    @BindView(R.id.ex_lv_mainequipment_control)
    MyElvListView exLvMainequipmentControl;
    @BindView(R.id.ex_lv_controlequipment_control)
    MyElvListView exLvControlequipmentControl;
    @BindView(R.id.ll_control_back)
    LinearLayout llControlBack;
    @BindView(R.id.tv_control_set)
    TextView tvControlSet;
    @BindView(R.id.tv_control_vedio)
    TextView tvControlVedio;

    private ElvMainEquimentControlAdapter mainEquimentControlAdapter;
    private ElvChildEquipmentControlAdapter childEquipmentControlAdapter;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_equiment_control);
        ButterKnife.bind(this);
        initView();
       // presenter.getEquimentStatus();
        presenter.getSort();
    }

    @Override
    public EquimentsControlPresenter initPresenter() {
        return new EquimentsControlPresenter();
    }


    private void initView() {
        mainEquimentControlAdapter = new ElvMainEquimentControlAdapter(this);
        mainEquimentControlAdapter.setDataset(DataUtils.Equiments);
        exLvMainequipmentControl.setAdapter(mainEquimentControlAdapter);
    }

    @OnClick({R.id.ll_control_back, R.id.tv_control_set,R.id.tv_control_vedio})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.ll_control_back:
                finish();
                break;
            case R.id.tv_control_vedio:
              startActivity(new Intent(this,VedioActivity.class));
                break;
            case R.id.tv_control_set:
                LoadDialog.show(this);
                List<EquimentBean> data = getPostData();
                presenter.postControlData(data);
                break;
        }
    }

    /**
     * 获取选中的主副控件
     *
     * @return
     */
    private List<EquimentBean> getPostData() {
        List<EquimentBean> equiments = new ArrayList<>();
        List<EquimentBean> mainCheckEquimet = mainEquimentControlAdapter.getData();
        for (EquimentBean mainEquiment : mainCheckEquimet) {
            if (mainEquiment.isCheck()) {
                equiments.add(mainEquiment);
            }
        }
        return equiments;
    }


    @Override
    public void showError(final String errorString) {
                T.showShort(EquimentControlActivity.this, errorString);
                LoadDialog.dismiss(EquimentControlActivity.this);
    }

    @Override
    public void setEquimentData(List<EquimentBean> data) {
        //  mainEquimentControlAdapter.setDataset(data);
    }

    @Override
    public void succeedToControl(final String msg) {
                T.showShort(EquimentControlActivity.this, msg);
                LoadDialog.dismiss(EquimentControlActivity.this);
    }

    @Override
    public void setSort(String sotr) {
        String[] array=sotr.split(",");
        for (int i = 0; i < array.length; i++) {
            for (EquimentBean equiment : DataUtils.Equiments) {
                   if(equiment.getKey().equals(array[i])){
                       equiment.setCheck(true);
                    }
            }
        }

    }


}
