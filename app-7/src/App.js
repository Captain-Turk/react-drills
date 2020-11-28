import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NewTask from './Components/NewTask'
import List from './Components/List'


class App extends Component{
  constructor(){
    super()

    this.state = {
      list:[]
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask(task){    
    this.setState({
      list: [task, ...this.state.list ]
   })

  }

  


  render(){
    return(
      <div className = 'App'>
        <h1>My to-Do List</h1>
        <NewTask addTask = {this.addTask}/>
        <List taskList ={this.state.list}/>
      </div>


    )
  }



}

export default App

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
