import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component{
  constructor(){
    super()

    this.state = {
      cities: ['Istanbul', 'St.Petersburg', 'Singapore', 'Prague', 'Paris', 'Florance','Venice', 'Odessa','New York', 'San Farncisco']

    }
  }

  render(){
    let placesToGo = this.state.cities.map((e,i)=> <h2> {i + 1} {e} </h2>)
    return(
      
      <div className = 'App'>{placesToGo}</div>

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
