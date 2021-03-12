import React from "react";
import './App.css';
import DinamicHeader from './Components/DynamicHeader';
import Background from "./Components/Background";

function App() {
  return (

    <div className="App">
      <header className="App-header">

      </header>

      <Background>

        <header>
          <DinamicHeader/>
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
