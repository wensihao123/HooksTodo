import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './pages/App';
import store from './store/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
