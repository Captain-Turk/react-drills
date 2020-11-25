import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
      this.state = {
        filterString: '',
        hobbies: ['swimming', 'reading', 'travelling', 'surfing', 'movies', 'differnt cuisenes', 'meeting new people','good music']
      
    }
  }

  inputHandler(e){
    this.setState({
      filterString:e.target.value
    })
  }

  render(){
    let likes = this.state.hobbies
    .filter((element) => element.includes(this.state.filterString))
    .map((element, index) =><h2 key={index}>{element}</h2>)
    return(
      <div className = 'App'>
        <input onChange = {e => this.inputHandler(e)} type='text'/>
        {likes}
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
