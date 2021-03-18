import React from 'react'
import './Credits.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu'

const CreditsPage = (props) => {

  return (

    <>

      <header>
        <DynamicHeader screenName={'Participants'} screenMap="Credits" perfilImage={props.perfilImage}/>
      </header>

      <div className="Credits--Display">

      <section className='Credits--Section' style={{ paddingLeft: 30 }}>

        <p>Pedro :()</p>

      </section>

        <Menu></Menu>

      </div>
    </>

  )
}

export default CreditsPage;
