import * as Actions from '../actions';

const initialState = {
  role: [], //guest
  data: {
    displayName: '好青年',
    photoURL: 'assets/images/avatars/penguin.png',
    email: 'penguin@gmail.com',
    shortcuts: ['影像處裡工具']
  }
};

const user = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_USER_DATA: {
      return {
        ...initialState,
        ...action.payload
      };
    }
    case Actions.REMOVE_USER_DATA: {
      return {
        ...initialState
      };
    }
    case Actions.USER_LOGGED_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default user;
