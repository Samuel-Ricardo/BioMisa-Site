import React from 'react'
import './Home.css'

import DynamicHeader from '../../DynamicHeader';

const HomePage = (props) => {

  return (

    <>

      <header>
        <DynamicHeader screenName={'Home Screen'} screenMap="Home Screen /" perfilImage={props.perfilImage}/>
      </header>

      <section style={{paddingLeft: 30}}>
        <p>Pedro >:()</p>


      </section>

      <></>


    </>

  )
}

export default HomePage;
