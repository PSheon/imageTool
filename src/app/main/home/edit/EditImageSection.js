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
        labelIdle="<svg width='279' height='161' xmlns='http://www.w3.org/2000/svg'><g fill='#fefefe' fill-rule='evenodd'><path d='M12.056572 23.081281C2.268447 27.645558-1.910177 39.126234 2.6541 48.914358l45.642773 97.881241c4.564277 9.788124 16.15371 13.916036 25.833077 9.402472l65.254161-30.428514c9.788124-4.564278 13.916035-16.153712 9.402472-25.833079l-38.035644-81.567701-.050516-.108332-.152539-.327121-.050516-.108332c-.159471-.058043-.26025-.276377-.41972-.33442L62.23631.07775c-.159471-.058043-.318972-.115038-.536485-.01361l-.108332.050516c-.108757.050714-.26888-.006507-.377636.044207l-.108333.050516-49.048952 22.871902zm1.216348 2.608467L60.909306 3.476537l6.998955 15.009306c4.564277 9.788124 16.15371 13.916034 25.833077 9.402471l15.009305-6.998954 37.42747 80.263468c3.854279 8.265527.255176 18.15398-8.010351 22.008259L72.9136 153.589602c-8.265527 3.854278-18.153982.255176-22.00826-8.010351L5.262568 47.69801c-3.854278-8.265527-.255175-18.153983 8.010352-22.008262z' fill-rule='nonzero'/><path d='M52.833628 97.191724l-1.255273-3.100822-3.106098 1.448398 1.255273 3.100821 3.106098-1.448397zm8.60496-22.093834l-1.524803-3.610683-2.19254 1.022398 1.550905 3.598512 2.166438-1.010227zm6.485741 13.499837l-5.36759-11.510833-7.569482 3.529707.53716 1.560824 5.7214-2.381938 4.75902 10.205751c1.20497 2.584065.66183 3.59999-4.930962 6.46217l.884995 2.03417c6.532451-3.30035 7.70597-6.167313 5.96546-9.89985zm10.983665-5.407762c2.323048-1.083255 3.346852-3.657963 1.849769-6.868468-1.484912-3.184403-3.763848-4.187241-5.773676-3.250043-1.017965.474685-1.86729 1.379168-2.424359 2.433366 1.038087 2.089892 2.246574 4.545207 4.025358 8.291675.878663-.091954 1.618163-.277902 2.322908-.60653zm.573887 6.818726l-2.029035 1.168596-2.069139-4.437283c-2.884623-6.186094-4.712093-10.03697-6.108428-12.690685l1.870667-1.031193.75125 1.270328c.564105-1.311697 1.514458-2.61284 3.10666-3.355296 2.714573-1.265827 5.8581.160055 7.598612 3.892593 2.142167 4.593893.185317 8.779447-3.599424 10.544301-.443728.206914-.92573.399898-1.432074.540678l1.91091 4.097961zm19.86829-14.158437c-8.025383 3.71052-11.275076 2.397698-13.21033-1.752466-1.813539-3.889148-.498677-8.156666 2.816234-9.702434 3.497623-1.630969 6.587048.360355 8.088986 4.80791L88.398374 73.4895c1.620697 2.930421 4.06166 3.190382 10.320783.462369l.631014 1.898386zm-9.944035-9.53569c-2.114235.985885-2.73772 3.056148-1.616332 5.869851 1.43735-.733802 4.886288-2.469177 6.66296-3.361207-1.170214-2.441385-2.906292-3.506698-5.046628-2.508643zm17.658169 11.08645l-1.109498-1.834152c5.836501-3.293596 6.304853-4.401756 4.665231-8.05423-.58493 1.130744-1.556109 2.250935-3.070005 2.956877-2.766777 1.290169-5.778178.21578-7.34829-3.151335-1.923081-4.124063.042422-8.154766 3.696655-9.858763 1.25288-.584227 2.550928-.935299 4.01248-1.140173.500787 1.005794 3.762724 8.00104 4.456494 9.488835 2.056968 4.411181 1.573982 7.941238-5.303067 11.592941zm.477636-8.993256c1.017965-.474685 1.86553-1.314793 2.457356-2.226311-.815485-1.748812-2.509069-5.312568-3.407994-7.308466-.944796.15457-1.800874.363102-2.610026.740416-2.244743 1.04674-3.24934 3.390052-1.922657 6.235133 1.314512 2.81898 3.473493 3.496426 5.483321 2.559228z'/><g><path d='M266.889188 25.176204c9.788124 4.564277 13.966748 16.044953 9.402471 25.833077l-45.642772 97.881241c-4.564277 9.788124-16.15371 13.916035-25.833078 9.402472l-65.25416-30.428515c-9.788125-4.564277-13.916035-16.153711-9.402472-25.833078L168.19482 20.4637l.050515-.108332.15254-.327121.050516-.108332c.15947-.058043.260249-.276377.41972-.33442L216.70945 2.172672c.159471-.058042.318971-.115037.536485-.013609l.108332.050516c.108757.050714.26888-.006507.377636.044207l.108333.050516 49.048952 22.871902zm-1.216348 2.608467L218.036453 5.57146 211.0375 20.580766c-4.564278 9.788124-16.15371 13.916034-25.833077 9.402471l-15.009306-6.998954-37.42747 80.263467c-3.854278 8.265527-.255175 18.153981 8.010352 22.00826l65.25416 30.428514c8.265528 3.854279 18.153983.255177 22.008261-8.01035l45.642773-97.881242c3.854278-8.265527.255175-18.153982-8.010352-22.00826z' fill-rule='nonzero'/><path d='M178.687106 77.171994l1.568493-2.954764-3.106098-1.448398-1.568493 2.954765 3.106098 1.448397zm13.130334 4.279693c2.323048 1.083255 4.953477.212544 6.45056-2.997961 1.484912-3.184403.788258-5.574781-1.22157-6.51198-1.017965-.474685-2.256774-.543914-3.422414-.293029-.93368 2.138578-2.03776 4.642579-3.764341 8.41339.635234.613987 1.25302 1.060952 1.957765 1.38958zm-4.85456 4.822616l-2.199435-.803172 2.06914-4.437283c2.884623-6.186095 4.659889-10.061313 5.795207-12.836743l1.99238.770176-.490233 1.392042c1.367418-.411013 2.975027-.519359 4.567229.223097 2.714573 1.265826 3.642905 4.590447 1.902394 8.322985-2.142168 4.593893-6.606327 5.785281-10.391069 4.020428-.443728-.206914-.901387-.452101-1.334702-.749492l-1.910911 4.097962zm24.702241-7.452195c1.618303.754627 2.182408 2.066324 1.038296 4.51988l-3.712279 7.961008 2.114235.985884 4.040907-8.665752c1.460569-3.1322.543071-5.117123-1.753875-6.188207-1.827117-.851998-3.587819-.687931-5.071815-.299502l.55109-1.52255-2.018481-.782347c-1.24486 3.010345-3.140082 7.210954-5.744763 12.79671l2.114235.985884c2.08131-4.463385 3.599218-7.854842 4.63027-10.202233 1.30832-.21613 2.585402-.16083 3.81218.411225zm2.68544 20.477498l.69187-2.028894c6.274672 2.353936 7.424623 2.000403 9.168652-1.603385-1.242186.278746-2.724564.254824-4.23846-.451117-2.766777-1.29017-3.879439-4.28764-2.309327-7.654755 1.923082-4.124063 6.274181-5.209286 9.928414-3.505289 1.25288.584228 2.356185 1.352926 3.452596 2.34085-.448584 1.030136-3.71052 8.025382-4.40429 9.513177-2.056968 4.41118-5.071606 6.31027-12.289455 3.389413zm7.196253-5.414862c1.017965.474685 2.20633.583946 3.28501.451398.815485-1.748812 2.456866-5.336911 3.407994-7.308466-.72571-.6244-1.435732-1.146152-2.244883-1.523466-2.244743-1.04674-4.685566-.310055-6.01225 2.535026-1.314511 2.81898-.4457 4.90831 1.564129 5.845508z'/></g></g></svg>
          </br>點擊 或 拖曳來 <span class='filepond--label-action'>上傳圖片 </span></br>支援 SVG、JPG、PNG"
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
            const imageDimension = {
              width: output.image.width,
              height: output.image.height
            };

            dispatch(Actions.updateImageListDimension([imageDimension]));
          }
        })}
        onwarning={() => dispatch(Actions.removeImageList())}
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
