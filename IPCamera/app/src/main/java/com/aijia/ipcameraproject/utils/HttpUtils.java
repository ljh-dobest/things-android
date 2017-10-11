package com.aijia.ipcameraproject.utils;

import com.zhy.http.okhttp.OkHttpUtils;
import com.zhy.http.okhttp.callback.Callback;
import com.zhy.http.okhttp.callback.StringCallback;

import java.io.File;
import java.util.Map;

/**
 *Created by T-BayMax on 2017/3/13.
 */
public class HttpUtils {
//          public static final String IMAGE_URL ="http://192.168.0.104:90";
//      public static final String URL ="http://192.168.0.104:90/appapi/app";
     public static String URL = "https://wl.bjike.com/redis/app";
     //public static String LOCAL_URL = "http://192.168.0.113:90/redis/app";
    public static final String IMAGE_URL = "https://sq.bjike.com";
    private static final String TAG = "HttpClient-Request";




    /**
     * Patch请求
     *
     * @param url
     * @param callback
     */
    public static void sendPatchRequest(String url, StringCallback callback) {
        OkHttpUtils
                .patch()
                .url(URL + url)
                .build()
                .execute(callback);
    }


    /**
     * post提交文件
     *
     * @param url
     * @param file
     * @param callback
     */
    public static void sendFilePostRequest(String url, File file, Callback callback) {
        OkHttpUtils
                .postFile()
                .url(URL + url)
                .file(file)
                .build()
                .execute(callback);
    }

    /**
     * 上传单个文件
     *
     * @param url
     * @param params
     * @param headers
     * @param file
     * @param fileName
     * @param callback
     */
    public static void sendFormatPostRequest(String url, Map<String, String> params,
                                             Map<String, String> headers, File file, String fileName, Callback callback) {

        OkHttpUtils.post()
                .addFile(fileName, file.getName(), file)
                .url(URL + url)
                .params(params)
                .headers(headers)
                .build()
                .execute(callback);
    }

    /**
     * 上传多个文件
     *
     * @param url
     * @param params
     * @param headers
     * @param files
     * @param fileName
     * @param callback
     */
    public static void sendFormatPostRequest(String url, Map<String, String> params,
                                             Map<String, String> headers, Map<String, File> files, String fileName, Callback callback) {
        OkHttpUtils.post()
                .headers(headers)
                .url(URL + url)
                .params(params)
                .files(fileName, files)
                .build()
                .execute(callback);
    }

  public  static void postSingleControl(String url,String name, String status,StringCallback callback ){
      OkHttpUtils.post()
              .addHeader("Connection", "close")
              .url(URL+url)
              .addParams("name",name)
              .addParams("status",status)
              .build()
              .execute(callback);
  }

    /**
     *
     * @param url
     * @param callback
     */
  public  static void postAllControl(String url,String GroupKeyList,StringCallback callback ){
      OkHttpUtils.post()
              .addHeader("Connection", "close")
              .url(URL+url)
              .addParams("sort",GroupKeyList)
              .build()
              .execute(callback);
  }

    public  static void postSingalParameterControl(String url,String name, String time, String count,StringCallback callback ){
        OkHttpUtils.post()
                .addHeader("Connection", "close")
                .url(URL+url)
                .addParams("name",name)
                .addParams("time",(Integer.valueOf(time)*100000)+"")
                .addParams("count",count)
                .build()
                .execute(callback);
    }
    /**
     * 上传注册照片
     *
     * @param url
     * @param callback
     */
    public static void sendLoginPictrue(String url,File file,String userName, StringCallback callback) {
        OkHttpUtils.post()
                .addHeader("Connection", "close")
                .addFile("file", file.getName(), file)
                .addParams("username",userName)
                .url(URL + url)
                .build()
                .execute(callback);
    }

    public static void sendVeriflyPictrue(String url, File file, String userName, StringCallback stringCallback) {
        OkHttpUtils.post()
                .addHeader("Connection", "close")
                .addFile("file", file.getName(), file)
                .addParams("username",userName)
                .url(URL + url)
                .build()
                .execute(stringCallback);
    }
}
