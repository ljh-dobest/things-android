package com.min.iotdemo.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseExpandableListAdapter;
import android.widget.Button;
import android.widget.TextView;

import com.min.iotdemo.R;
import com.min.iotdemo.bean.EquimentBean;
import com.min.iotdemo.utils.DataUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Min on 2017/6/27.
 */

public class ElvMainEquimentAdapter extends BaseExpandableListAdapter {
    private List<EquimentBean> dataset = new ArrayList<>();
    private Context mContext;
    private LayoutInflater inflater;
    public ElvMainEquimentAdapter(Context context) {
        this.mContext=context;
        inflater = LayoutInflater.from(mContext);
    }
    public void setDataset(List<EquimentBean> dataset){
        this.dataset=dataset;
        notifyDataSetChanged();
    }
    public List<EquimentBean> getData(){
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
        EquimentBean equiment=dataset.get(childPos);
        if(view==null){
            view = inflater.inflate(R.layout.elv_child_item, null);
            viewHolder = new ViewHolder();
            viewHolder.tv_name = (TextView) view.findViewById(R.id.tv_child_name);
            viewHolder.tv_status = (TextView) view.findViewById(R.id.tv_child_status);
            viewHolder.btn_open=(Button) view.findViewById(R.id.btn_equiment_status);
           // viewHolder.tv_time = (TextView) view.findViewById(R.id.tv_child_delayTime);
          // viewHolder.followCheckBox = (CheckBox) view.findViewById(R.id.cb_child_check_item);
            final ViewHolder finalViewHolder = viewHolder;
            viewHolder.btn_open.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    EquimentBean info = (EquimentBean) finalViewHolder.btn_open.getTag();
                   info.setOpen(!info.isOpen());
                }
            });
            view.setTag(viewHolder);
            viewHolder.btn_open.setTag(DataUtils.Equiments.get(childPos));
        }else{
            viewHolder = (ViewHolder) view.getTag();
            viewHolder.btn_open.setTag(DataUtils.Equiments.get(childPos));
        }

        viewHolder.tv_name.setText(equiment.getName());
        viewHolder.tv_status.setBackgroundColor(equiment.getValue().equals("0")?mContext.getResources().getColor(R.color.red):mContext.getResources().getColor(R.color.green));
        viewHolder.btn_open.setText(equiment.isOpen()?"开启":"关闭");
        if(DataUtils.Equiments.get(childPos).isOpen()){
            viewHolder.btn_open.setText("开启");
            viewHolder.tv_status.setText(equiment.getValue());
        }else{
            viewHolder.btn_open.setText("关闭");
            viewHolder.tv_status.setText("关闭");
            viewHolder.tv_status.setBackgroundColor(mContext.getResources().getColor(R.color.gray));
        }
        return view;
    }

    //  子项是否可选中，如果需要设置子项的点击事件，需要返回true
    @Override
    public boolean isChildSelectable(int i, int i1) {
        return true;
    }
    private class ViewHolder{
        private TextView tv_name;
        private TextView tv_status;
      //  private TextView tv_time;
       // private CheckBox followCheckBox;
        private Button btn_open;
    }
}