package com.min.iotdemo.bean;


public class Code<T> {
    private int code;
    private T data;
    private String msg;

    public Code() {
    }

    public Code(int code, T data) {
        this.code = code;
        this.data = data;
    }

    public int getCode() {
        return code;
    }

    public Code(int code, T data, String msg) {
        this.code = code;
        this.data = data;
        this.msg = msg;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
