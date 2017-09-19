package com.aijia.videoteacher.ui;

import android.content.ComponentName;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.speech.RecognitionListener;
import android.speech.SpeechRecognizer;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.aijia.videoteacher.R;
import com.aijia.videoteacher.bean.TranslateBean;
import com.aijia.videoteacher.utills.Constant;
import com.aijia.videoteacher.utills.HttpUtils;
import com.baidu.speech.VoiceRecognitionService;
import com.baidu.tts.auth.AuthInfo;
import com.baidu.tts.client.SpeechError;
import com.baidu.tts.client.SpeechSynthesizer;
import com.baidu.tts.client.SpeechSynthesizerListener;
import com.baidu.tts.client.TtsMode;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.zhy.http.okhttp.callback.StringCallback;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;

import okhttp3.Call;

public class RecordActivity extends AppCompatActivity implements RecognitionListener {
    private TextView txtLog;
    private Button btn,setting,play;
    private TextView txtResult;
    public static final int STATUS_None = 0;
    public static final int STATUS_WaitingReady = 2;
    public static final int STATUS_Ready = 3;
    public static final int STATUS_Speaking = 4;
    public static final int STATUS_Recognition = 5;
    private SpeechRecognizer speechRecognizer;
    // 语音合成客户端
    private SpeechSynthesizer mSpeechSynthesizer;
    private int status = STATUS_None;
    private long speechEndTime = -1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_record);
        txtResult = (TextView) findViewById(R.id.txtResult);
        txtLog = (TextView) findViewById(R.id.txtLog);
        btn = (Button) findViewById(R.id.start);
        setting = (Button) findViewById(R.id.setting);
        play = (Button) findViewById(R.id.startPlay);
        // 创建识别器
        speechRecognizer = SpeechRecognizer.createSpeechRecognizer(this, new ComponentName(this, VoiceRecognitionService.class));
        // 注册监听器
        speechRecognizer.setRecognitionListener(this);
        setting.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                Intent intent = new Intent("com.baidu.speech.asr.demo.setting");
                startActivity(intent);
            }
        });
        btn.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                    switch (status) {
                        case STATUS_None:
                            start();
                            txtLog.setText("");
                            btn.setText("取消");
                            status = STATUS_WaitingReady;
                            break;
                        case STATUS_WaitingReady:
                            cancel();
                            status = STATUS_None;
                            btn.setText("开始");
                            break;
                        case STATUS_Ready:
                            cancel();
                            status = STATUS_None;
                            btn.setText("开始");
                            break;
                        case STATUS_Speaking:
                            stop();
                            status = STATUS_Recognition;
                            btn.setText("识别中");
                            break;
                        case STATUS_Recognition:
                            cancel();
                            status = STATUS_None;
                            btn.setText("开始");
                            break;
                    }
            }
        });
     play.setOnClickListener(new View.OnClickListener() {
         @Override
         public void onClick(View v) {
            startActivity(new Intent(RecordActivity.this,SpeakActivity.class));
         }
     });
        initTTS();
    }

    private void initTTS() {
        // 获取语音合成对象实例
        mSpeechSynthesizer = SpeechSynthesizer.getInstance();
        // 设置context
        mSpeechSynthesizer.setContext(this);
        // 设置语音合成状态监听器
        mSpeechSynthesizer.setSpeechSynthesizerListener(new SpeechSynthesizerListener() {
            @Override
            public void onSynthesizeStart(String s) {
                // 监听到合成开始，在此添加相关操作
                Log.e("tts","合成开始");
            }

            @Override
            public void onSynthesizeDataArrived(String s, byte[] bytes, int i) {
                // 监听到有合成数据到达，在此添加相关操作
                Log.e("tts","合成数据到达");
            }

            @Override
            public void onSynthesizeFinish(String s) {
                // 监听到合成结束，在此添加相关操作
                Log.e("tts","合成结束");
            }

            @Override
            public void onSpeechStart(String s) {
             // 监听到合成并播放开始，在此添加相关操作、
                Log.e("tts","播放开始");
            }

            @Override
            public void onSpeechProgressChanged(String s, int i) {
            // 监听到播放进度有变化，在此添加相关操作
            }

            @Override
            public void onSpeechFinish(String s) {
                // 监听到播放结束，在此添加相关操作
                Log.e("tts","播放结束");
            }

            @Override
            public void onError(String s, SpeechError speechError) {
                // 监听到出错，在此添加相关操作
                Log.e("tts",speechError.code+""+speechError.description);
            }
        });
        // 设置在线语音合成授权，需要填入从百度语音官网申请的api_key和secret_key
        mSpeechSynthesizer.setApiKey("rGkqVmykWcgQzqONu4134sIy", "18VdjiwII9ZkxKtaPGClliTpCotmuaI1");
        // 设置离线语音合成授权，需要填入从百度语音官网申请的app_id
        mSpeechSynthesizer.setAppId("9990407");
        // 发音人（在线引擎），可用参数为0,1,2,3。。。（服务器端会动态增加，各值含义参考文档，以文档说明为准。0--普通女声，1--普通男声，2--特别男声，3--情感男声。。。）
        this.mSpeechSynthesizer.setParam(SpeechSynthesizer.PARAM_SPEAKER, "0");
        // 设置Mix模式的合成策略
        this.mSpeechSynthesizer.setParam(SpeechSynthesizer.PARAM_MIX_MODE, SpeechSynthesizer.MIX_MODE_DEFAULT);
        AuthInfo authInfo = this.mSpeechSynthesizer.auth(TtsMode.MIX);
        if (authInfo.isSuccess()) {
            Log.e("tts","auth success");
        } else {
            String errorMsg = authInfo.getTtsError().getDetailMessage();
            Log.e("tts","auth failed errorMsg=" + errorMsg);
        }
        // 初始化tts
        mSpeechSynthesizer.initTts(TtsMode.MIX);
    }

    // 开始识别
    void start() {
        Intent intent = new Intent();
        bindParams(intent);
        SharedPreferences sp = PreferenceManager.getDefaultSharedPreferences(this);
        {

            String args = sp.getString("args", "");
            if (null != args) {

                intent.putExtra("args", args);
            }
        }
            speechEndTime = -1;
            speechRecognizer.startListening(intent);
    }

    public void bindParams(Intent intent) {
        SharedPreferences sp = PreferenceManager.getDefaultSharedPreferences(this);
        if (sp.getBoolean("tips_sound", true)) {
            intent.putExtra(Constant.EXTRA_SOUND_START, R.raw.bdspeech_recognition_start);
            intent.putExtra(Constant.EXTRA_SOUND_END, R.raw.bdspeech_speech_end);
            intent.putExtra(Constant.EXTRA_SOUND_SUCCESS, R.raw.bdspeech_recognition_success);
            intent.putExtra(Constant.EXTRA_SOUND_ERROR, R.raw.bdspeech_recognition_error);
            intent.putExtra(Constant.EXTRA_SOUND_CANCEL, R.raw.bdspeech_recognition_cancel);
        }

         //识别本地音频
           // intent.putExtra(Constant.EXTRA_INFILE, );

        if (sp.getBoolean(Constant.EXTRA_OUTFILE, false)) {
            intent.putExtra(Constant.EXTRA_OUTFILE, "sdcard/outfile.pcm");
        }

        if (sp.contains(Constant.EXTRA_SAMPLE)) {
            String tmp = sp.getString(Constant.EXTRA_SAMPLE, "").replaceAll(",.*", "").trim();
            if (null != tmp && !"".equals(tmp)) {
                intent.putExtra(Constant.EXTRA_SAMPLE, Integer.parseInt(tmp));
            }
        }
        if (sp.contains(Constant.EXTRA_LANGUAGE)) {
            String tmp = sp.getString(Constant.EXTRA_LANGUAGE, "").replaceAll(",.*", "").trim();
            if (null != tmp && !"".equals(tmp)) {
                intent.putExtra(Constant.EXTRA_LANGUAGE, tmp);
            }
        }
        if (sp.contains(Constant.EXTRA_NLU)) {
            String tmp = sp.getString(Constant.EXTRA_NLU, "").replaceAll(",.*", "").trim();
            if (null != tmp && !"".equals(tmp)) {
                intent.putExtra(Constant.EXTRA_NLU, tmp);
            }
        }

        if (sp.contains(Constant.EXTRA_VAD)) {
            String tmp = sp.getString(Constant.EXTRA_VAD, "").replaceAll(",.*", "").trim();
            if (null != tmp && !"".equals(tmp)) {
                intent.putExtra(Constant.EXTRA_VAD, tmp);
            }
        }
        String prop = null;
        if (sp.contains(Constant.EXTRA_PROP)) {
            String tmp = sp.getString(Constant.EXTRA_PROP, "").replaceAll(",.*", "").trim();
            if (null != tmp && !"".equals(tmp)) {
                intent.putExtra(Constant.EXTRA_PROP, Integer.parseInt(tmp));
                prop = tmp;
            }
        }

        // offline asr
        {
            intent.putExtra(Constant.EXTRA_OFFLINE_ASR_BASE_FILE_PATH, "/sdcard/easr/s_1");
            if (null != prop) {
                int propInt = Integer.parseInt(prop);
                if (propInt == 10060) {
                    intent.putExtra(Constant.EXTRA_OFFLINE_LM_RES_FILE_PATH, "/sdcard/easr/s_2_Navi");
                } else if (propInt == 20000) {
                    intent.putExtra(Constant.EXTRA_OFFLINE_LM_RES_FILE_PATH, "/sdcard/easr/s_2_InputMethod");
                }
            }
            intent.putExtra(Constant.EXTRA_OFFLINE_SLOT_DATA, buildTestSlotData());
        }
    }
    private String buildTestSlotData() {
        JSONObject slotData = new JSONObject();
        JSONArray name = new JSONArray().put("李涌泉").put("郭下纶");
        JSONArray song = new JSONArray().put("七里香").put("发如雪");
        JSONArray artist = new JSONArray().put("周杰伦").put("李世龙");
        JSONArray app = new JSONArray().put("手机百度").put("百度地图");
        JSONArray usercommand = new JSONArray().put("关灯").put("开门");
        try {
            slotData.put(Constant.EXTRA_OFFLINE_SLOT_NAME, name);
            slotData.put(Constant.EXTRA_OFFLINE_SLOT_SONG, song);
            slotData.put(Constant.EXTRA_OFFLINE_SLOT_ARTIST, artist);
            slotData.put(Constant.EXTRA_OFFLINE_SLOT_APP, app);
            slotData.put(Constant.EXTRA_OFFLINE_SLOT_USERCOMMAND, usercommand);
        } catch (JSONException e) {

        }
        return slotData.toString();
    }
    @Override
    public void onReadyForSpeech(Bundle params) {
        // 准备就绪
        status = STATUS_Ready;
        print("准备就绪，可以开始说话");
    }

    @Override
    public void onBeginningOfSpeech() {
        // 开始说话处理
        status = STATUS_Speaking;
        btn.setText("说完了");
        print("检测到用户的已经开始说话");
    }
    @Override
    public void onRmsChanged(float rmsdB) {
        // 音量变化处理
    }
    @Override
    public void onBufferReceived(byte[] buffer) {
        // 录音数据传出处理
    }
    @Override
    public void onEndOfSpeech() {
        // 说话结束处理
        status = STATUS_Recognition;
        print("检测到用户的已经停止说话");
        btn.setText("识别中");

    }
    @Override
    public void onError(int error) {
        // 出错处理
        status = STATUS_None;
        StringBuilder sb = new StringBuilder();
        switch (error) {
            case SpeechRecognizer.ERROR_AUDIO:
                sb.append("音频问题");
                break;
            case SpeechRecognizer.ERROR_SPEECH_TIMEOUT:
                sb.append("没有语音输入");
                break;
            case SpeechRecognizer.ERROR_CLIENT:
                sb.append("其它客户端错误");
                break;
            case SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS:
                sb.append("权限不足");
                break;
            case SpeechRecognizer.ERROR_NETWORK:
                sb.append("网络问题");
                break;
            case SpeechRecognizer.ERROR_NO_MATCH:
                sb.append("没有匹配的识别结果");
                break;
            case SpeechRecognizer.ERROR_RECOGNIZER_BUSY:
                sb.append("引擎忙");
                break;
            case SpeechRecognizer.ERROR_SERVER:
                sb.append("服务端错误");
                break;
            case SpeechRecognizer.ERROR_NETWORK_TIMEOUT:
                sb.append("连接超时");
                break;
        }
        sb.append(":" + error);
        print("识别失败：" + sb.toString());
        btn.setText("开始");
//        start();
//        status = STATUS_WaitingReady;
    }
    @Override
    public void onResults(Bundle results) {
        // 最终结果处理
        status = STATUS_None;
        ArrayList<String> nbest = results.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
       String result= Arrays.toString(nbest.toArray(new String[nbest.size()]));
        String content=result.substring(1,result.length()-1);
        print("识别成功：" +content);
//        start();
//        status = STATUS_WaitingReady;
        btn.setText("开始");
        HttpUtils.getTranslateContent("/translate/index",content, new StringCallback() {
            @Override
            public void onError(Call call, Exception e, int id) {
                Toast.makeText(RecordActivity.this, "ErrorCode = " + e.toString(), Toast.LENGTH_LONG).show();
            }

            @Override
            public void onResponse(String response, int id) {
                Gson gson=new Gson();
                Type type = new TypeToken<TranslateBean>() {
                }.getType();
                TranslateBean code=gson.fromJson(response,type);
                if(code.getCode()==200){
                 mSpeechSynthesizer.speak(code.getContent());
                }
            }
        });

    }
    @Override
    public void onPartialResults(Bundle partialResults) {
        // 临时结果处理
    }
    @Override
    public void onEvent(int eventType, Bundle params) {
        // 处理事件回调
        switch (eventType) {
            case 11: // eventType == 11 表是返回详细错误信息
                String reason = params.get("reason") + "";
                print("EVENT_ERROR, " + reason);
                break;
        }
    }

    private void stop() {
        speechRecognizer.stopListening();
        print("点击了“说完了”");
    }

    private void cancel() {
        speechRecognizer.cancel();
        status = STATUS_None;
        print("点击了“取消”");
    }
    private void print(String msg) {
            txtLog.append("" + msg + "\n");
    }
    @Override
    protected void onDestroy() {
        speechRecognizer.destroy();
        super.onDestroy();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK) {
            onResults(data.getExtras());
        }
    }
}
