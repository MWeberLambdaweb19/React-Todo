import React from 'react';
import './Todo.scss';

export default function Todo(props){
    return(
        <div>
            <h3>{props.itemProp.task}</h3>
        </div>
    )
}

