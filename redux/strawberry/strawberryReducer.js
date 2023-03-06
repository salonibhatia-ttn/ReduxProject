import {ADD_STRAWBERRY, DEL_STRAWBERRY} from './strawberryTypes';

const initialState = {
  numOfStrawberry: 1,
};

const strawberryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STRAWBERRY:
      return {
        ...state,
        numOfStrawberry: state.numOfStrawberry + 1,
      };
    case DEL_STRAWBERRY:
      return {
        ...state,
        numOfStrawberry: state.numOfStrawberry - 1,
      };

    default:
      return state;
  }
};

export default strawberryReducer;
