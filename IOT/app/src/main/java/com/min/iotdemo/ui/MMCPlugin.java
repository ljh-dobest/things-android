package com.min.iotdemo.ui;

import android.Manifest;
import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Environment;
import android.support.v4.app.ActivityCompat;

import com.ike.mylibrary.widget.dialog.LoadDialog;
import com.qihoo360.replugin.RePlugin;
import com.qihoo360.replugin.model.PluginInfo;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * Created by Min on 2017/9/16.
 */

/**
 * 插件应用加载类
 */
public class MMCPlugin {
    private static MMCPlugin instance = null;

    private MMCPlugin() {
    }

    public static MMCPlugin getInstance() {
        if (instance == null) {
            instance = new MMCPlugin();
        }
        return instance;
    }

    /**
     * 打开插件
     *
     * @param context
     * @param pluginName
     * @param activityName
     * @param installListener
     */
    public void openPlugin(Context context, String pluginName, String activityName, InstallListener installListener) {
        this.installListener = installListener;
        if (RePlugin.isPluginInstalled(pluginName)) {//判断是否已经安装，安装了的话，就打开Activity，并且检查插件版本，需要更新的话就下载插件
            LoadDialog.dismiss(context);
          Intent intent=new Intent();
           // intent.putExtra("url", HttpUtils.URL);
           openActivity(context,intent,pluginName,activityName);//带参数启动
           // RePlugin.startActivity(context, RePlugin.createIntent(pluginName, activityName));
           // PluginInfo info = RePlugin.getPluginInfo(pluginName);
//            if (info.getVersion() < 2) {
//                //版本号由你们接口获得，然后进行对比，插件版本低于接口的版本就下载更新
//                downPlugin(context, "http://插件地址", pluginName, activityName, true);
//            }
        } else {
            LoadDialog.show(context);
            downPlugin(context, "http://插件地址", pluginName, activityName, false);
        }
    }

    /**
     * 安装插件
     *
     * @param context
     * @param pluginName
     * @param activityName
     */
    public void installPlugin(final Context context, final String pluginName, final String activityName, boolean isUpdate) {
        final PluginInfo info = RePlugin.install(Environment.getExternalStorageDirectory() + "/" + pluginName + ".apk");
        if (info != null) {
            if (isUpdate) {//判断，是否为更新，如果是更新就预加载，下次打开就是最新的插件，不是更新就开始安装
                RePlugin.preload(info);
            } else {
                installListener.onSuccess();
            }
        } else {
            if (installListener != null) {
                installListener.onFail("安装失败");
            }
        }
    }

    /**
     * 下载插件
     *
     * @param context
     * @param fileUrl
     * @param pluginName
     * @param activityName
     */
    public void downPlugin(final Context context, String fileUrl, final String pluginName, final String activityName, final boolean isUpdate) {
        //获取文件存储权限
        if (ActivityCompat.checkSelfPermission(context, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions((Activity) context, new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, 1);
        }
        copyAssetsFileToAppFiles(context, "plugins" + File.separator + pluginName+".apk",pluginName);
        installPlugin(context,pluginName,activityName,isUpdate);
    }

    /**
     * 从assets目录中复制某文件内容
     *  @param  assetFileName assets目录下的Apk源文件路径
     *
     */
    private void copyAssetsFileToAppFiles(Context context,String assetFileName,String pluginName ) {
        InputStream is = null;
        OutputStream fos = null;
        int buffsize = 1024;

        try {
            is =context .getAssets().open(assetFileName);
            File file=new File(Environment.getExternalStorageDirectory()  +"/"+pluginName + ".apk");
            if(!file.exists()){
                file.createNewFile();
            }
            fos =new FileOutputStream(file);
            int byteCount = 0;
            byte[] buffer = new byte[buffsize];
            while((byteCount = is.read(buffer)) != -1) {
                fos.write(buffer, 0, byteCount);
            }
            fos.flush();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                is.close();
                fos.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * 打开插件的Activity
     *
     * @param context
     * @param pluginName
     * @param activityName
     */
    public void openActivity(Context context, String pluginName, String activityName) {
        RePlugin.startActivity(context, RePlugin.createIntent(pluginName, activityName));
    }

    /**
     * 打开插件的Activity 可带参数传递
     *
     * @param context
     * @param intent
     * @param pluginName
     * @param activityName
     */
    public void openActivity(Context context, Intent intent, String pluginName, String activityName) {
        intent.setComponent(new ComponentName(pluginName, activityName));
        RePlugin.startActivity(context, intent);
    }

    /**
     * 打开插件的Activity 带回调
     *
     * @param activity
     * @param intent
     * @param pluginName
     * @param activityName
     * @param requestCode
     */
    public void openActivityForResult(Activity activity, Intent intent, String pluginName, String activityName, int requestCode) {
        intent.setComponent(new ComponentName(pluginName, activityName));
        RePlugin.startActivityForResult(activity, intent, requestCode, null);
    }

    private InstallListener installListener;

    public interface InstallListener {
        void onInstalling(int progress);

        void onFail(String msg);

        void onSuccess();
    }

}
