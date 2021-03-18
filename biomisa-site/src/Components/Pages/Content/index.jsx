import React from 'react'
import './Content.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu'

const ContentPage = (props) => {

  return (

    <>

      <header>
        <DynamicHeader screenName={'Nervous System'} screenMap="Article" perfilImage={props.perfilImage}/>
      </header>

      <div className="Content--Display">

      <section className='Content--Section' style={{ paddingLeft: 30 }}>

        <p>Pedro >:()</p>


      </section>

      <Menu></Menu>


      </div>
    </>

  )
}

export default ContentPage;
