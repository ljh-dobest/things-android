package com.min.iotdemo;


import com.jakewharton.retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;

import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


/**
 *
 * Date: 2016/12/9
 * Time: 16:46
 * FIXME
 */
public class RetrofitProvider {
    private static final String ENDPOINT = "https://wl.bjike.com/redis/app/";
    private static final String LOCAL_URL= "http://192.168.0.107:90/redis/app/";

    public static Retrofit get() {
        OkHttpClient.Builder builder = new OkHttpClient().newBuilder();
        builder.readTimeout(10, TimeUnit.SECONDS);
        builder.connectTimeout(10, TimeUnit.SECONDS);

        return new Retrofit.Builder().baseUrl(ENDPOINT)
                .client(builder.build())
                .addConverterFactory(GsonConverterFactory.create())
                .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                .build();
    }
}
