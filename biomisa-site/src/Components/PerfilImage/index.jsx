import React, { useEffect } from 'react'
import './PerfilImage.css'
import BiomisaPerfil from '../../Images/Biomisa.jpeg'

const fs = require('fs')
//import { opendir } from 'fs/promises'

export default (props) => {

  const [image, setImage] = React.useState(props.src)

  const isFile = async (image) => {

    if (image === undefined || image === null || image === '' || image === ' ') {

      console.log("")
      console.log('É Vazio: '+image)
      console.log("")

      return false
    }

    try {

      const dir = await fs.promises.opendir(image)

      const isFile = await (dir.readSync().isFile())

      console.log("")
      console.log("is File: "+isFile)
      console.log("")

      return isFile

    } catch (err) {

      console.log("")
      console.log("Error: "+err)
      console.log("")

      return false
    }
  }

  const updateImage = (image) => {

    if ( isFile('image')) {

        setImage(image)


    } else {

        setImage(BiomisaPerfil)

    }
  }

  return (

    <div className='PerfilImage'>
      pedro
      <img src={props.src} alt="perfil image" ></img>
    </div>

  )
}
