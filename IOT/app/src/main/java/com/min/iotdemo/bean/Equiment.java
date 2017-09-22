package com.min.iotdemo.bean;

/**
 * Created by Min on 2017/7/1.
 */

public class Equiment {
    private String id;
    private String name;
    private String status;
    private String delayTime;
    private String count;
    private boolean isCheck;

    public Equiment(String id, String name, String status, String delayTime, String count, boolean isCheck) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.delayTime = delayTime;
        this.count = count;
        this.isCheck = isCheck;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String count) {
        this.count = count;
    }

    public String getDelayTime() {
        return delayTime;
    }

    public void setDelayTime(String delayTime) {
        this.delayTime = delayTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean isCheck() {
        return isCheck;
    }

    public void setCheck(boolean check) {
        isCheck = check;
    }
}
