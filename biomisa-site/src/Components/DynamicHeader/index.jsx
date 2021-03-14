import React from "react"
import './DynamicHeader.css'

import PerfilImage from '../PerfilImage'
import Images from "../../Images"


export default (props) => {


  return(

    <header className='Header'>

      <PerfilImage src={Images.BIOMISA_LOGO}/>

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
