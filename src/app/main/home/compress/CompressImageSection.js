import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
  IconButton,
  Icon,
  LinearProgress,
  Tooltip
} from '@material-ui/core';
import { FuseAnimate, FuseAnimateGroup } from '@fuse';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Compressor from 'compressorjs';
import filesize from 'filesize';
import fileSaver from 'file-saver';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import LoadingSpinner from 'app/main/shared/LoadingSpinner';
import JPG_ICON from 'assets/images/utils/jpg-icon.svg';
import PNG_ICON from 'assets/images/utils/png-icon.svg';
import SVG_ICON from 'assets/images/utils/svg-icon.svg';

function renderMimeIcon(mimeType) {
  switch (mimeType) {
    case 'image/jpeg':
      return <img className="w-32" src={JPG_ICON} alt="jpg icon" />;
    case 'image/png':
      return <img className="w-32" src={PNG_ICON} alt="PNG icon" />;
    default:
      return <img className="w-32" src={SVG_ICON} alt="svg icon" />;
  }
}

const useStyles = makeStyles(theme => ({
  fileCompressWrapper: {
    minHeight: '25rem'
  },
  previewImage: {
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short
    }),
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
}));
function CompressImageSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up('md'));
  const IMAGE = useSelector(({ file }) => file.image);
  const IMAGE_LIST_DIMENSION = IMAGE.dimensions;
  const IMAGE_LIST_ORIGIN_SIZE = IMAGE.sizes;
  const IMAGE_LIST = IMAGE.docs;
  const IMAGE_BLOB_LIST = IMAGE.blobs;
  const IMAGE_LOADING = IMAGE.loading;

  const [compressResult, setCompressResult] = useState(null);
  const [isCompressing, setIsCompressing] = useState(true);

  function handleDownloadImage() {
    fileSaver(compressResult, compressResult.name);
  }

  useEffect(() => {
    if (IMAGE_LOADING && !isCompressing) {
      setIsCompressing(true);
    }
  }, [IMAGE_LOADING, isCompressing]);
  useEffect(() => {
    if (IMAGE_BLOB_LIST.length) {
      new Compressor(IMAGE_BLOB_LIST[0], {
        quality: 0.6,
        success(result) {
          setIsCompressing(false);
          setCompressResult(result);
        },
        error(err) {
          setIsCompressing(false);
        }
      });
    }
  }, [IMAGE_BLOB_LIST]);

  if (!IMAGE_BLOB_LIST.length) {
    return null;
  } else if (IMAGE_LOADING) {
    return (
      <FuseAnimate>
        <div className="w-full flex justify-center items-center">
          <LoadingSpinner width={64} heigh={64} />
        </div>
      </FuseAnimate>
    );
  }

  if (isDesktopView) {
    return compressResult && !isCompressing ? (
      <FuseAnimateGroup
        enter={{
          animation: 'transition.expandIn'
        }}
        className={clsx(
          classes.fileCompressWrapper,
          'mb-12 rounded-12 border-3 border-dotted flex justify-center items-center px-12'
        )}
      >
        <div className="max-w-64 sm:max-w-128 p-12">
          <img
            className={clsx(classes.previewImage, 'rounded-12')}
            src={URL.createObjectURL(compressResult)}
            alt={compressResult.name}
          />
        </div>
        <div className="flex-1 px-12">
          <Typography className="text-20 mb-16" color="textSecondary">
            {compressResult.name} 壓縮完成
          </Typography>
          <LinearProgress
            variant="determinate"
            value={100}
            className="w-full"
            color="secondary"
          />
        </div>
        <div className="flex flex-col justify-around items-center px-24">
          <Typography color="textSecondary" variant="subtitle1">
            尺寸
          </Typography>
          <Typography color="textPrimary" variant="h6">
            {IMAGE_LIST_DIMENSION[0]['width']} X
            {IMAGE_LIST_DIMENSION[0]['height']}
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center px-24">
          <Typography color="textSecondary" variant="subtitle1">
            大小
          </Typography>
          <Typography color="textPrimary" variant="h6">
            {filesize(compressResult.size)}
          </Typography>
          <Typography color="textPrimary" variant="subtitle1">
            減少
            {(
              (1 - compressResult.size / IMAGE_LIST_ORIGIN_SIZE[0]) *
              100
            ).toFixed(2)}
            %
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center px-24">
          <Typography color="textSecondary" variant="subtitle1">
            圖檔
          </Typography>
          <Typography color="textPrimary" variant="h6">
            {renderMimeIcon(compressResult.type)}
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center px-24">
          <Tooltip title="下載圖片" placement="top">
            <IconButton
              aria-label="下載"
              color="inherit"
              onClick={handleDownloadImage}
            >
              <Icon>cloudDownLoad</Icon>
            </IconButton>
          </Tooltip>
        </div>
      </FuseAnimateGroup>
    ) : (
      <div
        className={clsx(
          classes.fileCompressWrapper,
          'mb-12 rounded-12 border-3 border-dotted flex justify-center items-center px-12'
        )}
      >
        <div
          className={clsx(
            classes.previewImageWrapper,
            'max-w-64 sm:max-w-128 p-12'
          )}
        >
          <img className="rounded-12" src={IMAGE_LIST[0]} alt="圖片壓縮中" />
        </div>
        <div className="flex-1 px-12">
          <Typography className="text-20 mb-16" color="textSecondary">
            圖片壓縮中...
          </Typography>
          <LinearProgress className="w-full" color="secondary" />
        </div>
      </div>
    );
  } else {
    return compressResult && !isCompressing ? (
      <FuseAnimateGroup
        enter={{
          animation: 'transition.expandIn'
        }}
        className={clsx(
          classes.fileCompressWrapper,
          'mb-12 rounded-12 border-3 border-dotted flex flex-wrap justify-center items-center px-12'
        )}
      >
        <div className="w-full p-12 pt-20 flex justify-center items-center">
          <img
            className={clsx(classes.previewImage, 'rounded-12 max-w-128')}
            src={URL.createObjectURL(compressResult)}
            alt={compressResult.name}
          />
        </div>
        <div className="flex flex-col justify-center items-center p-12 w-full">
          <Typography className="text-20 mb-16" color="textSecondary">
            {compressResult.name} 壓縮完成
          </Typography>
          <LinearProgress
            variant="determinate"
            value={100}
            className="w-full"
            color="secondary"
          />
        </div>
        <div className="flex w-full overflow-x-scroll p-12">
          <div className="flex flex-1 flex-col justify-around items-center px-24">
            <Typography
              className="whitespace-no-wrap"
              color="textSecondary"
              variant="subtitle1"
            >
              尺寸
            </Typography>
            <Typography color="textPrimary" variant="h6">
              {IMAGE_LIST_DIMENSION[0]['width']} X
              {IMAGE_LIST_DIMENSION[0]['height']}
            </Typography>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center px-24">
            <Typography
              className="whitespace-no-wrap"
              color="textSecondary"
              variant="subtitle1"
            >
              大小
            </Typography>
            <Typography
              className="whitespace-no-wrap"
              color="textPrimary"
              variant="h6"
            >
              {filesize(compressResult.size)}
            </Typography>
            <Typography
              className="whitespace-no-wrap"
              color="textPrimary"
              variant="subtitle1"
            >
              減少
              {(
                (1 - compressResult.size / IMAGE_LIST_ORIGIN_SIZE[0]) *
                100
              ).toFixed(2)}
              %
            </Typography>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center px-24">
            <Typography
              className="whitespace-no-wrap"
              color="textSecondary"
              variant="subtitle1"
            >
              圖檔
            </Typography>
            <Typography
              className="whitespace-no-wrap"
              color="textPrimary"
              variant="h6"
            >
              {renderMimeIcon(compressResult.type)}
            </Typography>
          </div>
        </div>
        <div
          className="w-full flex flex-col justify-center items-center p-24"
          onClick={handleDownloadImage}
        >
          <Tooltip title="下載圖片" placement="top">
            <IconButton aria-label="下載" color="inherit">
              <Icon>cloudDownLoad</Icon>
            </IconButton>
          </Tooltip>
        </div>
      </FuseAnimateGroup>
    ) : (
      <div
        className={clsx(
          classes.fileCompressWrapper,
          'mb-12 rounded-12 border-3 border-dotted flex flex-col justify-center items-center px-12'
        )}
      >
        <div className="w-full p-12 pt-20 flex justify-center items-center">
          <img
            className={clsx(classes.previewImage, 'rounded-12 max-w-128')}
            src={IMAGE_LIST[0]}
            alt="圖片壓縮中"
          />
        </div>
        <div className="flex-1 p-24 w-full text-center">
          <Typography className="text-20 mb-16" color="textSecondary">
            圖片壓縮中...
          </Typography>
          <LinearProgress className="w-full" color="secondary" />
        </div>
      </div>
    );
  }
}

export default CompressImageSection;
