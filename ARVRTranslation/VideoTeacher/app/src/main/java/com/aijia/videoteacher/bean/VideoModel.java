package com.aijia.videoteacher.bean;

/**
 * Created by shuyu on 2016/11/11.
 */

public class VideoModel {
    private String describe;
    private String url;

    public VideoModel() {
    }

    public VideoModel(String describe, String url) {
        this.describe = describe;
        this.url = url;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
