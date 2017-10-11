package com.min.iotdemo.ui;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;

import com.ike.mylibrary.widget.dialog.LoadDialog;
import com.min.iotdemo.MainActivity;
import com.min.iotdemo.R;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

/**
 * 启动选择跳转页
 */
public class StartUpActivity extends AppCompatActivity {
    @BindView(R.id.tv_issp)
    TextView tv_issp;
    @BindView(R.id.tv_iot)
    TextView tv_iot;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_start_up);
        ButterKnife.bind(this);
    }
    @OnClick({R.id.tv_issp, R.id.tv_iot,R.id.tv_zj,R.id.tv_xm,R.id.tv_yg})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.tv_issp:
                MMCPlugin.getInstance().openPlugin(this, "ISSP", "com.ionicframework.ionicwelcome766043.MainActivity", new MMCPlugin.InstallListener() {
                    @Override
                    public void onInstalling(int progress) {
                    }

                    @Override
                    public void onFail(String msg) {
                    }

                    @Override
                    public void onSuccess() {
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                LoadDialog.dismiss(StartUpActivity.this);
                                Intent intent = new Intent();
                                // intent.putExtra("url", HttpUtils.URL);
                                MMCPlugin.getInstance().openActivity(StartUpActivity.this, intent, "ISSP", "com.ionicframework.ionicwelcome766043.MainActivity");//带参数启动
                            }
                        });
                    }
                });
                break;
            case R.id.tv_iot:
                startActivity(new Intent(this, MainActivity.class));
                break;
            case R.id.tv_zj:
                Intent intent= new Intent();
               // intent.putExtra("url","https://moneymarke.issp.bjike.com/index");
                intent.setAction("android.intent.action.VIEW");
                Uri content_url = Uri.parse("https://moneymarke.issp.bjike.com/index");
                intent.setData(content_url);
                startActivity(intent);
                break;
            case R.id.tv_xm:
                Intent projectmark_intent= new Intent();
                projectmark_intent.setAction("android.intent.action.VIEW");
               // projectmark_intent.putExtra("url","https://projectmark.issp.bjike.com/index");
                Uri projectmark_url = Uri.parse("https://projectmark.issp.bjike.com/index");
                projectmark_intent.setData(projectmark_url);
                startActivity(projectmark_intent);
                break;
            case R.id.tv_yg:
                Intent opportunity_intent= new Intent();
              //  opportunity_intent.putExtra("url","https://opportunity.issp.bjike.com/index");
                opportunity_intent.setAction("android.intent.action.VIEW");
                Uri opportunity_url = Uri.parse("https://opportunity.issp.bjike.com/index");
                opportunity_intent.setData(opportunity_url);
                startActivity(opportunity_intent);
                break;
        }
    }
}
