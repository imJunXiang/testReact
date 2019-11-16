import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import rootReducer from './todoList/reducers'
import App from './todoList/components/App'

const store = createStore(rootReducer)

ReactDOM.render(
    // <div>hello world</div>,
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)