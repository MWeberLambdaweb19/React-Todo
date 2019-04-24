import React from 'react';
import './Todo.scss';

function Todo(props){
    return(
        <div>
            <h3>{props.itemProp.task}</h3>
        </div>
    )
}

export default Todo;