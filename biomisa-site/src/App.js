import React from "react";
import './App.css';
import DynamicHeader from './Components/DynamicHeader';
import Background from "./Components/Background";
import images from './Images'

function App() {
  return (

    <div className="App">
      <header className="App-header">

      </header>

      <Background>

        <header>
          <DynamicHeader screenName={'Home Screen'} screenMap="Home Screen /" src={images.BIOMISA_LOGO}/>
        </header>

        <section style={{paddingLeft: 30}}>
          <p>Pedro >:()</p>
        </section>

      </Background>

      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
