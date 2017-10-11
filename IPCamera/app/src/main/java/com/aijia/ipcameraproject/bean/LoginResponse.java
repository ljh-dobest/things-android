package com.aijia.ipcameraproject.bean;

/**
 * Created by Min on 2017/9/6.
 */

public class LoginResponse {
    private String data;
    private String msg;

    public LoginResponse(String data, String msg) {
        this.data = data;
        this.msg = msg;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
