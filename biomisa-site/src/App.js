import React from "react";
import './App.css';
import DynamicHeader from './Components/DynamicHeader';
import Background from "./Components/Background";

function App() {
  return (

    <div className="App">
      <header className="App-header">

      </header>

      <Background>

        <header>
          <DynamicHeader screenName={'Home Screen'} screenMap="Home Screen /"/>
        </header>

        <section>
          <p>Pedro >:()</p>
        </section>

      </Background>

      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
