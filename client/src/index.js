import React from 'react';
import ReactDOM from 'react-dom';
//redux store setup
import { Provider } from 'react-redux'
import configureStore from './store';

import App from './App';
//import registerServiceWorker from './serviceWorker';

ReactDOM.render(
 <Provider store={configureStore()}>
  <App />
 </Provider>,
 document.getElementById('root')
);
//registerServiceWorker();
