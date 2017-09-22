package com.min.iotdemo.presenter;

import com.min.iotdemo.base.BasePersenter;
import com.min.iotdemo.bean.EquimentBean;
import com.min.iotdemo.interfaces.IControlActivityView;
import com.min.iotdemo.listener.OnControlEquimentFiniishListener;
import com.min.iotdemo.module.EquimentControlModule;

import java.util.List;

/**
 * Created by Min on 2017/7/1.
 */

public class EquimentsControlPresenter extends BasePersenter<IControlActivityView> implements OnControlEquimentFiniishListener {
    private EquimentControlModule equimentControlModule;
    public EquimentsControlPresenter(){
        equimentControlModule=new EquimentControlModule();
    }

    public void getEquimentStatus(){
        equimentControlModule.getEquimentstatus(this);
    }
   public void getSort(){
       equimentControlModule.getSort(this);
   }
    public void postControlData(List<EquimentBean> mainEquiment){
        equimentControlModule.postControlData(mainEquiment,this);
    }

    @Override
    public void showError(String errorString) {
        if(mView!=null){
            mView.showError(errorString);
        }
    }

    @Override
    public void returnEquimentData(List<EquimentBean> data) {
        if(mView!=null){
            mView.setEquimentData(data);
        }
    }


    @Override
    public void succeedToControl(String msg) {
        if(mView!=null){
            mView.succeedToControl(msg);
        }
    }

    @Override
    public void returnSort(String sort) {
        if(mView!=null){
            mView.setSort(sort);
        }
    }

}
