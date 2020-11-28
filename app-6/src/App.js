import React, {Component} from 'react';
import './App.css';
import ToDo from './ToDo'


class App extends Component{
  constructor(){
    super()

    this.state = {
      list: [],
      userInput:''

    }
    this.clickHandler = this.clickHandler.bind(this)

  }

  inputHandler(event){
    this.setState({
      userInput:event.target.value      
    })
  }

  clickHandler(){
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput:''
    })
  }


  render(){
    let list = this.state.list.map((element, index) =>{
      return <ToDo key ={index} task ={element}/>
    })
    return(
      <div className = 'App'>
        <h1>My to Do List:</h1>
        
        <div>
          <input
          placeHolder = 'Enter New Task'
          value = {this.state.userInput} 
          onChange = {e=>this.inputHandler(e)}></input>
          <button onClick = {()=>this.clickHandler()}>Add</button>
        </div>
       
          {list}
      
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
