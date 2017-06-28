import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './components/Counter';
import PostsList from './features/posts/list/PostsList';
import {createStore} from 'redux';
import configureStore from './store/configureStore';

import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={configureStore({})}>
        <PostsList/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
