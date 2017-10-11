package com.min.iotdemo.module;

import com.min.iotdemo.Api;
import com.min.iotdemo.RetrofitProvider;
import com.min.iotdemo.bean.Code;
import com.min.iotdemo.bean.Equiment;
import com.min.iotdemo.bean.EquimentBean;
import com.min.iotdemo.listener.OnMainViewDataListener;
import com.min.iotdemo.utils.HttpUtils;
import com.zhy.http.okhttp.callback.StringCallback;

import java.util.List;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.functions.Consumer;
import io.reactivex.schedulers.Schedulers;
import okhttp3.Call;

/**
 * Created by Min on 2017/4/1.
 */

public class MainDataModule {
    private boolean isOpen=false;



    /**
     *
     * @param mainEquiment
     * @param childEquiment
     * @param listener
     */
    public void setGroupControl(List<Equiment> mainEquiment, List<Equiment> childEquiment, final OnMainViewDataListener listener) {


    }





    /**
     * 通过服务器进行设备单控
     * @param childEquiment
     * @param listener
     */
    public void singleControl(List<Equiment> childEquiment, final OnMainViewDataListener listener) {
        if(childEquiment.get(0).getStatus().equals("1")){
          HttpUtils.postSingleControl("/status", childEquiment.get(0).getId().replace("-001",""), "0", new StringCallback() {
              @Override
              public void onError(Call call, Exception e, int id) {

              }

              @Override
              public void onResponse(String response, int id) {
                  listener.succeedToControl("设备关闭成功");
                  isOpen=false;
              }
          });
      }else{
          HttpUtils.postSingleControl("/status", childEquiment.get(0).getId().replace("-001",""), "1", new StringCallback() {
              @Override
              public void onError(Call call, Exception e, int id) {
                   listener.showError();
              }

              @Override
              public void onResponse(String response, int id) {
                     listener.succeedToControl("设备开启成功");
                    isOpen=true;
              }
          });
      }
    }

    /**
     * 获取设备状态
     * @param listener
     */
    public void getEquimentstatus(final OnMainViewDataListener listener){
        Api api= RetrofitProvider.get().create(Api.class);
        api.getEquimentStatus("index")
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Consumer<Code<List<EquimentBean>>>() {
                    @Override
                    public void accept(Code<List<EquimentBean>> listCode) throws Exception {
                       listener.returnEquimentData(listCode.getData());
                    }
                }, new Consumer<Throwable>() {
                    @Override
                    public void accept(Throwable throwable) throws Exception {
                             listener.showError();
                    }
                });
    }


}
