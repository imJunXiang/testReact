import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore} from 'redux'
import rootReducer from './todoList/reducers'
import TeachArticlePage from './pages/TeachArticlePage'
// import App from './todoList/components/App'

// import TabExample from './natdDemo/Tabs'
// import SearchBarExample from './natdDemo/searchBar'
// import ListExample from './natdDemo/List'
// import Demo from './natdDemo/ListView'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <TeachArticlePage />
    </Provider>,
    document.getElementById('root')
)
