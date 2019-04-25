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

  addTodo = (item="What Happens Here?") => {
    console.log("ADDING ITEM:", item, "STATE:", this.state.itemList,)
    this.setState((prevState, _) => {
      itemList: [...prevState.itemList, {task: item, id: Math.round(Math.random()*500), completed: false,}],
       // itemList: prevState.items + this.state.value,
      // itemList: prevState.itemList.concat({task: item, id: Math.round(Math.random()*500), completed: false,})
    })
  }

    handleChange = event => {
    console.log("NAME:", event.target.name, "VALUE:", event.target.value)
    this.setState({[event.target.name]: event.target.value});
  }

  
  handleSubmit = event => { 
    //Preserves state, updates global state with current value, and resets local state.
    console.log("Time to handle submit!")
    event.preventDefault();
    console.log("Does not refresh!") 
    this.addTodo() 
  }
  render(){
      return (
        <div>
            <h1>My Todo List:</h1>
            <TodoList itemsPropList={this.state.itemList} key={this.state.itemList.id} />
            <TodoForm addTodo={this.addTodo} />
        </div>
      )
  }

};
export default App;
