import {Provider} from 'react-redux';
import store from '../store';
import ReactDOM from 'react-dom'
import React from 'react';

ReactDOM.render(
    <Provider store={store}>
        <div>
            hello world
        </div>
    </Provider>,
    document.getElementById('root')
);