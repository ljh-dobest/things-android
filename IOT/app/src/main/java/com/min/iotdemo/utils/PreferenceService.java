package com.min.iotdemo.utils;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by Min on 2017/9/29.
 */

public class PreferenceService {

    private Context context;

    public PreferenceService(Context context) {
        this.context = context;
    }

    /**
     * 保存设置
     * @param key
     * @param value
     */
    public void addSetting(String key,String value) {
        SharedPreferences mySharedPreferences = context.getSharedPreferences("issp_test",
                context.MODE_PRIVATE);
        SharedPreferences.Editor editor = mySharedPreferences.edit();

        editor.putString(key, value);

        editor.commit();
    }

    /**
     * 获取设置
     * @return
     */
    public String getSetting(String key){
        SharedPreferences sharedPreferences= context.getSharedPreferences("issp_test",
                context.MODE_PRIVATE);
        // 使用getString方法获得value，注意第2个参数是value的默认值
        String clock =sharedPreferences.getString(key, "");
        return clock;
    }

    /**
     * 清掉某个设置
     * @param key
     */
    public void clearEditor(String key){
        SharedPreferences preferences = context.getSharedPreferences("base64",
                context.MODE_PRIVATE);
        /**开始清除SharedPreferences中保存的内容**/
        SharedPreferences.Editor editor = preferences.edit();
        editor.remove(key);
        editor.commit();
    }

    /**
     * 清除所有设置
     */
    public void clearData() {
        SharedPreferences preferences = context.getSharedPreferences("base64",
                context.MODE_PRIVATE);
        preferences.edit().clear().commit();
    }

}
