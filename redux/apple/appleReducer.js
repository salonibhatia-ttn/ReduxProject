import {ADD_APPLE, DEL_APPLE} from './appleTypes';

const initialState = {
  numOfApples: 1,
};

const appleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPLE:
      return {
        ...state,
        numOfApples: state.numOfApples + 1,
      };
    case DEL_APPLE:
      return {
        ...state,
        numOfApples: state.numOfApples - 1,
      };

    default:
      return state;
  }
};

export default appleReducer;
