import React from 'react'
import TioMisaBanner from '../../Images/Biomisa-banner.jpeg';
import './Background.css'


export default (props) => {

  return(

    <body className="App-body">

    <header>
      <a href="https://www.youtube.com/channel/UCEOcdeNrlmLUvOWNPSwQ3jA">
        <img src= {TioMisaBanner} id = "Tio-Misa--banner" alt="Tio Misa"></img>
      </a>
    </header>

      <section>
        <div className="gradient" >


          <div className='Pane'>

            {props.children}

          </div>

        </div>
      </section>


  </body>


  )
}
