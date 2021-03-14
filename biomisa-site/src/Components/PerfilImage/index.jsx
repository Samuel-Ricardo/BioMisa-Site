import React, { useEffect } from 'react'
import './PerfilImage.css'

const fs = require('fs')
//import { opendir } from 'fs/promises'

export default (props) => {

  return (

    <div className='PerfilImage--Background'>
      <img
        src={props.src}
        alt="perfil image"
        className='PerfilImage'
      ></img>
    </div>

  )
}
