import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'

class TodoHeader extends React.Component {
    getUnfinishedCount() {
        return this.props.todos.filter((i) => {
            return i.isComplete === false;
        }).length;
    }

    render() {
        return(<div>
                <div>您有{this.getUnfinishedCount()}件事未完成</div>
            </div>);
    }
}

let ConnectedTodoHeader = connect((state) => ({
    ...state
}))(TodoHeader);

// 导出注入后的组件
export default ConnectedTodoHeader