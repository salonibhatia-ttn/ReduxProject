import {ADD_ORANGE, DEL_ORANGE} from './orangeTypes';

export const addOrange = () => {
  return {
    type: ADD_ORANGE,
  };
};

export const delOrange = () => {
  return {
    type: DEL_ORANGE,
  };
};
