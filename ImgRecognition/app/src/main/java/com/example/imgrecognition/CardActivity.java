package com.example.imgrecognition;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;

public class CardActivity extends AppCompatActivity{
    private ImageView iv_show;
    private Bitmap bitmap;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_two);
        iv_show= (ImageView) findViewById(R.id.iv_show);

        bitmap=getIntent().getParcelableExtra("bitmap");
        iv_show.setImageBitmap(bitmap);
    }



}
