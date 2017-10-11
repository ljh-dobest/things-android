package com.aijia.videoteacher.ui;

import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.ImageButton;
import android.widget.SeekBar;

import com.aijia.videoteacher.R;
import com.aijia.videoteacher.utills.HttpUtils;
import com.google.vr.sdk.widgets.video.VrVideoEventListener;
import com.google.vr.sdk.widgets.video.VrVideoView;

import java.io.IOException;

/**
 * VR视频类
 */
public class VrVideoActivity extends AppCompatActivity {
    /**
     * 播放360度全景视频的的控件
     */
    private VrVideoView vr_video_view;
    /**
     * 拖动进度的进度条
     */
    private SeekBar seek_bar;
    /**
     * 声音开关
     */
    private ImageButton volume_toggle;
    /**
     * 播放按钮
     */
    private ImageButton play_toggle;

    /**
     * 声音是否开启
     */
    private boolean isMuted;
    /**
     * 播放暂停
     */
    private boolean isPlay=true;
    /**
     * 打印调试的TAG
     */
    private final String TAG = "VrVideoView";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_vr_video);
        load360Video();
    }

    /**
     * 加载360度全景视频
     */
    private void load360Video() {
        vr_video_view = (VrVideoView) findViewById(R.id.vr_video_view);
        seek_bar = (SeekBar) findViewById(R.id.seek_bar);
        volume_toggle = (ImageButton) findViewById(R.id.volume_toggle);
        play_toggle = (ImageButton) findViewById(R.id.play_toggle);

        /**设置加载设置**/
        VrVideoView.Options options = new VrVideoView.Options();
       options.inputType = VrVideoView.Options.TYPE_STEREO_OVER_UNDER;
        /**
         * 设置加载监听
         */
        vr_video_view.setEventListener(new VrVideoEventListener() {
            /**
             * 视频播放完成回调
             */
            @Override
            public void onCompletion() {
                super.onCompletion();
                /**播放完成后跳转到开始重新播放**/
                vr_video_view.seekTo(0);
                setIsPlay(false);
                Log.d(TAG, "onCompletion()");
            }

            /**
             * 加载每一帧视频的回调
             */
            @Override
            public void onNewFrame() {
                super.onNewFrame();
                seek_bar.setProgress((int) vr_video_view.getCurrentPosition());
            }

            /**
             * 点击VR视频回调
             */
            @Override
            public void onClick() {
                super.onClick();
                Log.d(TAG, "onClick()");
            }

            /**
             * 加载VR视频失败回调
             * @param errorMessage
             */
            @Override
            public void onLoadError(String errorMessage) {
                super.onLoadError(errorMessage);
                Log.d(TAG, "onLoadError()->errorMessage=" + errorMessage);
            }

            /**
             * 加载VR视频成功回调
             */
            @Override
            public void onLoadSuccess() {
                super.onLoadSuccess();
                /**加载成功后设置回调**/
                seek_bar.setMax((int) vr_video_view.getDuration());
                Log.d(TAG, "onNewFrame()");
            }

            /**
             * 显示模式改变回调
             * 1.默认
             * 2.全屏模式
             * 3.VR观看模式，即横屏分屏模式
             * @param newDisplayMode 模式
             */
            @Override
            public void onDisplayModeChanged(int newDisplayMode) {
                super.onDisplayModeChanged(newDisplayMode);
                Log.d(TAG, "onLoadError()->newDisplayMode=" + newDisplayMode);
            }
        });
        try {
            /**加载VR视频**/
          // Uri uri=Uri.parse("http://player.video.qiyi.com/e13d067e7aa4a973dab4e3ecf0b024d0/0/67/w_19rqziua7t.swf-albumId=1279117909-tvId=1279117909-isPurchase=0-cnId=27");
            Uri uri = Uri.parse(HttpUtils.VEDIO_URL+"/public/uploads/ar/ar.mp4");
            //Uri uri = Uri.parse("http://www.iqiyi.com/w_19rqziua7t.html");

             // Uri uri1=Uri.parse("http://foo.com/file.m3u8");
            vr_video_view.loadVideo(uri,options);
          //  vr_video_view.loadVideoFromAsset("congo.mp4", options);

        } catch (IOException e) {
            e.printStackTrace();
        }
        /**设置声音按钮点击监听**/
        volume_toggle.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                setIsMuted(!isMuted);
            }
        });
        /**设置播放暂停按钮点击监听**/
        play_toggle.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                setIsPlay(!isPlay);
            }
        });

        /**设置进度条拖动监听**/
        seek_bar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            /**
             * 进度条拖动改变监听
             * @param seekBar 拖动条
             * @param progress 进度
             * @param fromUser 是否是用户手动操作的
             */
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                if (fromUser) {
                    /**调节视频进度**/
                    vr_video_view.seekTo(progress);
                }
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });

    }

    /**
     * 设置声音开关
     *
     * @param isMuted 开关
     */
    private void setIsMuted(boolean isMuted) {
        this.isMuted = isMuted;
        volume_toggle.setImageResource(isMuted ? R.drawable.volume_off : R.drawable.volume_on);
        vr_video_view.setVolume(isMuted ? 0.0f : 1.0f);
    }

    /**
     * 设置播放暂停
     *
     * @param isPlay 播放暂停
     */
    private void setIsPlay(boolean isPlay) {
        this.isPlay = isPlay;
        play_toggle.setImageResource(isPlay ?R.drawable.pause:  R.drawable.play );
        if(isPlay){
            vr_video_view.playVideo();
        }else{
            vr_video_view.pauseVideo();
        }
    }

    public boolean isMuted() {
        return isMuted;
    }

    /**
     * 在销毁时关闭视频，防止内存溢出
     */
    @Override
    protected void onDestroy() {
        vr_video_view.pauseRendering();
        vr_video_view.shutdown();
        super.onDestroy();
    }
}
