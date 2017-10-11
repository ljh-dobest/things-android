package com.min.iotdemo.service;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.IBinder;
import android.support.annotation.Nullable;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import com.min.iotdemo.bean.MessageEvent;
import com.min.iotdemo.utils.HttpUtils;
import com.zhy.http.okhttp.callback.StringCallback;

import org.greenrobot.eventbus.EventBus;

import okhttp3.Call;

/**
 * Created by Min on 2017/9/5.
 */

public class MsgService extends Service {
private  WebView webView;

    @Override
    public void onCreate() {
        super.onCreate();
        new Thread(new Runnable() {
            @Override
            public void run() {
                while(true){
                    HttpUtils.connectToWeb(new StringCallback() {
                        @Override
                        public void onError(Call call, Exception e, int id) {
                            Log.e("connect","请求web失败"+e.toString());
                        }

                        @Override
                        public void onResponse(String response, int id) {
                            Log.e("connect","请求web成功");
                        }
                    });
                    try {
                        Thread.sleep(10000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        })
                .start();
//        webView=new WebView(getApplicationContext());
//        initWebView();
        //只在service创建的时候调用一次，可以在此进行一些一次性的初始化操作
    }
    private void initWebView() {
        webView.setVerticalScrollbarOverlay(true);
        //设置webview支持JS
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDefaultTextEncodingName("utf-8");
        webView.addJavascriptInterface(new JsInterface(getApplicationContext()),"webview");
        webView.loadUrl("file:///android_asset/index.html");
    }
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        //当其他组件调用startService()方法时，此方法将会被调用
        //在这里进行这个service主要的操作
        return super.onStartCommand(intent, flags, startId);
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        //当其他组件调用bindService()方法时，此方法将会被调用
        //如果不想让这个service被绑定，在此返回null即可
        return null;
    }

    @Override
    public void onDestroy() {
        //service调用的最后一个方法
        //在此进行资源的回收
        super.onDestroy();
    }
    private class JsInterface{
        private Context context;
        public JsInterface(Context mcontext){
            this.context=mcontext;
        }
        @JavascriptInterface
        public void acceptMsg(String msg){
                EventBus.getDefault().post(new MessageEvent(msg));
        }
    }
}
