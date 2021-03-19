import React from 'react'
import './Home.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu'


const HomePage = (props) => {

  document.title = 'BioMisa - HomePage'

  return (

    <>

      <header>
        <DynamicHeader screenName={'Welcome'} screenMap="Home Screen" perfilImage={props.perfilImage}/>
      </header>

      <div className="Home--Display">

      <section className='Home--Section' style={{ paddingLeft: 30 }}>

        <p>Pedro :()</p>


      </section>

      <Menu></Menu>


      </div>
    </>

  )
}

export default HomePage;
