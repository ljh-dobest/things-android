package com.example.imgrecognition;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

import org.opencv.core.Core;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.opencv.core.MatOfPoint;
import org.opencv.core.MatOfPoint2f;
import org.opencv.core.Point;
import org.opencv.core.Rect;
import org.opencv.core.Scalar;
import org.opencv.core.Size;
import org.opencv.imgproc.Imgproc;

import java.util.ArrayList;
import java.util.List;

import static org.opencv.core.CvType.CV_8UC3;


/**
 * Created by Min on 2017/10/9.
 */

public class ImageOpencv {


    // threshold根据反差去掉深色单色背景
    public static Mat removeBackground(Mat nat) {
        Mat m = new Mat();

        Imgproc.cvtColor(nat, m, Imgproc.COLOR_BGR2GRAY);
        double threshold = Imgproc.threshold(m, m, 0, 255, Imgproc.THRESH_OTSU);
        Mat pre = new Mat(nat.size(), CV_8UC3, new Scalar(0, 0, 0));
        Mat fin = new Mat(nat.size(), CV_8UC3, new Scalar(0, 0, 0));
        for (int i = 0; i < m.rows(); i++) {
            for (int j = 0; j < m.cols(); j++) {
                double[] ds = m.get(i, j);
                double[] data = {ds[0] / 255, ds[0] / 255, ds[0] / 255};
                pre.put(i, j, data);
            }
        }
        for (int i = 0; i < pre.rows(); i++) {
            for (int j = 0; j < pre.cols(); j++) {
                double[] pre_ds = pre.get(i, j);
                double[] nat_ds = nat.get(i, j);
                double[] data = {pre_ds[0] * nat_ds[0], pre_ds[1] * nat_ds[1], pre_ds[2] * nat_ds[2]};
                fin.put(i, j, data);
            }
        }

        return fin;
    }

    // threshold根据亮度去除背景
    public static Mat MyThresholdHsv(Mat frame) {
        Mat hsvImg = new Mat();
        List<Mat> hsvPlanes = new ArrayList<>();
        Mat thresholdImg = new Mat();

        // threshold the image with the average hue value
        hsvImg.create(frame.size(), CvType.CV_8U);
        Imgproc.cvtColor(frame, hsvImg, Imgproc.COLOR_BGR2HSV);
        Core.split(hsvImg, hsvPlanes);
        // get the average hue value of the image
        Scalar average = Core.mean(hsvPlanes.get(0));
        double threshValue = average.val[0];
        Imgproc.threshold(hsvPlanes.get(0), thresholdImg, threshValue, 179.0, Imgproc.THRESH_BINARY_INV);

        Imgproc.blur(thresholdImg, thresholdImg, new Size(15, 15));

        // dilate to fill gaps, erode to smooth edges
        Imgproc.dilate(thresholdImg, thresholdImg, new Mat(), new Point(-1, -1), 1);
        Imgproc.erode(thresholdImg, thresholdImg, new Mat(), new Point(-1, -1), 3);

        Imgproc.threshold(thresholdImg, thresholdImg, threshValue, 179.0, Imgproc.THRESH_BINARY);

        // create the new image
        Mat foreground = new Mat(frame.size(), CV_8UC3, new Scalar(0, 0, 0));
        thresholdImg.convertTo(thresholdImg, CvType.CV_8U);
        frame.copyTo(foreground, thresholdImg);
        return foreground;
    }

    //grabCut分割技术
    public static Mat myGrabCut(Mat in, Point tl, Point br) {
        Mat mask = new Mat();
        Mat image = in;
        mask.create(image.size(), CvType.CV_8UC1);
        mask.setTo(new Scalar(0));

        Mat bgdModel = new Mat();// Mat.eye(1, 13 * 5, CvType.CV_64FC1);
        Mat fgdModel = new Mat();// Mat.eye(1, 13 * 5, CvType.CV_64FC1);

        Mat source = new Mat(1, 1, CvType.CV_8U, new Scalar(3));
        Rect rectangle = new Rect(tl, br);
        Imgproc.grabCut(image, mask, rectangle, bgdModel, fgdModel, 3, Imgproc.GC_INIT_WITH_RECT);
        Core.compare(mask, source, mask, Core.CMP_EQ);
        Mat foreground = new Mat(image.size(), CvType.CV_8UC1, new Scalar(0, 0, 0));
        image.copyTo(foreground, mask);

        return foreground;

    }

    //findContours分割技术
    public static Mat MyFindLargestRectangle(Mat original_image) {
        Mat imgSource = original_image;
        Imgproc.cvtColor(imgSource, imgSource, Imgproc.COLOR_BGR2GRAY);
        Imgproc.Canny(imgSource, imgSource, 50, 50);
        Imgproc.GaussianBlur(imgSource, imgSource, new Size(5, 5), 5);
        List<MatOfPoint> contours = new ArrayList<MatOfPoint>();
        Imgproc.findContours(imgSource, contours, new Mat(), Imgproc.RETR_EXTERNAL, Imgproc.CHAIN_APPROX_SIMPLE);
        double maxArea = 0;
        int maxAreaIdx = -1;
        MatOfPoint largest_contour = contours.get(0);
        MatOfPoint2f approxCurve = new MatOfPoint2f();
        for (int idx = 0; idx < contours.size(); idx++) {
            MatOfPoint temp_contour = contours.get(idx);
            double contourarea = Imgproc.contourArea(temp_contour);
            if (contourarea - maxArea > 1) {
                maxArea = contourarea;
                largest_contour = temp_contour;
                maxAreaIdx = idx;
                MatOfPoint2f new_mat = new MatOfPoint2f(temp_contour.toArray());
                int contourSize = (int) temp_contour.total();
                Imgproc.approxPolyDP(new_mat, approxCurve, contourSize * 0.05, true);
            }
        }


        Imgproc.drawContours(imgSource, contours, -1, new Scalar(255, 0, 0), 1);
        Imgproc.fillConvexPoly(imgSource, largest_contour, new Scalar(255, 255, 255));
        Imgproc.drawContours(imgSource, contours, maxAreaIdx, new Scalar(0, 0, 255), 3);

        return imgSource;
    }

    //watershed分割技术
    public static Mat MyWatershed(Mat img) {
        Mat threeChannel = new Mat();

        Imgproc.cvtColor(img, threeChannel, Imgproc.COLOR_BGR2GRAY);
        //Imgproc.threshold(threeChannel, threeChannel, 200, 255, Imgproc.THRESH_BINARY);
        Imgproc.threshold(threeChannel, threeChannel, 0, 255, Imgproc.THRESH_OTSU);

        Mat fg = new Mat(img.size(), CvType.CV_8U);
        Imgproc.erode(threeChannel, fg, new Mat());

        Mat bg = new Mat(img.size(), CvType.CV_8U);
        Imgproc.dilate(threeChannel, bg, new Mat());
        Imgproc.threshold(bg, bg, 1, 128, Imgproc.THRESH_BINARY_INV);

        Mat markers = new Mat(img.size(), CvType.CV_8U, new Scalar(0));
        Core.add(fg, bg, markers);

        Mat result = new Mat();
        markers.convertTo(result, CvType.CV_32SC1);
        Imgproc.watershed(img, result);
        result.convertTo(result, CvType.CV_8U);


        return result;
    }

    //Canny分割技术
    public static Mat MyCanny(Mat img, int threshold) {
        Imgproc.cvtColor(img, img, Imgproc.COLOR_BGR2GRAY);
        Imgproc.Canny(img, img, threshold, threshold * 3, 3, true);
        return img;
    }

    //等比例缩放图片
    public static Bitmap ratio(String imgPath, float pixelW, float pixelH) {
        BitmapFactory.Options newOpts = new BitmapFactory.Options();
        // 开始读入图片，此时把options.inJustDecodeBounds 设回true，即只读边不读内容
        newOpts.inJustDecodeBounds = true;
        newOpts.inPreferredConfig = Bitmap.Config.RGB_565;
        // Get bitmap info, but notice that bitmap is null now
        Bitmap bitmap = BitmapFactory.decodeFile(imgPath, newOpts);
        newOpts.inJustDecodeBounds = false;
        int w = newOpts.outWidth;
        int h = newOpts.outHeight;
        // 想要缩放的目标尺寸
        float hh = pixelH;// 设置高度为240f时，可以明显看到图片缩小了
        float ww = pixelW;// 设置宽度为120f，可以明显看到图片缩小了
        // 缩放比。由于是固定比例缩放，只用高或者宽其中一个数据进行计算即可
        int be = 1;//be=1表示不缩放
        if (w > h && w > ww) {//如果宽度大的话根据宽度固定大小缩放
            be = (int) (newOpts.outWidth / ww);
        } else if (w < h && h > hh) {//如果高度高的话根据宽度固定大小缩放
            be = (int) (newOpts.outHeight / hh);
        }
        if (be <= 0) be = 1;
        newOpts.inSampleSize = be;//设置缩放比例
        // 开始压缩图片，注意此时已经把options.inJustDecodeBounds 设回false了
        bitmap = BitmapFactory.decodeFile(imgPath, newOpts);
        // 压缩好比例大小后再进行质量压缩
//        return compress(bitmap, maxSize); // 这里再进行质量压缩的意义不大，反而耗资源，删除
        return bitmap;
    }

    //高斯差分找边缘
    public static Mat differenceOfGaussian(Mat orgMat) {
        Mat grayMat = new Mat();
        Mat blur1 = new Mat();
        Mat blur2 = new Mat();
        //将图像转换为灰度
        Imgproc.cvtColor(orgMat, grayMat, Imgproc.COLOR_BGR2GRAY);
        //以两个不同的半径对图像进行高斯模糊
        Imgproc.GaussianBlur(grayMat, blur1, new Size(15, 15), 5);
        Imgproc.GaussianBlur(grayMat, blur2, new Size(21, 21), 5);
        //将两幅模糊后的图片相减
        Mat DoG = new Mat();
        Core.absdiff(blur1, blur2, DoG);
        //反转二值阀值化
        Core.multiply(DoG, new Scalar(100), DoG);
        Imgproc.threshold(DoG, DoG, 50, 255, Imgproc.THRESH_BINARY_INV);

        return DoG;
    }

    //canny边缘检测
    public static Mat canny(Mat orgMat) {
        Mat grayMat = new Mat();
        Mat cannyEdges = new Mat();
        Imgproc.cvtColor(orgMat, grayMat, Imgproc.COLOR_BGR2GRAY);
        Imgproc.Canny(grayMat, cannyEdges, 10, 100);//后两个参数对应低阀值和高阀值
        return cannyEdges;
    }

    //sobel边缘检测
    public static Mat sobel(Mat orgMat) {
        Mat grayMat = new Mat();
        Mat sobel = new Mat();

        //分别用于保存梯度和绝对梯度的Mat
        Mat grad_x = new Mat();
        Mat abs_grad_x = new Mat();

        Mat grad_y = new Mat();
        Mat abs_grad_y = new Mat();

        Imgproc.cvtColor(orgMat, grayMat, Imgproc.COLOR_BGR2GRAY);
        //计算水平方向梯度
        Imgproc.Sobel(grayMat, grad_x, CvType.CV_16S, 1, 0, 3, 1, 0);
        //计算垂直方向梯度
        Imgproc.Sobel(grayMat, grad_y, CvType.CV_16S, 0, 1, 3, 1, 0);
        //计算两个方向的梯度绝对值
        Core.convertScaleAbs(grad_x, abs_grad_x);
        Core.convertScaleAbs(grad_y, abs_grad_y);
        //计算结果梯度
        Core.addWeighted(abs_grad_x, 0.5, abs_grad_y, 0.5, 1, sobel);

        return sobel;
    }

    //harris角点检测
    public static Mat harris(Mat orgMat) {
        Mat grayMat = new Mat();
        Mat corners = new Mat();
        Imgproc.cvtColor(orgMat, grayMat, Imgproc.COLOR_BGR2GRAY);

        Mat tempDst = new Mat();
        //找出角点
        Imgproc.cornerHarris(grayMat, tempDst, 2, 3, 0.04);
        //归一化Harris角点输出
        Mat tempDstNorm = new Mat();

        Core.normalize(tempDst, tempDstNorm, 0, 255, Core.NORM_MINMAX);
        Core.convertScaleAbs(tempDstNorm, corners);
        return corners;
    }

    //霍夫直线
    public static Mat houghLine(Mat orgMat) {
        Mat grayMat = new Mat();
        Mat cannyMat = new Mat();
        Mat lines = new Mat();
        Imgproc.cvtColor(orgMat, grayMat, Imgproc.COLOR_BGR2GRAY);
        Imgproc.Canny(grayMat, cannyMat, 10, 100);
        Imgproc.HoughLinesP(cannyMat, lines, 1, Math.PI / 180, 50, 20, 20);
        Mat houghLines = new Mat();
        houghLines.create(cannyMat.rows(), cannyMat.cols(), CvType.CV_8UC1);
        //在图像上画直线
        for (int i = 0; i < lines.cols(); i++) {
            double[] points=lines.get(0,i);
            double x1,y1,x2,y2;
            x1=points[0];
            y1=points[1];
            x2=points[2];
            y2=points[3];
            Point pt1=new Point(x1,y1);
            Point pt2=new Point(x2,y2);
            //在一幅图像上绘制直线
            Imgproc.line(houghLines, pt1, pt2, new Scalar(255, 0, 0), 1);
        }
        return houghLines;
    }

    //检测卡片轮廓返回轮廓数据
    public static Rect contourList(Mat orgMat){
        Mat grayMat=new Mat();
        Mat cannyEdges=new Mat();
        Mat hierarchy=new Mat();
        //保存所有轮廓列表
        List<MatOfPoint> contourList=new ArrayList<>();
        Imgproc.cvtColor(orgMat,grayMat,Imgproc.COLOR_BGR2GRAY);//灰度处理
        Imgproc.GaussianBlur(grayMat,grayMat,new Size(5,5),0);//高斯模糊降噪
        Imgproc.Canny(grayMat,cannyEdges, 10, 100);//边缘处理

      //  cannyEdges=sobel(orgMat);

        //找出所有轮廓
        Imgproc.findContours(cannyEdges, contourList, hierarchy, Imgproc.RETR_LIST, Imgproc.CHAIN_APPROX_SIMPLE);



        int index = 0;
        double maxim = Imgproc.contourArea(contourList.get(0));
       //找出最大轮廓
        for (int contourIdx = 1; contourIdx < contourList.size(); contourIdx++) {
            double temp;
            temp=Imgproc.contourArea(contourList.get(contourIdx));
            if(maxim<temp)
            {
                maxim=temp;
                index=contourIdx;
            }
        }
        //轮廓数据转矩形数据返回
        Rect rect=Imgproc.boundingRect(contourList.get(index));
//     Mat hole=new Mat(cannyEdges.size(),CV_8U, new Scalar(0));//遮盖图层
//            Imgproc.drawContours(hole, contourList, index,  new Scalar(255),-1);
//        Mat crop=new Mat(orgMat.rows(), orgMat.cols(), CV_8UC3);
//        orgMat.copyTo(crop, hole);//将原图像拷贝进遮罩图层
        return rect;
    }

    public static Mat cutPicture(Mat orgMat){
        Mat orgMatU3=new Mat();
        orgMat.convertTo(orgMatU3, CV_8UC3, -1.0, 255.0);
        //orgMat.convertTo(orgMatU3,CvType.CV_8UC1);
        Mat grayMat=new Mat();
        Mat herisy=new Mat();
        List<MatOfPoint> contourList=new ArrayList<>();
        Imgproc.cvtColor(orgMat,grayMat,Imgproc.COLOR_BGR2GRAY);
        //Imgproc.GaussianBlur(grayMat,grayMat,new Size(5,5),0);
        Imgproc.findContours(grayMat,contourList,herisy,Imgproc.RETR_EXTERNAL,Imgproc.CHAIN_APPROX_SIMPLE);
        MatOfPoint max=new MatOfPoint();
        for (int i = 0; i < contourList.size(); i++) {
             max=contourList.get(i);
        }

       Rect rect=Imgproc.boundingRect(max);
        Mat bgdModel = new Mat();
        Mat fgdModel = new Mat();
        Mat source = new Mat(1, 1, CvType.CV_8U, new Scalar(3));
       Mat mask = new Mat();
        mask.create(orgMat.size(), CV_8UC3);
        mask.setTo(new Scalar(0));
        Imgproc.grabCut(grayMat, mask, rect, bgdModel, fgdModel, 3, 1);
        Core.compare(mask, source, mask, Core.CMP_EQ);
        Mat foreground = new Mat(orgMat.size(), CV_8UC3, new Scalar(
                0, 0, 0));
        orgMat.copyTo(foreground, mask);
        return foreground;
    }
}
