package com.aijia.videoteacher.ui;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.animation.Animation;
import android.widget.TextView;

import com.aijia.videoteacher.R;
import com.aijia.videoteacher.base.BasePopup;
import com.aijia.videoteacher.listener.OnMoreClickListener;
import com.yanzhenjie.permission.AndPermission;
import com.yanzhenjie.permission.Permission;


/**
 * Created by Min on 2016/11/24.
 * 教学下拉
 */

public class MorePopupWindow extends BasePopup implements View.OnClickListener {
    private static final int REQUEST_CODE_PERMISSION_SINGLE = 1001;
    private TextView tvMoreTakePicture,tvMoreLocalPicture,tvMoreVRPicture,tvMoreVRVideo,tvMoreBranLink,tvMoreVoiceConversion;
    private OnMoreClickListener onMoreClickListener;
    public MorePopupWindow(Activity activity, int Width) {
        super(activity, Width);
    }
public void setOnMoreClickListener(OnMoreClickListener listener){
    this.onMoreClickListener=listener;
}

    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.tv_more_takephoto:    //拍照识别
                //getCameraPermisson();
                mActivity.startActivity(new Intent(mActivity,CameraActivity.class));
                this.dismiss();
                break;
            case R.id.tv_more_localPicture:   //本地识别
                //onMoreClickListener.localPicture();
                this.dismiss();
                break;
            case R.id.tv_more_vr:   //vr图片
                mActivity.startActivity(new Intent(mActivity,VrPictureActivity.class));
                this.dismiss();
                break;
            case R.id.tv_more_vr_video:   //vr视频
                mActivity.startActivity(new Intent(mActivity,VrVideoActivity.class));
                this.dismiss();
                break;
            case R.id.tv_more_brainlink:   //脑电波
                mActivity.startActivity(new Intent(mActivity,BrainLinkActivity.class));
                this.dismiss();
                break;
            case R.id.tv_more_voiceConversion:   //语音转换
                mActivity.startActivity(new Intent(mActivity,RecordActivity.class));
                this.dismiss();
                break;
        }
    }

    private void getCameraPermisson() {
        // 申请单个权限。
        AndPermission.with(mActivity)
                .requestCode(REQUEST_CODE_PERMISSION_SINGLE)
                .permission(Permission.CAMERA,Permission.PHONE)
                .callback(this)
                // rationale作用是：用户拒绝一次权限，再次申请时先征求用户同意，再打开授权对话框；
                // 这样避免用户勾选不再提示，导致以后无法申请权限。
                // 你也可以不设置。
                .start();
    }

    @Override
    public void setTitleText() {
    }
    @Override
    public View getView() {

        LayoutInflater inflater= (LayoutInflater) mActivity.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View view=inflater.inflate(R.layout.popupwindow_more,null);
        tvMoreTakePicture= (TextView) view.findViewById(R.id.tv_more_takephoto);
        tvMoreLocalPicture= (TextView) view.findViewById(R.id.tv_more_localPicture);
        tvMoreVRPicture= (TextView) view.findViewById(R.id.tv_more_vr);
        tvMoreVRVideo= (TextView) view.findViewById(R.id.tv_more_vr_video);
        tvMoreBranLink= (TextView) view.findViewById(R.id.tv_more_brainlink);
        tvMoreVoiceConversion= (TextView) view.findViewById(R.id.tv_more_voiceConversion);
        tvMoreVoiceConversion.setOnClickListener(this);
        tvMoreTakePicture.setOnClickListener(this);
        tvMoreLocalPicture.setOnClickListener(this);
        tvMoreVRPicture.setOnClickListener(this);
        tvMoreVRVideo.setOnClickListener(this);
        tvMoreBranLink.setOnClickListener(this);

        return view;
    }

    @Override
    public Animation setAnima() {
        return null;
    }

    @Override
    public View getCancelButton() {
        return null;
    }

    @Override
    public View getCompleteButton() {
        return null;
    }
}
