package com.aijia.videoteacher;

import android.Manifest;
import android.app.Activity;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.annotation.NonNull;
import android.support.v4.content.ContextCompat;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.aijia.videoteacher.ui.MorePopupWindow;
import com.aijia.videoteacher.utills.Constant;
import com.aijia.videoteacher.utills.DisplayUtils;
import com.aijia.videoteacher.utills.HttpUtils;
import com.yanzhenjie.permission.AndPermission;
import com.yanzhenjie.permission.Permission;
import com.yanzhenjie.permission.PermissionNo;
import com.yanzhenjie.permission.PermissionYes;
import com.yanzhenjie.permission.Rationale;
import com.yanzhenjie.permission.RationaleListener;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class MainActivity extends Activity{
    //主页的组件变量
    private static final String screKey = "248b63f1ceca9158ca88516bcb338e82a482ecd802cbca12";
    private static final int REQUEST_PERMISSION_CAMERA = 111;

    @BindView(R.id.iv_answer_back)
    ImageView ivAnswerBack;
    @BindView(R.id.ll_main_back)
    LinearLayout llMainBack;
    @BindView(R.id.tv_main_video)
    TextView tvMainVideo;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        String url=getIntent().getStringExtra("url");
        if(url!=null){
            HttpUtils.URL=getIntent().getStringExtra("url");
            Log.d("url",getIntent().getStringExtra("url"));
        }
        ButterKnife.bind(this);
        SharedPreferences sp = PreferenceManager.getDefaultSharedPreferences(this);
        sp.edit().remove(Constant.EXTRA_INFILE).commit(); // infile参数用于控制识别一个PCM音频流（或文件），每次进入程序都将该值清楚，以避免体验时没有使用录音的问题
    }

    @Override
    protected void onResume() {
        super.onResume();
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
                        AndPermission.rationaleDialog(MainActivity.this, rationale).show();
                    }
                })
                .start();
    }
    @PermissionYes(REQUEST_PERMISSION_CAMERA)
    private void getSingleYes(@NonNull List<String> grantedPermissions) {
        Toast.makeText(this,"成功", Toast.LENGTH_SHORT).show();
    }

    /**
     * <p>只要有一个权限申请失败就会回调这个方法，并且不会回调成功的方法。</p>
     * 日历权限申请失败，使用@PermissionNo(RequestCode)注解。
     *
     * @param deniedPermissions AndPermission回调过来的申请失败的权限。
     */
    @PermissionNo(REQUEST_PERMISSION_CAMERA)
    private void getSingleNo(@NonNull List<String> deniedPermissions) {

    }

    @OnClick({R.id.ll_main_back, R.id.tv_main_video})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.ll_main_back:

                break;
            case R.id.tv_main_video:
                int WidthPixels = DisplayUtils.getScreenWidthPixels(this);
                MorePopupWindow chatPopupWindow =new MorePopupWindow(this,WidthPixels/3);
                chatPopupWindow.showPopupWindow(tvMainVideo);
                break;
        }
    }
}
