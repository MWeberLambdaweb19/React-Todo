import React from 'react';
import './Todo.scss';

export default function Todo(props){
    let classNames = "item"
    if (props.itemProp.completed) {
        classNames += " completed"
    }

    function updateListHere(){
        props.toggleComplete(props.itemProp.id);
    }

    return(
        <div className={classNames} onClick={updateListHere}>
            <h3>{props.itemProp.task}</h3>
        </div>
    )
}

