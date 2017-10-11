package com.min.iotdemo.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseExpandableListAdapter;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.TextView;

import com.min.iotdemo.R;
import com.min.iotdemo.bean.EquimentBean;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Min on 2017/6/27.
 */

public class ElvMainEquimentControlAdapter extends BaseExpandableListAdapter {
    private List<EquimentBean> dataset = new ArrayList<>();
    private Context mContext;
    private LayoutInflater inflater;

    public ElvMainEquimentControlAdapter(Context context) {
        this.mContext = context;
        inflater = LayoutInflater.from(mContext);
    }

    public void setDataset(List<EquimentBean> data) {
        this.dataset = data;
        notifyDataSetChanged();
    }

    public List<EquimentBean> getData() {
        return dataset;
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
        text.setText("广州");
        return view;
    }

    //  获得子项显示的view
    @Override
    public View getChildView(int parentPos, int childPos, boolean b, View view, ViewGroup viewGroup) {
        ViewHolder viewHolder = null;
        EquimentBean equiment = dataset.get(childPos);
        if (view == null) {
            view = inflater.inflate(R.layout.elv_child_conteol_item, null);
            viewHolder = new ViewHolder();
            viewHolder.tv_name = (TextView) view.findViewById(R.id.tv_child_name);
            viewHolder.et_time = (EditText) view.findViewById(R.id.et_child_delayTime);
            viewHolder.et_child_count= (EditText) view.findViewById(R.id.et_child_count);
            viewHolder.followCheckBox = (CheckBox) view.findViewById(R.id.cb_child_check_item);
            final ViewHolder finalViewHolder = viewHolder;
            viewHolder.followCheckBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
                @Override
                public void onCheckedChanged(CompoundButton compoundButton, boolean b) {
                    EquimentBean info = (EquimentBean) finalViewHolder.followCheckBox.getTag();
                    info.setCheck(compoundButton.isChecked());
                }
            });
//            viewHolder.et_time.addTextChangedListener(new TextWatcher() {
//                @Override
//                public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
//
//                @Override
//                public void onTextChanged(CharSequence s, int start, int before, int count) {}
//
//                @Override
//                public void afterTextChanged(Editable s) {
//                    EquimentBean info = (EquimentBean) finalViewHolder.followCheckBox.getTag();
//                    info.setDelayTime(s.toString());
//                }
//            });
            view.setTag(viewHolder);
            viewHolder.followCheckBox.setTag(equiment);
        } else {
            viewHolder = (ViewHolder) view.getTag();
            viewHolder.followCheckBox.setTag(equiment);
        }
        //判断是否是假数据
        System.out.println("----key---"+equiment.getKey());
        if (equiment.getKey().equals("")) {
            viewHolder.et_time.setVisibility(View.INVISIBLE);
            viewHolder.followCheckBox.setVisibility(View.INVISIBLE);
            viewHolder.et_child_count.setVisibility(View.INVISIBLE);
        }else if(equiment.getKey().equals("Light_cover-003")){
            viewHolder.et_time.setVisibility(View.VISIBLE);
            viewHolder.followCheckBox.setVisibility(View.VISIBLE);
            viewHolder.et_child_count.setVisibility(View.VISIBLE);
        }

        viewHolder.tv_name.setText(equiment.getName());

        // viewHolder.et_time.setText(equiment.getDelayTime());

        viewHolder.followCheckBox.setChecked(equiment.isCheck());


        return view;
    }

    //  子项是否可选中，如果需要设置子项的点击事件，需要返回true
    @Override
    public boolean isChildSelectable(int i, int i1) {
        return true;
    }

    private class ViewHolder {
        private TextView tv_name;
        private EditText et_time;
        private EditText et_child_count;
        private CheckBox followCheckBox;
    }
}