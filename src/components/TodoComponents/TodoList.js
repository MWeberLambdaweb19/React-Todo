// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const items = [
    {
        task: 'Organize Garage',
      },
      {
        task: 'Bake Cookies',
      }
]

class TodoList extends React.Component {
    render(){
    return (
    <div>
        {items.map(item =>(
            <Todo itemProp={item}/>
        ))}    
    </div>
    )
    }
};

export {TodoList, items};