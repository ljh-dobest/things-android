package com.min.iotdemo.ui;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import com.min.iotdemo.R;
import com.min.iotdemo.bean.MessageEvent;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;



public class LoginActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        EventBus.getDefault().register(this);
//        SystemValue.deviceName = "VSTB633020RZXZZ";
//        SystemValue.deviceId ="admin";
//        SystemValue.devicePass = "13418085400";
//        BridgeService.setIpcamClientInterface(this);
//        NativeCaller.Init();
      // new Thread(new StartPPPPThread()).start();
//        startPlay();
    }


    @Subscribe(threadMode = ThreadMode.MAIN)
    public void acceptMsg(MessageEvent messageEvent) {
        Toast.makeText(this,messageEvent.getMsg(),Toast.LENGTH_SHORT).show();
    }


    @Override
    protected void onDestroy() {
        super.onDestroy();

        EventBus.getDefault().unregister(this);
    }


}
