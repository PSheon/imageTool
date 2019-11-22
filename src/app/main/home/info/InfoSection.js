import React from 'react';
import { Typography } from '@material-ui/core';

function InfoSection() {
  return (
    <div className="flex flex-wrap flex-1 justify-center items-center">
      <div className="w-full \flex flex-col justify-center items-center text-center py-12">
        <Typography color="textSecondary" variant="h6">
          這個 APP 能做什麼？
        </Typography>
        <Typography
          className="font-bold"
          color="textPrimary"
          variant="subtitle1"
        >
          此 APP
          由JS編寫，可進行簡單的圖片編輯、裁切、壓縮，目前只能一次一張圖片
        </Typography>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center py-12">
        <Typography color="textSecondary" variant="h6">
          文件大小限制
        </Typography>
        <Typography
          className="font-bold"
          color="textPrimary"
          variant="subtitle1"
        >
          10 MB
        </Typography>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center py-12">
        <Typography color="textSecondary" variant="h6">
          使用框架
        </Typography>
        <Typography
          className="font-bold"
          color="textPrimary"
          variant="subtitle1"
        >
          Vanilla.js、React.js、WebGL
        </Typography>
      </div>
    </div>
  );
}

export default InfoSection;
