import {ADD_ORANGE, DEL_ORANGE} from './orangeTypes';

const initialState = {
  numOfOranges: 1,
};

const orangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORANGE:
      return {
        ...state,
        numOfOranges: state.numOfOranges + 1,
      };
    case DEL_ORANGE:
      return {
        ...state,
        numOfOranges: state.numOfOranges - 1,
      };

    default:
      return state;
  }
};

export default orangeReducer;
