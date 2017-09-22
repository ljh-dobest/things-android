package com.min.iotdemo.bean;

/**
 * Created by Min on 2017/8/28.
 */

public class EquimentBean {
    private String name;
    private String key;
    private String value;
    private boolean isCheck=false;
    private boolean isOpen=true;

    public EquimentBean(String name, String key, String value) {
        this.name = name;
        this.key = key;
        this.value = value;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    public boolean isCheck() {
        return isCheck;
    }

    public void setCheck(boolean check) {
        isCheck = check;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
