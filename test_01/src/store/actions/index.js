import {ADD_TODO} from './action-type/action-types';

let actions = {
    addTodo: function(payload) {
        return {type: ADD_TODO,payload};
    }
};

export default actions;