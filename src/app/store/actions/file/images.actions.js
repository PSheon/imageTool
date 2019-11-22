export const SET_IMAGE_LOADING = '[IMAGES LIST] SET LOADING';
export const UPDATE_IMAGE_LIST = '[IMAGES LIST] UPDATE IMAGE LIST';
export const UPDATE_IMAGE_LIST_DIMENSION =
  '[IMAGES LIST] UPDATE IMAGE LIST DIMENSION';
export const UPDATE_IMAGE_LIST_ORIGIN_SIZE =
  '[IMAGES LIST] UPDATE IMAGE LIST ORIGIN SIZE';
export const REMOVE_IMAGE_LIST = '[IMAGES LIST] REMOVE IMAGE LIST';

export function setImageLoading() {
  return {
    type: SET_IMAGE_LOADING
  };
}

export function updateImageListDimension(imageListDimension) {
  return {
    type: UPDATE_IMAGE_LIST_DIMENSION,
    payload: {
      imageListDimension
    }
  };
}

export function updateImageListOriginSize(imageListOriginSize) {
  return {
    type: UPDATE_IMAGE_LIST_ORIGIN_SIZE,
    payload: {
      imageListOriginSize
    }
  };
}

export function updateImageList(imageList) {
  return {
    type: UPDATE_IMAGE_LIST,
    payload: {
      imageList
    }
  };
}

export function removeImageList() {
  return {
    type: REMOVE_IMAGE_LIST
  };
}
