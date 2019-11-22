import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FilePond, registerPlugin } from 'react-filepond';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { create } from './react-doka/lib/doka.esm.min';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageSizeMetadata from 'filepond-plugin-image-size-metadata';

import * as Actions from 'app/store/actions';
// import './DemoFilePond.css';
import './react-doka/lib/doka.min.css';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.min.css';

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImageCrop,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageResize,
  FilePondPluginImagePreview,
  FilePondPluginImageEdit,
  FilePondPluginImageTransform,
  FilePondPluginImageSizeMetadata
);

const useStyles = makeStyles(theme => ({
  filePondWrapper: {
    opacity: '.8',
    transition: 'opacity .3s',

    '& .filepond--root': {
      minHeight: '40rem',
      borderBottom: 'none',

      '& .filepond--item': {
        minHeight: '40rem'
      },

      '& .filepond--drop-label': {
        minHeight: '40rem',
        color: '#fefefe',
        fontSize: '2em',
        fontWeight: '600'
      },

      '& .filepond--file-status': {
        fontSize: '2em'
      },
      '& .filepond--file-action-button': {
        fontSize: '2em'
      },

      '& .filepond--file-info-main': {
        fontSize: '2em'
      },

      '& .filepond--file-info-sub': {
        fontSize: '1.5em'
      },

      '@media screen and (max-width:600px)': {
        minHeight: '35rem',

        '& .filepond--drop-label': {
          minHeight: '35rem'
        },
        // '& .filepond--item, .filepond--image-preview-wrapper, .filepond--image-preview-overlay, .filepond--image-preview-overlay-idle': {
        '& .filepond--item': {
          minHeight: '35rem'
        }
      }
    },
    '& .filepond--panel-root': {
      fontSize: '1.75em',
      backgroundColor: 'transparent'
    },
    '&:hover, &.active': {
      opacity: '1',
      cursor: 'pointer'
    }
  }
}));

function EditImageSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const Pond = useRef(null);

  // const [imageList, setImageList] = useState([]);

  return (
    <div
      className={clsx(
        classes.filePondWrapper,
        'mb-12 rounded-12 border-3 border-dotted'
      )}
    >
      <FilePond
        ref={Pond}
        // files={imageList}
        files={[]}
        // Locales
        labelIdle="<img src='/assets/images/drop/dropIcon.svg' alt='點擊 或 拖曳'></img></br>點擊 或 拖曳來 <span class='filepond--label-action'>上傳圖片 </span></br>支援 SVG、JPG、PNG"
        labelInvalidField="請上傳圖片"
        labelFileWaitingForSize="檢查圖片大小"
        labelFileSizeNotAvailable="圖片檔案太大了"
        labelFileLoading="載入中"
        labelFileLoadError="出錯了"
        labelFileProcessing="上傳中"
        labelFileProcessingComplete="上傳完成"
        labelFileProcessingAborted="上傳已取消"
        labelFileProcessingError="出錯了"
        labelFileProcessingRevertError="出錯了"
        labelFileRemoveError="出錯了"
        labelTapToCancel="取消"
        labelTapToRetry="重新上傳"
        labelTapToUndo="上一步"
        labelButtonRemoveItem="移除圖片"
        labelButtonAbortItemLoad="中止上傳"
        labelButtonRetryItemLoad="重新上傳"
        labelButtonAbortItemProcessing="取消上傳中"
        labelButtonUndoItemProcessing="重新上傳中"
        labelButtonRetryItemProcessing="重試"
        labelButtonProcessItem="上傳"
        labelFileTypeNotAllowed="不支援的圖片格式"
        // settings
        acceptedFileTypes={['image/jpeg', 'image/png', 'image/svg+xml']}
        dropValidation
        maxFileSize="10MB"
        fileValidateTypeLabelExpectedTypesMap={{
          'image/jpeg': '.jpg',
          'image/png': '.png',
          'image/svg+xml': '.svg'
        }}
        styleItemPanelAspectRatio={0.45}
        imageEditInstantEdit
        imageEditEditor={create({
          utils: ['crop', 'filter', 'color', 'markup', 'resize'],
          labelButtonReset: '重新編輯',
          labelButtonCancel: '取消',
          labelButtonConfirm: '儲存',
          labelStatusAwaitingImage: '等待圖片中...',
          labelStatusLoadingImage: '載入圖片中...',
          labelStatusLoadImageError: '載入圖片失敗',
          labelStatusProcessingImage: '處裡圖片中...',
          labelColorBrightness: '明亮度',
          labelColorContrast: '對比度',
          labelColorExposure: '曝光度',
          labelColorSaturation: '飽和度',
          labelButtonCropZoom: '縮放',
          labelButtonCropRotateLeft: '向左旋轉',
          labelButtonCropRotateRight: '向右旋轉',
          labelButtonCropRotateCenter: '向中心旋轉',
          labelButtonCropFlipHorizontal: '水平翻轉',
          labelButtonCropFlipVertical: '垂直翻轉',
          labelButtonCropAspectRatio: '長寬比',
          labelButtonUtilCrop: '裁切',
          labelButtonUtilFilter: '濾鏡',
          labelButtonUtilColor: '顏色',
          labelButtonUtilMarkup: '塗鴉',
          labelButtonUtilResize: '尺寸',
          labelMarkupTypeRectangle: '正方形',
          labelMarkupTypeEllipse: '圓形',
          labelMarkupTypeText: '文字',
          labelMarkupTypeLine: '箭頭',
          labelMarkupSelectFontSize: '文字大小',
          labelMarkupSelectFontFamily: '文字字型',
          labelMarkupSelectLineDecoration: '箭頭樣式',
          labelMarkupSelectLineStyle: '風格',
          labelMarkupSelectShapeStyle: '風格',
          labelMarkupRemoveShape: '移除',
          cropAllowImageTurnRight: true,
          filters: {
            original: {
              label: '原圖',
              matrix: () => null
            },
            chrome: {
              label: '生動',
              matrix: () => [
                1.398,
                -0.316,
                0.065,
                -0.273,
                0.201,
                -0.051,
                1.278,
                -0.08,
                -0.273,
                0.201,
                -0.051,
                0.119,
                1.151,
                -0.29,
                0.215,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0
              ]
            },
            fade: {
              label: '年華',
              matrix: () => [
                1.073,
                -0.015,
                0.092,
                -0.115,
                -0.017,
                0.107,
                0.859,
                0.184,
                -0.115,
                -0.017,
                0.015,
                0.077,
                1.104,
                -0.115,
                -0.017,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0
              ]
            },
            mono: {
              label: '灰階',
              matrix: () => [
                0.212,
                0.715,
                0.114,
                0.0,
                0.0,
                0.212,
                0.715,
                0.114,
                0.0,
                0.0,
                0.212,
                0.715,
                0.114,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0
              ]
            },
            noir: {
              label: '黑白',
              matrix: () => [
                0.15,
                1.3,
                -0.25,
                0.1,
                -0.2,
                0.15,
                1.3,
                -0.25,
                0.1,
                -0.2,
                0.15,
                1.3,
                -0.25,
                0.1,
                -0.2,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0
              ]
            }
          },
          cropAspectRatioOptions: [
            {
              label: '任意',
              value: null
            },
            {
              label: '肖像',
              value: 1.25
            },
            {
              label: '正方形',
              value: 1
            },
            {
              label: '景觀',
              value: 0.75
            }
          ],
          markupShapeStyleOptions: [
            ['填滿', 0, null, 0],
            ['粗厚框線', 0.025, null, 4],
            ['預設框線', 0.015, null, 2],
            ['纖細框線', 0.005, null, 1],
            ['虛線框線', 0.005, [0.01], 1]
          ],
          markupLineStyleOptions: [
            ['粗厚', 0.025, null, 4],
            ['預設', 0.015, null, 2],
            ['纖細', 0.005, null, 1],
            ['虛線', 0.005, [0.01], 1]
          ],
          markupLineDecorationOptions: [
            ['無箭頭', []],
            ['單箭頭', ['arrow-end']],
            ['雙箭頭', ['arrow-begin', 'arrow-end']]
          ],
          onloadstart: () => dispatch(Actions.setImageLoading()),
          oncancel: () => dispatch(Actions.removeImageList()),
          onconfirm: output => {
            console.log('output, ', output);
            const imageDimension = {
              width: output.image.width,
              height: output.image.height
            };

            dispatch(Actions.updateImageListDimension([imageDimension]));
          }
        })}
        onaddfilestart={() => dispatch(Actions.setImageLoading())}
        onremovefile={() => dispatch(Actions.removeImageList())}
        onupdatefiles={fileItems => {
          if (fileItems.length) {
            dispatch(
              Actions.updateImageListOriginSize(
                fileItems.map(fileItem => fileItem.file.size)
              )
            );
          }
        }}
        onpreparefile={(fileItem, output) => {
          dispatch(
            // Actions.updateImageList([window.URL.createObjectURL(output)])
            Actions.updateImageList([output])
          );
        }}
      />
    </div>
  );
}

export default EditImageSection;
