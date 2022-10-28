import React from 'react';
import BRoutes from './routes';

import { Provider } from 'react-redux'
// import storeConfig  from './storeConfig/store'
import { store } from './storeConfig'


function App() {
  return (
    <Provider store={store}>
      <BRoutes />
    </Provider>
  );
}

export default App;
