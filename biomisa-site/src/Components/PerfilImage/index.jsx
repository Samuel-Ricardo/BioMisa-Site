import React from 'react'
import './PerfilImage.css'
import BiomisaPerfil from '../../Images/Biomisa.jpeg'

const fs = require('fs')
//import { opendir } from 'fs/promises'

export default (props) => {

  const [image, setImage] = React.useState(BiomisaPerfil)

  const isFile = async (image) => {

    if (image === undefined || image === null || image === '' || image === ' ') {

      return false
    }

    try {

      const dir = await fs.promises.opendir(image)

      const isFile = (dir.readSync().isFile())

      console.log("")
      console.log("é Arquivo: "+isFile)
      console.log("")

      return isFile

    } catch (err) {

      console.log("")
      console.log("Error: "+err)
      console.log("")

      return false
    }
  }

  isFile(props.src)



  return (

    <div className='PerfilImage'>
      pedro
      <img src={image} alt="perfil image"></img>
    </div>

  )
}
