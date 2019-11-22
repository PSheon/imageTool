import { combineReducers } from 'redux';
import fuse from './fuse';
import file from './file';
import auth from 'app/auth/store/reducers';

const createReducer = asyncReducers =>
  combineReducers({
    auth,
    fuse,
    file,
    ...asyncReducers
  });

export default createReducer;
