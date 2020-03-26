import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './state/store/configureStore';
import axios from 'axios'
import "semantic-ui-css/semantic.min.css";

axios.defaults.baseURL = "http://localhost:3000/api/v1";

const store = configureStore()
window.store = store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();