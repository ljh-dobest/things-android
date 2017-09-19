package com.aijia.videoteacher.utills;

/**
 * Created by Min on 2017/7/25.
 */

public class DataUtils {
    public static long lastClickTime=0;
    public static boolean isFastDoubleClick() {
        long time = System.currentTimeMillis();
        long timeD = time - lastClickTime;
        lastClickTime = time;
        return timeD <= 300;
    }
}
