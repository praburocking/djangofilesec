import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/store'
// import * as Sentry from '@sentry/react';
// Sentry.init({dsn: "https://14b9175bd834452fbfcde740da0f6058@o419378.ingest.sentry.io/5332035"});
ReactDOM.render(<Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
