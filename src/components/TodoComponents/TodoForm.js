import React from 'react';

export default function TodoForm(props) {
  return(
            <form onSubmit={props.handleSubmit}>
              <input
              type="text"
              name="input"
              id="new-item"
              value={props.itemInput.task}
              onChange={props.handleChange}
            />
            <button>Add Task</button>
            </form>
  )
}
// export default class TodoForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       input: ""
//     }
//   }

//   handleChange = event => {
//     console.log("NAME:", event.target.name, "VALUE:", event.target.value)
//     this.setState({[event.target.name]: event.target.value});
//   }

  
//   handleSubmit = event => { 
//     //Preserves state, updates global state with current value, and resets local state.
//     console.log("Time to handle submit!")
//     event.preventDefault();
//     console.log("Does not refresh!")
//     this.props.addTodo(this.state.input); 
//     this.setState({input:""});
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//         type="text"
//         name="input"
//         id="new-item"
//         value={this.state.input}
//         onChange={this.handleChange}
//       />
//       <button>Add Task</button>
//       </form>
//     )
//   }
// }