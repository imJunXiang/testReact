import React from 'react' 
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibileTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibileTodoList />
        <Footer />
    </div>
)

export default App