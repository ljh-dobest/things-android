package com.min.iotdemo.ui;

import android.content.pm.ActivityInfo;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.min.iotdemo.R;
import com.min.iotdemo.view.MyGSYVideoPlayer;
import com.shuyu.gsyvideoplayer.GSYVideoPlayer;
import com.shuyu.gsyvideoplayer.utils.OrientationUtils;

import butterknife.BindView;
import butterknife.ButterKnife;

public class VedioActivity extends AppCompatActivity {

    @BindView(R.id.vedio_player)
    MyGSYVideoPlayer vedioPlayer;
    private OrientationUtils orientationUtils;
    private boolean isTransition;
    private String filePath;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_vedio);
        ButterKnife.bind(this);
        filePath="http://192.168.0.17:8090";
        initPlayer();
    }
    private void initPlayer() {
        vedioPlayer.setUp(filePath, false, null, "");
        vedioPlayer.getBackButton().setImageResource(R.mipmap.btn_back);
        vedioPlayer.getBackButton().setVisibility(View.VISIBLE);
        vedioPlayer.getBackButton().setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                toBack();
            }
        });
        //设置旋转
        orientationUtils = new OrientationUtils(this, vedioPlayer);
        vedioPlayer.startPlayLogic();
    }
    @Override
    public void onBackPressed() {
        toBack();
    }

    private void toBack() {
        //先返回正常状态
        if (orientationUtils.getScreenType() == ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE) {
            vedioPlayer.getFullscreenButton().performClick();
            return;
        }
        //释放所有
        vedioPlayer.setStandardVideoAllCallBack(null);
        GSYVideoPlayer.releaseAllVideos();
        if (isTransition && Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            super.onBackPressed();
        } else {
            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    finish();
                    overridePendingTransition(R.anim.abc_fade_in, R.anim.abc_fade_out);
                }
            }, 500);
        }
    }
}
