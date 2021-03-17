import React from "react";
import './App.css';

import { BrowserRouter } from 'react-router-dom'

import Background from "./Components/Background";
import Routes from './Components/Routes'



function App() {



  return (

    <div className="App">
      <header className="App-header">

      </header>

      <BrowserRouter>
        <Background>

          <Routes/>

        </Background>
      </BrowserRouter>

      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
