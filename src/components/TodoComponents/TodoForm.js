import React from 'react';
import {items} from './TodoList.js';
import Todo from './Todo.js';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state = {
          itemsList: items,
          newitem: {
            task: "",
          }
        };
      }
    
      addItem = event => {
        console.log(event)
        event.preventDefault();
        this.setState({
          itemsList: [...this.state.itemsList, this.state.newitem],
          newitem: {
              task:""
          },
        })
      }
    
      handleChanges = event => {
        console.log(event.target.value)
        this.setState({
            newitem: {
                ...this.state.newitem,
            [event.target.name]: event.target.value
            }
        })
    }
    render(){
        return (
        <div>
            <form onSubmit={this.addItem}>
                <input name="task" type="text" placeholder="Insert an item here!" value={this.state.newitem.task} onChange={this.handleChanges}></input>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
        )
    }
};

export default TodoForm;