//package com.aijia.videoteacher.utills;
//
//import android.net.Uri;
//import android.os.Environment;
//import android.view.View;
//import android.widget.EditText;
//import android.widget.RadioGroup;
//
//import com.aijia.videoteacher.R;
//import com.jph.takephoto.app.TakePhoto;
//import com.jph.takephoto.compress.CompressConfig;
//import com.jph.takephoto.model.CropOptions;
//import com.jph.takephoto.model.LubanOptions;
//import com.jph.takephoto.model.TakePhotoOptions;
//
//import java.io.File;
//
///**
// * Created by Min on 2017/7/20.
// */
//
//public class CustomHelper {
//    private View rootView;
//    private RadioGroup rgCrop,rgCompress,rgFrom,rgCropSize,rgCropTool,rgShowProgressBar,rgPickTool,rgCompressTool,rgCorrectTool,rgRawFile;
//    private EditText etCropHeight,etCropWidth,etLimit,etSize,etHeightPx,etWidthPx;
//    public static CustomHelper of(View rootView){
//        return new CustomHelper(rootView);
//    }
//    private CustomHelper(View rootView) {
//        this.rootView = rootView;
//        init();
//    }
//    private void init(){
//
//
//    }
//
//    public void onClick(View view,TakePhoto takePhoto) {
//        File file=new File(Environment.getExternalStorageDirectory(), "/temp/"+System.currentTimeMillis() + ".jpg");
//        if (!file.getParentFile().exists())file.getParentFile().mkdirs();
//        Uri imageUri = Uri.fromFile(file);
//
//        configCompress(takePhoto);
//        configTakePhotoOption(takePhoto);
//        switch (view.getId()){
//            case R.id.btnPickBySelect:
//                int limit= Integer.parseInt(etLimit.getText().toString());
//                if(limit>1){
//                    if(rgCrop.getCheckedRadioButtonId()==R.id.rbCropYes){
//                        takePhoto.onPickMultipleWithCrop(limit,getCropOptions());
//                    }else {
//                        takePhoto.onPickMultiple(limit);
//                    }
//                    return;
//                }
//                if(rgFrom.getCheckedRadioButtonId()==R.id.rbFile){
//                    if(rgCrop.getCheckedRadioButtonId()==R.id.rbCropYes){
//                        takePhoto.onPickFromDocumentsWithCrop(imageUri,getCropOptions());
//                    }else {
//                        takePhoto.onPickFromDocuments();
//                    }
//                    return;
//                }else {
//                    if(rgCrop.getCheckedRadioButtonId()==R.id.rbCropYes){
//                        takePhoto.onPickFromGalleryWithCrop(imageUri,getCropOptions());
//                    }else {
//                        takePhoto.onPickFromGallery();
//                    }
//                }
//                break;
//            case R.id.btnPickByTake:
//
//                    takePhoto.onPickFromCapture(imageUri);
//
//                break;
//            default:
//                break;
//        }
//    }
//    private void configTakePhotoOption(TakePhoto takePhoto){
//        TakePhotoOptions.Builder builder=new TakePhotoOptions.Builder();
//        if(rgPickTool.getCheckedRadioButtonId()==R.id.rbPickWithOwn){
//            builder.setWithOwnGallery(true);
//        }
//        if(rgCorrectTool.getCheckedRadioButtonId()==R.id.rbCorrectYes){
//            builder.setCorrectImage(true);
//        }
//        takePhoto.setTakePhotoOptions(builder.create());
//
//    }
//    private void configCompress(TakePhoto takePhoto){
//        if(rgCompress.getCheckedRadioButtonId()!=R.id.rbCompressYes){
//            takePhoto.onEnableCompress(null,false);
//            return ;
//        }
//        int maxSize= Integer.parseInt(etSize.getText().toString());
//        int width= Integer.parseInt(etCropWidth.getText().toString());
//        int height= Integer.parseInt(etHeightPx.getText().toString());
//        boolean showProgressBar=rgShowProgressBar.getCheckedRadioButtonId()==R.id.rbShowYes? true:false;
//        boolean enableRawFile = rgRawFile.getCheckedRadioButtonId() == R.id.rbRawYes ? true : false;
//        CompressConfig config;
//        if(rgCompressTool.getCheckedRadioButtonId()==R.id.rbCompressWithOwn){
//            config=new CompressConfig.Builder()
//                    .setMaxSize(maxSize)
//                    .setMaxPixel(width>=height? width:height)
//                    .enableReserveRaw(enableRawFile)
//                    .create();
//        }else {
//            LubanOptions option=new LubanOptions.Builder()
//                    .setMaxHeight(height)
//                    .setMaxWidth(width)
//                    .setMaxSize(maxSize)
//                    .create();
//            config=CompressConfig.ofLuban(option);
//            config.enableReserveRaw(enableRawFile);
//        }
//        takePhoto.onEnableCompress(config,showProgressBar);
//
//
//    }
//    private CropOptions getCropOptions(){
//        if(rgCrop.getCheckedRadioButtonId()!=R.id.rbCropYes)return null;
//        int height= Integer.parseInt(etCropHeight.getText().toString());
//        int width= Integer.parseInt(etCropWidth.getText().toString());
//        boolean withWonCrop=rgCropTool.getCheckedRadioButtonId()==R.id.rbCropOwn? true:false;
//
//        CropOptions.Builder builder=new CropOptions.Builder();
//
//        if(rgCropSize.getCheckedRadioButtonId()== R.id.rbAspect){
//            builder.setAspectX(width).setAspectY(height);
//        }else {
//            builder.setOutputX(width).setOutputY(height);
//        }
//        builder.setWithOwnCrop(withWonCrop);
//        return builder.create();
//    }
//}
