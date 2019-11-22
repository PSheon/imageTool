import { combineReducers } from 'redux';
import image from './image.reducer';

const fileReducers = combineReducers({
  image
});

export default fileReducers;
