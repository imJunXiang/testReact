
import {ADD_TODO} from '../actions/action-type/action-types';

let initState = {
    todos: [
        {
            id: parseInt(Math.random() * 10000000),
            isComplete: false,
            title: '学习redux'
        },{
            id: parseInt(Math.random() * 10000000),
            isComplete: true,
            title: '学习react'
        },{
            id:parseInt(Math.random() * 10000000),
            isComplete: false,
            title: '学习node'
        }
    ]
};

function reducer(state=initState,action) {
    let newState;
    switch (action.type) {
        case ADD_TODO:
            newState = {
                todos: [
                    ...state.todos,
                    action.payload
                ]
            };
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}

export default reducer;