import React from 'react'

import {Switch, Route} from 'react-router-dom'

import Images from '../../Images'

import HomePage from '../Pages/Home'
import ContentPage from '../Pages/Content'
import CreditsPage from '../Pages/Credits'
import Menu from '../Menu'

export default () => {

/*
  const [perfilImage, setPerfilImage] = React.useState(Images.SAMUEL)

  const sortPerfil = () => {

    const images = [Images.DEBORA, Images.SAMUEL, Images.MILENA]

    let sort = Math.floor(Math.random() * 3 - 1)

    if (sort < 0){

      sort = 0
    }

    if (sort > 2) {

      sort = 2
    }

    console.log("Sort: "+sort)

    const perfil = images[sort]

      setPerfilImage(perfil)

  }
  */

  return (

    <Switch >

      <Route exact path='/' >

        <HomePage perfilImage={Images.SAMUEL} ></HomePage>

      </Route>

      <Route exact path='/content'>

        <ContentPage perfilImage={Images.DEBORA} />

      </Route>

      <Route exact path='/credits'>

        <CreditsPage perfilImage={Images.MILENA}/>

      </Route>


    </Switch>
  )
}
