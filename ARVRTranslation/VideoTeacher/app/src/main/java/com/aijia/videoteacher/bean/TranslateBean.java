package com.aijia.videoteacher.bean;

/**
 * Created by Min on 2017/8/14.
 */

public class TranslateBean {
    private int code;
    private String content;
    private String msg;

    public TranslateBean(int code, String content, String msg) {
        this.code = code;
        this.content = content;
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
