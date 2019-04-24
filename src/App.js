import React from 'react';
import Todo from './components/TodoComponents/Todo.js';

const items = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      itemsList: [items],
      newItem: {
        task: "",
        id: Date.now(),
        completed: false,
      }
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      itemsList: [...this.state.itemsList, this.state.newItem],
      newItem: {
          task: "",
          id: Date.now(),
          completed: false,
      },
    })
  }

  handleChanges = event => {
    this.setState({
        newItem: {
            ...this.state.newItem,
        [event.target.name]: event.target.value
        }
    })
}

render(){
    return (
    <div>
      <h1>My Todo List:</h1>
      <div>
        {this.state.itemsList.map(item =>(
            <Todo itemProp={item}/>
        ))}
      </div>    
      <div>
          <form onSubmit={this.onSubmit}>
              <input name="task" placeholder="Insert an item here!" value={this.state.newItem.task} onChange={this.handleChanges}></input>
              <button>Add Todo</button>
              <button>Clear Completed</button>
          </form>
      </div>
    </div>
    )
}
};
export default App;
