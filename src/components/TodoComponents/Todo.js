import React from 'react';
import './Todo.scss';

function Todo(props){
    return(
        <div>
            <h1>{props.itemProp.task}</h1>
        </div>
    )
}

export default Todo;