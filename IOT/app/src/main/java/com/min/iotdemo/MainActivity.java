package com.min.iotdemo;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.app.hubert.library.Controller;
import com.app.hubert.library.HighLight;
import com.app.hubert.library.NewbieGuide;
import com.app.hubert.library.OnGuideChangedListener;
import com.ike.mylibrary.util.T;
import com.ike.mylibrary.widget.dialog.LoadDialog;
import com.min.iotdemo.adapter.ElvChildEquipmentAdapter;
import com.min.iotdemo.adapter.ElvMainEquimentAdapter;
import com.min.iotdemo.base.BaseMvpActivity;
import com.min.iotdemo.bean.EquimentBean;
import com.min.iotdemo.interfaces.IMainView;
import com.min.iotdemo.presenter.MainDataPresenter;
import com.min.iotdemo.ui.EquimentControlActivity;
import com.min.iotdemo.ui.MMCPlugin;
import com.min.iotdemo.utils.DataUtils;
import com.min.iotdemo.utils.HttpUtils;
import com.min.iotdemo.view.MyElvListView;
import com.yanzhenjie.permission.AndPermission;
import com.yanzhenjie.permission.Permission;
import com.yanzhenjie.permission.Rationale;
import com.yanzhenjie.permission.RationaleListener;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class MainActivity extends BaseMvpActivity<IMainView, MainDataPresenter> implements IMainView {
    private static final int REQUEST_PERMISSION_CAMERA =1000 ;
    @BindView(R.id.ll_main_back)
    LinearLayout llMainBack;
    @BindView(R.id.tv_main_brain)
    TextView tvMainControl;
    @BindView(R.id.ex_lv_equipment_main)
    MyElvListView exLvEquipmentMain;
    @BindView(R.id.ex_lv_equipment_child)
    MyElvListView exLvEquipmentChild;
    @BindView(R.id.tv_main_vedio)
    TextView tvMainReflush;
    private Handler mHandler = new Handler() {
        public void handleMessage(Message msg) {
            presenter.getEquimentStatus();
        }
    };
    private ElvMainEquimentAdapter mainEquimentAdapter;
    private ElvChildEquipmentAdapter childEquipmentAdapter;
    private boolean isFirstStart=true;
    private boolean isCancel=false;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
        initView();
        presenter.getEquimentStatus();
        initPermission();
    }

    private void initPermission() {
        AndPermission.with(getApplicationContext())
                .requestCode(REQUEST_PERMISSION_CAMERA)
                .permission(Permission.CAMERA,Permission.PHONE,Permission.MICROPHONE)
                .callback(this)
                // rationale作用是：用户拒绝一次权限，再次申请时先征求用户同意，再打开授权对话框；
                // 这样避免用户勾选不再提示，导致以后无法申请权限。
                // 你也可以不设置。
                .rationale(new RationaleListener() {
                    @Override
                    public void showRequestPermissionRationale(int requestCode, Rationale rationale) {
                        // 这里的对话框可以自定义，只要调用rationale.resume()就可以继续申请。
                        AndPermission.rationaleDialog(MainActivity.this, rationale).show();
                    }
                })
                .start();
    }

    private void initView() {
        mainEquimentAdapter = new ElvMainEquimentAdapter(this);
        exLvEquipmentMain.setAdapter(mainEquimentAdapter);
        showTip();
    }

    /**
     * 引导页
     */
    private void showTip() {
        NewbieGuide.with(this)//传入activity
                .setLabel("guide1")//设置引导层标示，用于区分不同引导层，必传！否则报错
                .addHighLight(llMainBack, HighLight.Type.CIRCLE)//添加需要高亮的view
                .setLayoutRes(R.layout.guide1_layout)//自定义的提示layout，不要添加背景色，引导层背景色通过setBackgroundColor()设置
                .alwaysShow(true)
                .setOnGuideChangedListener(new OnGuideChangedListener() {
                    @Override
                    public void onShowed(Controller controller) {}
                    @Override
                    public void onRemoved(Controller controller) {
                        NewbieGuide.with(MainActivity.this)//传入activity
                                .setLabel("guide2")//设置引导层标示，用于区分不同引导层，必传！否则报错
                                .addHighLight(exLvEquipmentMain, HighLight.Type.RECTANGLE)//添加需要高亮的view
                                .setLayoutRes(R.layout.guide2_layout)//自定义的提示layout，不要添加背景色，引导层背景色通过setBackgroundColor()设置
                                .alwaysShow(true)
                                .show();//显示引导层
                    }
                })
                .show();//显示引导层
    }

    @Override
    protected void onStart() {
        super.onStart();
        isCancel=false;
        mHandler.sendEmptyMessage(0);
    }

    @Override
    protected void onStop() {
        super.onStop();
        isCancel=true;
    }

    @Override
    public MainDataPresenter initPresenter() {
        return new MainDataPresenter();
    }


    @OnClick({R.id.ll_main_back, R.id.tv_main_brain,R.id.tv_main_vedio})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.ll_main_back:
                startActivity(new Intent(this, EquimentControlActivity.class));
                break;
            case R.id.tv_main_vedio:
                MMCPlugin.getInstance().openPlugin(this, "videoTeacher", "com.aijia.videoteacher.MainActivity", new MMCPlugin.InstallListener() {
                    @Override
                    public void onInstalling(int progress) {

                    }

                    @Override
                    public void onFail(String msg) {

                    }

                    @Override
                    public void onSuccess() {
                           runOnUiThread(new Runnable() {
                               @Override
                               public void run() {
                                   Intent intent=new Intent();
                                   intent.putExtra("url", HttpUtils.URL);
                                   MMCPlugin.getInstance().openActivity(MainActivity.this,intent,"videoTeacher","com.aijia.videoteacher.MainActivity");//带参数启动
                                   //MMCPlugin.getInstance().openActivity(MainActivity.this,intent,"baidu","com.baidu.android.voicedemo.activity.ActivityOnline");//带参数启动
                                  // MMCPlugin.getInstance().openActivity(MainActivity.this,"videoTeacher","com.aijia.videoteacher.MainActivity");
                               }
                           });
                    }
                });
                break;
            case R.id.tv_main_brain:
                MMCPlugin.getInstance().openPlugin(this, "IPCamera", "com.aijia.ipcameraproject.StartActivity", new MMCPlugin.InstallListener() {
                    @Override
                    public void onInstalling(int progress) {

                    }

                    @Override
                    public void onFail(String msg) {

                    }

                    @Override
                    public void onSuccess() {
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                Intent intent=new Intent();
                                intent.putExtra("url", HttpUtils.URL);
                                MMCPlugin.getInstance().openActivity(MainActivity.this,intent,"IPCamera","com.aijia.ipcameraproject.StartActivity");//带参数启动
                                //MMCPlugin.getInstance().openActivity(MainActivity.this,"IPCamera","com.aijia.ipcameraproject.StartActivity");
                            }
                        });
                    }
                });

              //  startActivity(new Intent(this,AttentionActivity.class));
                break;
        }
    }




    @Override
    public void showError() {
        LoadDialog.dismiss(this);
    }

    @Override
    public void setEquimentData(List<EquimentBean> data) {
        if(DataUtils.Equiments.size()==0){
         DataUtils.Equiments.addAll(data);
        }

       mainEquimentAdapter.setDataset(data);
        if(isCancel){
            return;
        }
        Log.e("Equiments","设备状态已更新");
        mHandler.sendEmptyMessage(0);
    }

    @Override
    public void succeedToControl(final String msg) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                LoadDialog.dismiss(MainActivity.this);
                T.showShort(MainActivity.this, msg);
            }
        });

    }

    @Override
    public void succeedToSet() {
        LoadDialog.dismiss(this);
        T.showShort(this, "组合设置成功");
    }


}
