import React from "react"
import './DynamicHeader.css'

import PerfilImage from '../PerfilImage'

export default (props) => {

  return(

    <header className='Header'>

      <section className="text-area">

        <div className='ScreenName'>
          <p>{props.screenName}</p>
        </div>

        <div className='ScreenMap'>
          <p>{props.screenMap}</p>
        </div>

      </section>

    </header>

  )
}
