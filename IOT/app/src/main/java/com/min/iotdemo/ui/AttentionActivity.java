package com.min.iotdemo.ui;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.TextView;
import android.widget.Toast;

import com.min.iotdemo.R;
import com.min.iotdemo.bean.AttentionEvent;
import com.min.iotdemo.service.BrainLinkService;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Set;

import butterknife.BindView;
import butterknife.ButterKnife;

public class AttentionActivity extends AppCompatActivity {
    private static final int REQUEST_ENABLE_BT = 111;
    private BluetoothAdapter mBluetoothAdapter;
    private ServiceConnection sc;
    private IBinder mIbinder;
    @BindView(R.id.tv_attentionCode)
    TextView tvAttentionCode;
    private BrainLinkService myService;
    private BluetoothDevice mBluetoothDevice;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_attention);
        ButterKnife.bind(this);
        checkBluetooth();
        EventBus.getDefault().register(this);
        // 用BroadcastReceiver来取得搜索结果
        IntentFilter intent = new IntentFilter();
        intent.addAction(BluetoothDevice.ACTION_FOUND);//搜索发现设备
        intent.addAction(BluetoothDevice.ACTION_BOND_STATE_CHANGED);//状态改变
        intent.addAction(BluetoothAdapter.ACTION_SCAN_MODE_CHANGED);//行动扫描模式改变了
        intent.addAction(BluetoothAdapter.ACTION_STATE_CHANGED);//动作状态发生了变化
        this.registerReceiver(searchDevices, intent);
    }
    /**
     * 蓝牙接收广播
     */
    private BroadcastReceiver searchDevices = new BroadcastReceiver() {
        //接收
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            Bundle b = intent.getExtras();
            Object[] lstName = b.keySet().toArray();

            // 显示所有收到的消息及其细节
            for (int i = 0; i < lstName.length; i++) {
                String keyName = lstName[i].toString();
                Log.e("bluetooth", keyName + ">>>" + String.valueOf(b.get(keyName)));
            }
            BluetoothDevice device;
            // 搜索发现设备时，取得设备的信息；注意，这里有可能重复搜索同一设备
            if (BluetoothDevice.ACTION_FOUND.equals(action)) {

            }
            //状态改变时
            else if (BluetoothDevice.ACTION_BOND_STATE_CHANGED.equals(action)) {
                device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
                switch (device.getBondState()) {
                    case BluetoothDevice.BOND_BONDING://正在配对
                        Log.d("BlueToothTestActivity", "正在配对......");

                        break;
                    case BluetoothDevice.BOND_BONDED://配对结束
                        Log.d("BlueToothTestActivity", "配对结束......");
                        if(device.getName().equals("BrainLink")){
                            mBluetoothDevice=device;
                                bindService(new Intent(AttentionActivity.this, BrainLinkService.class),sc, Context.BIND_AUTO_CREATE);
                        }

                        break;
                    case BluetoothDevice.BOND_NONE://取消配对/未配对
                        Log.d("BlueToothTestActivity", "取消配对");

                    default:
                        break;
                }
            }
        }
    };
    private void checkBluetooth() {
        sc=new ServiceConnection() {
            @Override
            public void onServiceConnected(ComponentName name, IBinder service) {
                myService = ((BrainLinkService.MyBinder) service).getMyService();
                myService.connectToBrainLink(mBluetoothDevice);
            }

            @Override
            public void onServiceDisconnected(ComponentName name) {

            }
        };
        mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if (mBluetoothAdapter == null || !mBluetoothAdapter.isEnabled()) {
            Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            startActivityForResult(enableBtIntent, REQUEST_ENABLE_BT);
        }else{
            checkBrainLinkOpen();
        }


    }

    /**
     * 检查是否已匹配BrainLink
     */
    private void checkBrainLinkOpen() {
        try {
            // TODO
            mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
            Set<BluetoothDevice> pairedDevices = mBluetoothAdapter.getBondedDevices();
            for(BluetoothDevice device: pairedDevices){
                if(device.getName().equals("BrainLink")) {
                    mBluetoothDevice=device;
                    bindService(new Intent(this, BrainLinkService.class),sc, Context.BIND_AUTO_CREATE);
                }
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return;
        }
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void acceptMsg(AttentionEvent attentionEvent) {
                tvAttentionCode.setText(attentionEvent.getValue()+"");
    }
    @Override
    protected void onDestroy() {
        EventBus.getDefault().unregister(this);
        unbindService(sc);
        unregisterReceiver(searchDevices);
        super.onDestroy();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode==REQUEST_ENABLE_BT){
            if(resultCode==RESULT_OK){
                Toast.makeText(this,"蓝牙开启成功",Toast.LENGTH_SHORT).show();
               checkBrainLinkOpen();
            }else{
                Toast.makeText(this,"请开启蓝牙才能连接脑电波模块",Toast.LENGTH_SHORT).show();
            }
        }

    }
}
