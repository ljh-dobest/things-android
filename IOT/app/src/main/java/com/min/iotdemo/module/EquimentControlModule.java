package com.min.iotdemo.module;

import com.min.iotdemo.Api;
import com.min.iotdemo.RetrofitProvider;
import com.min.iotdemo.bean.Code;
import com.min.iotdemo.bean.Equiment;
import com.min.iotdemo.bean.EquimentBean;
import com.min.iotdemo.bean.Sort;
import com.min.iotdemo.listener.OnControlEquimentFiniishListener;
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

public class EquimentControlModule {
    private boolean isOpen=false;
  public void postControlData(List<EquimentBean> mainEquiment, final OnControlEquimentFiniishListener listener){
         allControl(mainEquiment,listener);
//      if(mainEquiment.size()==0){
//          singalParameterControl(mainEquiment,childEquiment,listener);
//      }else{
//          setDelayTimeContry(mainEquiment,childEquiment,listener);
//      }

  }

    /**
     * 无参组合设置
     * @param mainEquiment
     * @param listener
     */
    private void allControl(List<EquimentBean> mainEquiment, final OnControlEquimentFiniishListener listener) {
        String equimentKeyList="";
        for (int i = 0; i < mainEquiment.size(); i++) {
            equimentKeyList=equimentKeyList+mainEquiment.get(i).getKey()+",";
        }
        HttpUtils.postAllControl("/keySort",equimentKeyList, new StringCallback() {
            @Override
            public void onError(Call call, Exception e, int id) {
                listener.showError(e.toString());
            }

            @Override
            public void onResponse(String response, int id) {
                listener.succeedToControl("组合设置成功");
            }
        });

    }

    /**
     * 有参单控设置
     * @param mainEquiment
     * @param childEquiment
     * @param listener
     */
    public void singalParameterControl(List<Equiment> mainEquiment, List<Equiment> childEquiment, final OnControlEquimentFiniishListener listener) {
             Equiment equiment=childEquiment.get(0);
        HttpUtils.postSingalParameterControl("/parameter",equiment.getName().replace("-001",""),equiment.getDelayTime(),equiment.getCount(), new StringCallback() {
            @Override
            public void onError(Call call, Exception e, int id) {
                listener.showError(e.toString());
            }

            @Override
            public void onResponse(String response, int id) {
                listener.succeedToControl("有参单控设置成功");
            }
        });
//        Api api= RetrofitProvider.get().create(Api.class);
//        api.login("parameter","LED","0")
//                .subscribeOn(Schedulers.io())
//                .observeOn(AndroidSchedulers.mainThread())
//                .subscribe(new Consumer<LoginResponse>() {
//                    @Override
//                    public void accept(LoginResponse loginResponse) throws Exception {
//
//                    }
//                }, new Consumer<Throwable>() {
//                    @Override
//                    public void accept(Throwable throwable) throws Exception {
//
//                    }
//                });

    }



    public void getEquimentstatus(final OnControlEquimentFiniishListener listener){
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
                        listener.showError(throwable.toString());
                    }
                });
    }

    public void getSort(final OnControlEquimentFiniishListener listener){
        Api api= RetrofitProvider.get().create(Api.class);
        api.getSort("sort")
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Consumer<Code<Sort>>() {
                    @Override
                    public void accept(Code<Sort> sort) throws Exception {
                        listener.returnSort(sort.getData().getSort());
                    }
                }, new Consumer<Throwable>() {
                    @Override
                    public void accept(Throwable throwable) throws Exception {
                        listener.showError(throwable.toString());
                    }
                });
    }
}
