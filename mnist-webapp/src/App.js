import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

class App extends React.Component{
  render(){
    return (
      <div className="App">

        <Greet name='Abisek' desc='fuck you'>
          <p>Badhia Badhia</p>
        </Greet>

        <br/>

        <Greet name='Soumya' desc='fuck you'>
          <button>Daba Mujhe</button>
        </Greet>

        <br/>

        <Welcome name = "Soumya" desc = "chutiya"/>

      </div>
    );
  }

}

export default App;


// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Hello There
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
