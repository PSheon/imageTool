import * as Actions from 'app/store/actions/file';

const initialState = {
  loading: false,
  dimensions: [],
  sizes: [],
  docs: [],
  blobs: []
};

const image = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_IMAGE_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case Actions.UPDATE_IMAGE_LIST_DIMENSION: {
      return {
        ...state,
        loading: false,
        dimensions: action.payload.imageListDimension
      };
    }
    case Actions.UPDATE_IMAGE_LIST_ORIGIN_SIZE: {
      return {
        ...state,
        loading: false,
        sizes: action.payload.imageListOriginSize
      };
    }
    case Actions.UPDATE_IMAGE_LIST: {
      return {
        ...state,
        loading: false,
        docs: action.payload.imageList.map(imageItem =>
          window.URL.createObjectURL(imageItem)
        ),
        blobs: action.payload.imageList
      };
    }
    case Actions.REMOVE_IMAGE_LIST: {
      return {
        ...state,
        loading: false,
        docs: []
      };
    }
    default: {
      return state;
    }
  }
};

export default image;
