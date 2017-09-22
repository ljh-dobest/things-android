package com.min.iotdemo.listener;

import com.min.iotdemo.bean.EquimentBean;

import java.util.List;

/**
 * Created by Min on 2017/7/1.
 */

public interface OnMainViewDataListener {
    void showError();
    void returnEquimentData(List<EquimentBean> data);
    void succeedToControl(String msg);
    void succeedToSet();
}
