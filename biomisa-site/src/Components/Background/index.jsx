import React, {useState} from 'react'
import TioMisaBanner from '../../Images/Biomisa-banner.jpeg';
import './Background.css'
import DinamicHeader from '../Header'


export default () => {

  const [windowWidth, setWindowWidth] = useState(600)
  const [windowHeigth, setWindowHeigth] = useState(800)

  return(

    <body className="App-body"
      style={
        {
          minHeight : 0
        }}>



    <header>
      <a href="https://www.youtube.com/channel/UCEOcdeNrlmLUvOWNPSwQ3jA">
        <img src= {TioMisaBanner} id = "Tio-Misa--banner" alt="Tio Misa"></img>
      </a>
    </header>

      <div className="gradient"
        style={
          {
            minHeight : windowHeigth
          }}
      >


      <div className='Pane'>

<DinamicHeader></DinamicHeader>

<p>pedro</p>
<p>pedro</p>
<p>pedro</p>
<p>pedro</p>
<p>pedro</p>

</div>

    </div>


  </body>


  )
}
