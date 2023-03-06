import {ADD_STRAWBERRY, DEL_STRAWBERRY} from './strawberryTypes';

export const addStrawberry = () => {
  return {
    type: ADD_STRAWBERRY,
  };
};

export const delStrawberry = () => {
  return {
    type: DEL_STRAWBERRY,
  };
};
