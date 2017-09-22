package com.min.iotdemo.service;

import android.app.Service;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.Intent;
import android.os.Binder;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.support.annotation.Nullable;
import android.util.Log;

import com.min.iotdemo.bean.AttentionEvent;
import com.neurosky.connection.ConnectionStates;
import com.neurosky.connection.DataType.MindDataType;
import com.neurosky.connection.EEGPower;
import com.neurosky.connection.TgStreamHandler;
import com.neurosky.connection.TgStreamReader;

import org.greenrobot.eventbus.EventBus;

import static android.content.ContentValues.TAG;

/**
 * Created by Min on 2017/9/9.
 */

public class BrainLinkService extends Service{
    private static final int MSG_UPDATE_BAD_PACKET = 1001;
    private static final int MSG_UPDATE_STATE = 1002;
    private int currentState = 0;
    private TgStreamReader tgStreamReader;
    // TODO connection sdk
    private BluetoothAdapter mBluetoothAdapter;
    private BluetoothDevice mBluetoothDevice;
    private String address = null;
    private Handler LinkDetectedHandler = new Handler() {
        @Override
        public void handleMessage(Message msg) {

            switch (msg.what) {
                case 1234:
                    break;
                case 1235:
                    break;
                case 1236:
                    break;
                case 1237:
                    break;
                case MindDataType.CODE_FILTER_TYPE:
                    break;
                case MindDataType.CODE_RAW:
                    break;
                case MindDataType.CODE_MEDITATION:
                    Log.d(TAG, "HeadDataType.CODE_MEDITATION " + msg.arg1);
                    break;
                case MindDataType.CODE_ATTENTION:
                    Log.d(TAG, "CODE_ATTENTION " + msg.arg1);
                    EventBus.getDefault().post(new AttentionEvent(msg.arg1));
                    break;
                case MindDataType.CODE_EEGPOWER:
                    EEGPower power = (EEGPower)msg.obj;
                    break;
                case MindDataType.CODE_POOR_SIGNAL://
                    int poorSignal = msg.arg1;
                    break;
                case MSG_UPDATE_BAD_PACKET:
                    break;
                default:
                    break;
            }
            super.handleMessage(msg);
        }
    };
    private TgStreamHandler callback = new TgStreamHandler() {

        @Override
        public void onStatesChanged(int connectionStates) {
            // TODO Auto-generated method stub
            Log.d(TAG, "connectionStates change to: " + connectionStates);
            currentState = connectionStates;
            switch (connectionStates) {
                case ConnectionStates.STATE_CONNECTED:
                    //sensor.start();连接成功

                    break;
                case ConnectionStates.STATE_WORKING:
                    //byte[] cmd = new byte[1];
                    //cmd[0] = 's';
                    //tgStreamReader.sendCommandtoDevice(cmd);
                    LinkDetectedHandler.sendEmptyMessageDelayed(1234, 5000);
                    break;
                case ConnectionStates.STATE_GET_DATA_TIME_OUT:
                    //get data time out
                    break;
                case ConnectionStates.STATE_COMPLETE:
                    //read file complete
                    break;
                case ConnectionStates.STATE_STOPPED:
                    break;
                case ConnectionStates.STATE_DISCONNECTED:
                    break;
                case ConnectionStates.STATE_ERROR:
                    Log.d(TAG, "Connect error, Please try again!");
                    break;
                case ConnectionStates.STATE_FAILED:
                    Log.d(TAG, "Connect failed, Please try again!");
                    break;
            }
            Message msg = LinkDetectedHandler.obtainMessage();
            msg.what = MSG_UPDATE_STATE;
            msg.arg1 = connectionStates;
            LinkDetectedHandler.sendMessage(msg);
        }
        @Override
        public void onRecordFail(int a) {
            // TODO Auto-generated method stub
            Log.e(TAG,"onRecordFail: " +a);

        }

        @Override
        public void onChecksumFail(byte[] payload, int length, int checksum) {
            // TODO Auto-generated method stub

//            badPacketCount ++;
//            Message msg = LinkDetectedHandler.obtainMessage();
//            msg.what = MSG_UPDATE_BAD_PACKET;
//            msg.arg1 = badPacketCount;
//            LinkDetectedHandler.sendMessage(msg);

        }

        @Override
        public void onDataReceived(int datatype, int data, Object obj) {
            // TODO Auto-generated method stub
            Message msg = LinkDetectedHandler.obtainMessage();
            msg.what = datatype;
            msg.arg1 = data;
            msg.obj = obj;
            LinkDetectedHandler.sendMessage(msg);
            //Log.i(TAG,"onDataReceived");
        }
    };
        @Override
    public void onCreate() {
//            try {
//                // TODO
//                mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
//                Set<BluetoothDevice> pairedDevices = mBluetoothAdapter.getBondedDevices();
//                for(BluetoothDevice device: pairedDevices){
//                    if(device.getName().equals("BrainLink")) {
//                        address = device.getAddress().toString();
//                        connectToBrainLink(device);
//                    }
//                }
//            } catch (Exception e) {
//                // TODO Auto-generated catch block
//                e.printStackTrace();
//                Log.i(TAG, "错误:" + e.getMessage());
//                return;
//            }
    }
    /**
     * 连接到BrainLink
     * @param device
     */
    public void connectToBrainLink(BluetoothDevice device) {
        if(mBluetoothAdapter==null){
            mBluetoothAdapter=BluetoothAdapter.getDefaultAdapter();
        }
        //ger remote device
        BluetoothDevice remoteDevice = mBluetoothAdapter.getRemoteDevice(device.getAddress().toString());
        //bind and connect
        //bindToDevice(remoteDevice); // create bond works unstable on Samsung S5
        //showToast("pairing ...",Toast.LENGTH_SHORT);

        tgStreamReader = createStreamReader(remoteDevice);
        tgStreamReader.connectAndStart();
    }
    /**
     * If the TgStreamReader is created, just change the bluetooth
     * else create TgStreamReader, set data receiver, TgStreamHandler and parser
     * @param bd
     * @return TgStreamReader
     */
    public TgStreamReader createStreamReader(BluetoothDevice bd){

        if(tgStreamReader == null){
            // Example of constructor public TgStreamReader(BluetoothDevice mBluetoothDevice,TgStreamHandler tgStreamHandler)
            tgStreamReader = new TgStreamReader(bd,callback);
            tgStreamReader.startLog();
        }else{
            // (1) Demo of changeBluetoothDevice
            tgStreamReader.changeBluetoothDevice(bd);

            // (4) Demo of setTgStreamHandler, you can change the data handler by this function
            tgStreamReader.setTgStreamHandler(callback);
        }
        return tgStreamReader;
    }
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return new MyBinder();
    }

    public void stop() {
        if(tgStreamReader != null){
            tgStreamReader.stop();
            tgStreamReader.close();//if there is not stop cmd, please call close() or the data will accumulate
            tgStreamReader = null;
        }
    }

    @Override
    public void onDestroy() {
        // TODO Auto-generated method stub
        if(tgStreamReader != null){
            tgStreamReader.close();
            tgStreamReader = null;
        }
        super.onDestroy();
    }

    public class MyBinder extends Binder {
        public BrainLinkService getMyService(){
            return BrainLinkService.this;
        }
    }
}
