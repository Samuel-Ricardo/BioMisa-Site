import React from "react"
import './DynamicHeader.css'

import PerfilImage from '../PerfilImage'
import Images from "../../Images"


export default (props) => {


  return(

    <header className='Header'>

      <div className="Header--logo">
        <PerfilImage src={Images.BIOMISA_LOGO}/>
      </div>



      <section className="text-area">

        <div className='ScreenName'>
          <p>{props.screenName}</p>
        </div>

        <div className='ScreenMap'>
          <p>{props.screenMap}</p>
        </div>

      </section>

      <div className="Header--perfil-image">
        <PerfilImage src={props.perfilImage} />
      </div>

    </header>

  )
}
