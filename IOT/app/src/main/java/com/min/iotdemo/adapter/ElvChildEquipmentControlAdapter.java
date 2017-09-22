package com.min.iotdemo.adapter;

import android.content.Context;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseExpandableListAdapter;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.TextView;

import com.min.iotdemo.R;
import com.min.iotdemo.bean.Equiment;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Min on 2017/6/27.
 */

public class ElvChildEquipmentControlAdapter extends BaseExpandableListAdapter {
    private List<Equiment> dataset = new ArrayList<>();
    private Context mContext;
    private LayoutInflater inflater;

    public ElvChildEquipmentControlAdapter(List<Equiment> dataset, Context context) {
        this.dataset = dataset;
        this.mContext=context;
        inflater = LayoutInflater.from(mContext);
    }

    //  获得某个父项的某个子项
    @Override
    public Object getChild(int parentPos, int childPos) {
        return dataset.get(parentPos);
    }

    //  获得父项的数量
    @Override
    public int getGroupCount() {
        return 1;
    }

    //  获得某个父项的子项数目
    @Override
    public int getChildrenCount(int parentPos) {
        return dataset.size();
    }

    //  获得某个父项
    @Override
    public Object getGroup(int parentPos) {
        return dataset;
    }

    //  获得某个父项的id
    @Override
    public long getGroupId(int parentPos) {
        return parentPos;
    }

    //  获得某个父项的某个子项的id
    @Override
    public long getChildId(int parentPos, int childPos) {
        return childPos;
    }

    //  按函数的名字来理解应该是是否具有稳定的id，这个方法目前一直都是返回false，没有去改动过
    @Override
    public boolean hasStableIds() {
        return false;
    }

    //  获得父项显示的view
    @Override
    public View getGroupView(int parentPos, boolean b, View view, ViewGroup viewGroup) {
        if (view == null) {
            view = inflater.inflate(R.layout.elv_parent_item, null);
        }
        TextView text = (TextView) view.findViewById(R.id.tv_parent_title);
        text.setText("副控件");
        return view;
    }

    //  获得子项显示的view
    @Override
    public View getChildView(int parentPos, final int childPos, boolean b, View view, ViewGroup viewGroup) {
        ViewHolder viewHolder = null;
       Equiment equiment=dataset.get(childPos);
       if(view==null){
           view = inflater.inflate(R.layout.elv_child_conteol_item, null);
           viewHolder = new ViewHolder();
           viewHolder.tv_name = (TextView) view.findViewById(R.id.tv_child_name);
           viewHolder.et_time = (EditText) view.findViewById(R.id.et_child_delayTime);
           viewHolder.et_count = (EditText) view.findViewById(R.id.et_child_count);
           viewHolder.followCheckBox = (CheckBox) view.findViewById(R.id.cb_child_check_item);
           final ViewHolder finalViewHolder = viewHolder;
           viewHolder.followCheckBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
               @Override
               public void onCheckedChanged(CompoundButton compoundButton, boolean b) {
                   Equiment info = (Equiment) finalViewHolder.followCheckBox.getTag();
                   info.setCheck(compoundButton.isChecked());
               }
           });
           viewHolder.et_time.addTextChangedListener(new TextWatcher() {
               @Override
               public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

               @Override
               public void onTextChanged(CharSequence s, int start, int before, int count) {}

               @Override
               public void afterTextChanged(Editable s) {
                   Equiment info = (Equiment) finalViewHolder.followCheckBox.getTag();
                   info.setDelayTime(s.toString());
               }
           });
           viewHolder.et_count.addTextChangedListener(new TextWatcher() {
               @Override
               public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

               @Override
               public void onTextChanged(CharSequence s, int start, int before, int count) {}

               @Override
               public void afterTextChanged(Editable s) {
                   Equiment info = (Equiment) finalViewHolder.followCheckBox.getTag();
                   info.setCount(s.toString());
               }
           });
           view.setTag(viewHolder);
           viewHolder.followCheckBox.setTag(equiment);
       }else{
           viewHolder = (ViewHolder) view.getTag();
           viewHolder.followCheckBox.setTag(equiment);
       }

        viewHolder.tv_name.setText(equiment.getName());

        viewHolder.et_time.setText(equiment.getDelayTime());
        viewHolder.et_count.setText(equiment.getCount());

        viewHolder.followCheckBox.setChecked(equiment.isCheck());


        return view;
    }

    //  子项是否可选中，如果 需要设置子项的点击事件，需要返回true
    @Override
    public boolean isChildSelectable(int i, int i1) {
        return true;
    }

    private class ViewHolder{
        private TextView tv_name;
        private EditText et_time;
        private EditText  et_count;
        private CheckBox followCheckBox;
    }
}