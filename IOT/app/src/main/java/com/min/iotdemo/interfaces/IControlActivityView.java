package com.min.iotdemo.interfaces;

import com.min.iotdemo.bean.EquimentBean;

import java.util.List;

/**
 * Created by Min on 2017/7/1.
 */

public interface IControlActivityView {
    void showError(String errorString);
    void setEquimentData(List<EquimentBean> data);
    void succeedToControl(String msg);
    void setSort(String sotr);
}
