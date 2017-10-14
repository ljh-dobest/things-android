package com.example.imgrecognition;

import android.app.Application;

import org.opencv.android.OpenCVLoader;

/**
 * Created by Min on 2017/10/10.
 */

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        OpenCVLoader.initDebug();
    }
}
