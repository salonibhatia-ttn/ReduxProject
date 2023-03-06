import {combineReducers} from 'redux';
import appleReducer from './apple/appleReducer';
import orangeReducer from './orange/orangeReducer';
import strawberryReducer from './strawberry/strawberryReducer';

const rootReducer = combineReducers({
  apple: appleReducer,
  orange: orangeReducer,
  strawberry: strawberryReducer,
});

export default rootReducer;
