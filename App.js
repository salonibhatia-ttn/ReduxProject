import {Provider} from 'react-redux';
import React from 'react';
import store from './redux/store';
import Apple from './components/Apple';
import Orange from './components/Orange';
import Strawberry from './components/Strawberry';
import Total from './components/Total';

const App = () => {
  return (
    <Provider store={store}>
      <Apple />
      <Orange />
      <Strawberry />
      <Total />
    </Provider>
  );
};

export default App;
