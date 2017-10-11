package com.min.iotdemo;

import com.min.iotdemo.bean.Code;
import com.min.iotdemo.bean.EquimentBean;
import com.min.iotdemo.bean.Sort;

import java.util.List;

import io.reactivex.Observable;
import okhttp3.ResponseBody;
import retrofit2.Response;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;
import retrofit2.http.Query;

/**
 * 接口API
 */
public interface Api {
    @POST("{url}")
    Observable<Code<List<EquimentBean>>> getEquimentStatus(@Path("url") String url);
    @GET("v2/movie/top2511")
    Observable<Response<ResponseBody>> getTop250(@Query("start") int start, @Query("count") int count);
    @GET("{url}")
    Observable<Code<Sort>> getSort(@Path("url") String url);
}
