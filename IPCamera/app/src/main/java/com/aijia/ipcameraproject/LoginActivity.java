package com.aijia.ipcameraproject;

import android.Manifest;
import android.app.Activity;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.aijia.ipcameraproject.bean.LoginResponse;
import com.aijia.ipcameraproject.utils.HttpUtils;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.yanzhenjie.permission.AndPermission;
import com.yanzhenjie.permission.Permission;
import com.yanzhenjie.permission.Rationale;
import com.yanzhenjie.permission.RationaleListener;
import com.zhy.http.okhttp.callback.StringCallback;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.lang.reflect.Type;

import cn.finalteam.rxgalleryfinal.RxGalleryFinal;
import cn.finalteam.rxgalleryfinal.imageloader.ImageLoaderType;
import cn.finalteam.rxgalleryfinal.rxbus.RxBusResultDisposable;
import cn.finalteam.rxgalleryfinal.rxbus.event.ImageRadioResultEvent;
import okhttp3.Call;

public class LoginActivity extends Activity implements View.OnClickListener {
    private static final int REQUEST_PERMISSION_CAMERA =100 ;
    private Button btn_upLoad;
    private LinearLayout ll_back;
    private EditText et_userName;
    private ProgressBar progressBar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        btn_upLoad= (Button) findViewById(R.id.btn_uploadFile);
        ll_back= (LinearLayout) findViewById(R.id.ll_login_back);
        et_userName= (EditText) findViewById(R.id.et_userName);
        progressBar= (ProgressBar) findViewById(R.id.pb_login);
        ll_back.setOnClickListener(this);
        btn_upLoad.setOnClickListener(this);
        if(ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED||
                ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED ){
            initPermission();
        }
    }
    private void initPermission() {
        AndPermission.with(getApplicationContext())
                .requestCode(REQUEST_PERMISSION_CAMERA)
                .permission(Permission.CAMERA,Permission.PHONE,Permission.MICROPHONE)
                .callback(this)
                // rationale作用是：用户拒绝一次权限，再次申请时先征求用户同意，再打开授权对话框；
                // 这样避免用户勾选不再提示，导致以后无法申请权限。
                // 你也可以不设置。
                .rationale(new RationaleListener() {
                    @Override
                    public void showRequestPermissionRationale(int requestCode, Rationale rationale) {
                        // 这里的对话框可以自定义，只要调用rationale.resume()就可以继续申请。
                        AndPermission.rationaleDialog(LoginActivity.this, rationale).show();
                    }
                })
                .start();
    }
    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.ll_login_back:
                finish();
                break;
            case R.id.btn_uploadFile:
                final String userName=et_userName.getText().toString().trim();
                if(userName.equals("")){
                    Toast.makeText(this,"用户名不能为空",Toast.LENGTH_LONG).show();
                    return;
                }
                Log.e("userName>>>>",userName);
                //自定义方法的单选
               /* RxGalleryFinalApi.getInstance(LoginActivity.this).openGalleryRadioImgDefault(
                        new RxBusResultDisposable<ImageRadioResultEvent>() {
                            @Override
                            protected void onEvent(ImageRadioResultEvent imageRadioResultEvent) throws Exception {
                                Logger.e("只要选择图片就会触发");
                            }
                        })
                        .onCropImageResult(
                                new IRadioImageCheckedListener() {
                                    @Override
                                    public void cropAfter(Object t) {
                                        String  imgFilePath=t.toString();
                                        Log.e("imgFilePath>>>>",imgFilePath);
                                        postFile(imgFilePath,userName);
                                    }

                                    @Override
                                    public boolean isActivityFinish() {
                                        Log.e("isActivityFinish>>>>","");
                                        return true;//返回false不关闭，true关闭
                                    }
                                });*/
                RxGalleryFinal
                    .with(this)
                    .image()
                    .radio()
                    .imageLoader(ImageLoaderType.PICASSO)
                    .subscribe(new RxBusResultDisposable<ImageRadioResultEvent>() {
                        @Override
                        protected void onEvent(ImageRadioResultEvent imageRadioResultEvent) throws Exception {
                            //图片选择结果
                            String  imgFilePath=imageRadioResultEvent.getResult().getOriginalPath();
                            Log.e("imgFilePath>>>>",imgFilePath);
                            progressBar.setVisibility(View.VISIBLE);
                            postFile(imgFilePath,userName);
                        }

                    })
                    .openGallery();
                break;
        }
    }
    private void postFile(String path,String userName) {
        File file = new File(path);
//        if (file != null) {
//            HttpUtils.sendVeriflyPictrue("/distinguish", file, "罗嘉豪", new StringCallback() {
//                @Override
//                public void onError(Call call, Exception e, int id) {
//                    Log.e("response", e.toString());
//                }
//
//                @Override
//                public void onResponse(String response, int id) {
//                    Gson gson = new Gson();
//                    Type type = new TypeToken<LoginResponse>() {
//                    }.getType();
//                    LoginResponse loginResponse = gson.fromJson(response, type);
//                    if (loginResponse.getData().equals("200")) {
//                        Toast.makeText(LoginActivity.this, loginResponse.getMsg(), Toast.LENGTH_LONG).show();
//                    } else {
//                    }
//                }
//            });
//        }
//    }
        if(file!=null) {
            HttpUtils.sendLoginPictrue("/register", file, userName, new StringCallback() {
                @Override
                public void onError(Call call, Exception e, int id) {
                   e.printStackTrace();
                    Toast.makeText(LoginActivity.this, e.toString(), Toast.LENGTH_LONG).show();
                    progressBar.setVisibility(View.GONE);
                }

                @Override
                public void onResponse(String response, int id) {
                    progressBar.setVisibility(View.GONE);
                    Log.e("onResponse>>>>>",response);
                    Gson gson = new Gson();
                    Type type = new TypeToken<LoginResponse>() {
                    }.getType();
                    LoginResponse loginResponse = gson.fromJson(response, type);
                    if (loginResponse.getData().equals("200")) {
                        Toast.makeText(LoginActivity.this, loginResponse.getMsg(), Toast.LENGTH_LONG).show();
                    } else {
                        Toast.makeText(LoginActivity.this, loginResponse.getMsg(), Toast.LENGTH_LONG).show();
                    }
                }
            });
        }
    }

    /**
     * 图片装换成byte数组
     * @param imgPath
     * @return
     */
    public static byte[] imageToByteArray(String imgPath) {
        BufferedInputStream in;
        try {
            in = new BufferedInputStream(new FileInputStream(imgPath));
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            int size = 0;
            byte[] temp = new byte[1024];
            while((size = in.read(temp))!=-1) {
                out.write(temp, 0, size);
            }
            in.close();
            return out.toByteArray();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
