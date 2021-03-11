import './App.css';
import DinamicHeader from './Components/Header'
import TioMisaBanner from './Images/Biomisa-banner.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <body className="App-body">

        <header>
          <a href="https://www.youtube.com/channel/UCEOcdeNrlmLUvOWNPSwQ3jA">
            <img src= {TioMisaBanner} id = "Tio-Misa--banner" alt="Tio Misa"></img>
          </a>
        </header>

        <div className="gradient">

          <div className='Pane'>

          <DinamicHeader></DinamicHeader>

          </div>

        </div>



      </body>

      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
