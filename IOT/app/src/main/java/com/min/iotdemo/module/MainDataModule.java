package com.min.iotdemo.module;

import android.util.Log;

import com.google.gson.Gson;
import com.min.iotdemo.Api;
import com.min.iotdemo.RetrofitProvider;
import com.min.iotdemo.bean.Code;
import com.min.iotdemo.bean.Equiment;
import com.min.iotdemo.bean.EquimentBean;
import com.min.iotdemo.listener.OnMainViewDataListener;
import com.min.iotdemo.utils.HttpUtils;
import com.min.iotdemo.utils.RedisControl;
import com.zhy.http.okhttp.callback.StringCallback;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.functions.Consumer;
import io.reactivex.schedulers.Schedulers;
import okhttp3.Call;

/**
 * Created by Min on 2017/4/1.
 */

public class MainDataModule {
    private boolean isOpen=false;
  public void postControlData(List<Equiment> mainEquiment, List<Equiment> childEquiment, final OnMainViewDataListener listener){
      if(mainEquiment.size()>0){
        //  allControl(mainEquiment,childEquiment,listener);
          setDelayTimeContry(mainEquiment,childEquiment,listener);
      }else {
          singleDelayControl(childEquiment,listener);
        //  singleControl(childEquiment, listener);
      }
  }


    /**
     *
     * @param mainEquiment
     * @param childEquiment
     * @param listener
     */
    public void setGroupControl(List<Equiment> mainEquiment, List<Equiment> childEquiment, final OnMainViewDataListener listener) {


    }


    public  void setDelayTimeContry(List<Equiment> mainEquiment, List<Equiment> childEquiment, final OnMainViewDataListener listener){
        Map<String,String> map=new HashMap<>();
        String child="";
        Gson gson=new Gson();
        for (int i = 0; i < childEquiment.size(); i++) {
            if(i==0){
                child=child+childEquiment.get(i).getId();
            }else{
                child=child+","+childEquiment.get(i).getId();
            }
        }
        map.put("secondary",child);
        for (int i = 0; i < mainEquiment.size(); i++) {
            map.put("main",mainEquiment.get(i).getId());
            map.put("time",mainEquiment.get(i).getDelayTime());
        }
        final String msg=gson.toJson(map);
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                    RedisControl.getInstance().setValue("sort",msg);
                        Log.e("error","组合设置成功");
                    }catch (Exception e){
                        Log.e("error",e.toString());
                    }
                }
            }).start();
    }

    /**
     * 通过直接设置数据库延时单控
     * @param childEquiment
     * @param listener
     */
    private void singleDelayControl(final List<Equiment> childEquiment, final OnMainViewDataListener listener) {
        if(childEquiment.get(0).getStatus().equals("1")){
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        RedisControl.getInstance().setValue(childEquiment.get(0).getId(),"0");
                        listener.succeedToControl("设备关闭成功");
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }).start();

        }else{
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Thread.sleep(Integer.valueOf(childEquiment.get(0).getDelayTime())*1000);
                        RedisControl.getInstance().setValue(childEquiment.get(0).getId(),"1");
                        listener.succeedToControl("设备开启成功");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }).start();

        }
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
