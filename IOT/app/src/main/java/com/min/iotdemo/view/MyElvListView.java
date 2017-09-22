package com.min.iotdemo.view;

import android.content.Context;
import android.util.AttributeSet;
import android.widget.ExpandableListView;

/**
 * Created by Min on 2017/7/5.
 */

public class MyElvListView extends ExpandableListView {
    public MyElvListView(Context context) {
        super(context);
    }

    public MyElvListView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public MyElvListView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }


    /* Integer.MAX_VALUE >> 2,如果不设置，系统默认设置是显示两条 */
    public void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        int expandSpec = MeasureSpec.makeMeasureSpec(Integer.MAX_VALUE >> 2, MeasureSpec.AT_MOST); super.onMeasure(widthMeasureSpec, expandSpec);
    }
}
