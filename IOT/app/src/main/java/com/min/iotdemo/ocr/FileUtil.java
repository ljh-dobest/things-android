/*
 * Copyright (C) 2017 Baidu, Inc. All Rights Reserved.
 */
package com.min.iotdemo.ocr;

import java.io.File;

public class FileUtil {
    public static File getSaveFile(File filepath) {
        File file = new File(filepath,"pic.jpg");
        return file;
    }
}
