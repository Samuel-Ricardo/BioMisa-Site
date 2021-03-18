import React from 'react'

import {Switch, Route} from 'react-router-dom'

import images from '../../Images'

import HomePage from '../Pages/Home'
import ContentPage from '../Pages/Content'
import CreditsPage from '../Pages/Credits'

export default () => {


  const [perfilImage, setPerfilImage] = React.useState(images.BIOMISA_LOGO)

  const updatePerfilImage = (image) => {

      setPerfilImage(image)
  }

  return (

    <Switch>

      <Route exact path='/'>

        <HomePage perfilImage={perfilImage}></HomePage>

      </Route>

      <Route exact path='/content'>

        <ContentPage perfilImage={perfilImage}/>

      </Route>

      <Route exact path='/credits'>

          <CreditsPage perfilImage={perfilImage}/>

      </Route>


    </Switch>
  )
}
