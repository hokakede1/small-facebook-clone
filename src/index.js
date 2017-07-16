import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
// import Profile from './components/profile'
// import About from './components/about'

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Profile />
    <About /> */}
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
