import React from 'react'
import DinamicHeader from '../Header'
import TioMisaBanner from '../../Images/Biomisa-banner.jpeg';
import './Background.css'


export default () => {



  return(

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


  )
}
