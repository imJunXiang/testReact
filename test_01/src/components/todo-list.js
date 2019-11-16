import React from 'react'
import {connect} from 'react-redux';
class TodoList extends React.Component {
    getTodos() {
        return this.props.todos.map((todo,index) => {
            return (<li key={index}>
                <input type="checkbox" checked={todo.isComplete}/> {
                    todo.isComplete 
                    ? <del>{todo.title}</del>
                    : <span>{todo.title}</span>
                }
                <button type="button" data-id={todo.id}>删除</button>
            </li>)
        });
    }

    render() {
        return (<div>
            <ul>{this.getTodos()}</ul>
        </div>);
    }
}

export default connect((state) => ({
    ...state
}))(TodoList)