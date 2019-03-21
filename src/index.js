import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store.js';
import App from './components/App.js';
// import searchYouTube from './lib/searchYouTube.js';
// import YOUTUBE_API_KEY from './config/youtube.js';

const store = configureStore();

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
