package com.example.imgrecognition;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import org.opencv.android.OpenCVLoader;
import org.opencv.android.Utils;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.opencv.core.Rect;

import cn.finalteam.rxgalleryfinal.RxGalleryFinal;
import cn.finalteam.rxgalleryfinal.imageloader.ImageLoaderType;
import cn.finalteam.rxgalleryfinal.rxbus.RxBusResultDisposable;
import cn.finalteam.rxgalleryfinal.rxbus.event.ImageRadioResultEvent;
import io.reactivex.Observable;
import io.reactivex.ObservableEmitter;
import io.reactivex.ObservableOnSubscribe;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.annotations.NonNull;
import io.reactivex.functions.Consumer;
import io.reactivex.schedulers.Schedulers;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private String[] mNames = {"万磁王", "恩佐斯", "加拉克苏斯大王", "死亡之翼", "伊兰尼库斯"};
    private int[] mImgs = {R.mipmap.a, R.mipmap.b, R.mipmap.c, R.mipmap.d, R.mipmap.e};
    private final static int IMG_RECOGNITION = 0;
    private ImageView iv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        iv = (ImageView) findViewById(R.id.iv);
        findViewById(R.id.bt).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, ImgRecognitionActivity.class);
                startActivityForResult(intent, IMG_RECOGNITION);
            }
        });
        findViewById(R.id.btn_fg).setOnClickListener(this);
        findViewById(R.id.btn_lens).setOnClickListener(this);
    }

    //图像去深色背景分割
    //"/storage/sdcard0/DCIM/Camera/IMG_20171009_135322.jpg"
    private void division(final String imgPath) {
        //Bitmap bitmap = BitmapFactory.decodeResource(getResources(), R.mipmap.a);
        Observable.create(new ObservableOnSubscribe<Bitmap>() {
            @Override
            public void subscribe(@NonNull ObservableEmitter<Bitmap> e) throws Exception {
                Bitmap bitmap=ratio(imgPath,500f,300f);
                Mat src=new Mat(bitmap.getHeight(),bitmap.getWidth(),CvType.CV_8U);
                Utils.bitmapToMat(bitmap,src);
                Rect proRect= ImageOpencv.contourList(src);
                Bitmap processBitmap =Bitmap.createBitmap(bitmap, proRect.x, proRect.y, proRect.width,  proRect.height, null, false);
                e.onNext(processBitmap);
            }
        }).subscribeOn(Schedulers.io())
          .observeOn(AndroidSchedulers.mainThread())
          .subscribe(new Consumer<Bitmap>() {
              @Override
              public void accept(@NonNull Bitmap bitmap) throws Exception {
                  iv.setImageBitmap(bitmap);
              }
          }, new Consumer<Throwable>() {
              @Override
              public void accept(@NonNull Throwable throwable) throws Exception {
              Toast.makeText(MainActivity.this,throwable.toString(),Toast.LENGTH_SHORT).show();
              }
          });
    }

    @Override
    protected void onResume() {
        super.onResume();
        OpenCVLoader.initDebug();

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (resultCode == RESULT_OK && requestCode == IMG_RECOGNITION) {
            int data2 = data.getIntExtra("data", -1);
            Toast.makeText(this, "看到的是" + mNames[data2], Toast.LENGTH_LONG).show();
            //iv.setImageResource(mImgs[data2]);
           // Bitmap bitmap = BitmapFactory.decodeResource(getResources(), R.mipmap.a);
            Bitmap bitmap=ratio("/storage/sdcard0/DCIM/Camera/IMG_20171009_135322.jpg",500f,300f);
            int hight=bitmap.getHeight();
            int width=bitmap.getWidth();
            Mat src=new Mat(bitmap.getHeight(),bitmap.getWidth(), CvType.CV_8UC4);
            Utils.bitmapToMat(bitmap,src);
            Mat proSrc= ImageOpencv.differenceOfGaussian(src);
            Bitmap processBitmap=Bitmap.createBitmap(proSrc.cols(),proSrc.rows(),Bitmap.Config.ARGB_8888);
            Utils.matToBitmap(proSrc,processBitmap);
            iv.setImageBitmap(processBitmap);
        }
        super.onActivityResult(requestCode, resultCode, data);
    }



    //等比例缩放图片
    public Bitmap ratio(String imgPath, float pixelW, float pixelH) {
        BitmapFactory.Options newOpts = new BitmapFactory.Options();
        // 开始读入图片，此时把options.inJustDecodeBounds 设回true，即只读边不读内容
        newOpts.inJustDecodeBounds = true;
        newOpts.inPreferredConfig = Bitmap.Config.RGB_565;
        // Get bitmap info, but notice that bitmap is null now
        Bitmap bitmap = BitmapFactory.decodeFile(imgPath,newOpts);
        newOpts.inJustDecodeBounds = false;
        int w = newOpts.outWidth;
        int h = newOpts.outHeight;
        // 想要缩放的目标尺寸
        float hh = pixelH;// 设置高度为240f时，可以明显看到图片缩小了
        float ww = pixelW;// 设置宽度为120f，可以明显看到图片缩小了
        // 缩放比。由于是固定比例缩放，只用高或者宽其中一个数据进行计算即可
        int be = 1;//be=1表示不缩放
        if (w > h && w > ww) {//如果宽度大的话根据宽度固定大小缩放
            be = (int) (newOpts.outWidth / ww);
        } else if (w < h && h > hh) {//如果高度高的话根据宽度固定大小缩放
            be = (int) (newOpts.outHeight / hh);
        }
        if (be <= 0) be = 1;
        newOpts.inSampleSize = be;//设置缩放比例
        // 开始压缩图片，注意此时已经把options.inJustDecodeBounds 设回false了
        bitmap = BitmapFactory.decodeFile(imgPath, newOpts);
        // 压缩好比例大小后再进行质量压缩
//        return compress(bitmap, maxSize); // 这里再进行质量压缩的意义不大，反而耗资源，删除
        return bitmap;
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.btn_fg:
                RxGalleryFinal
                        .with(MainActivity.this)
                        .image()
                        .radio()
                        .imageLoader(ImageLoaderType.GLIDE)
                        .subscribe(new RxBusResultDisposable<ImageRadioResultEvent>() {
                            @Override
                            protected void onEvent(ImageRadioResultEvent imageRadioResultEvent) throws Exception {
                                String  imgFilePath=imageRadioResultEvent.getResult().getOriginalPath();
                                division(imgFilePath);
                            }
                        })
                        .openGallery();
                break;
            case R.id.btn_lens:
                startActivity(new Intent(this,LensActivity.class));
                break;
        }
    }
}
