import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

const items = [
  {
    task: 'Organize Garage',
    id: 1754,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1574,
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
      itemList: items,
    };
  }
      // itemList: prevState.items + this.state.value,
      // itemList: prevState.itemList.concat({task: item, id: Math.round(Math.random()*500), completed: false,})
  addItemToList = item => {
    console.log("ADDING ITEM:", item, "STATE:", this.state.itemList,)
    this.setState({itemList:[...this.state.itemList, {task: item, id:Date.now(), completed:false}]})
    // setState selects an item from state, opens an array, spreads across a previous state (the array in question), then adds a new object {}
  }

  toggleComplete = id => {
    this.setState({
      itemList: this.state.itemList.map ( item => item.id === id? {...item, completed: !item.completed} : item)
    });
  };

  removeItemfromList = () => {
    this.setState({
      itemList: this.state.itemList.filter(item => !item.completed)
    })
  }

  render(){
      return (
        <div>
            <h1>My Todo List:</h1>
            <TodoList 
            itemsPropList={this.state.itemList} 
            toggleCompleteProps={this.toggleComplete} />
            <TodoForm addTodo={this.addItemToList} />
            <button onClick={this.removeItemfromList}>Clear Completed</button>
        </div>
      )
  }

};
export default App;
