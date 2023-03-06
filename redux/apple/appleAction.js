import {ADD_APPLE, DEL_APPLE} from './appleTypes';
export const addApple = () => {
  return {
    type: ADD_APPLE,
  };
};

export const delApple = () => {
  return {
    type: DEL_APPLE,
  };
};
