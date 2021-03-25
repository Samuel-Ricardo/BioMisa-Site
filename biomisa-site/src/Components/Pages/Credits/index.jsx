import React from 'react'
import './Credits.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu'
import Images from '../../../Images';

const CreditsPage = (props) => {

  return (

    <>

      <header>
        <DynamicHeader screenName={'Participants'} screenMap="Credits" perfilImage={props.perfilImage}/>
      </header>

      <div className="Credits--Display">

      <section className='Credits--Section' style={{ paddingLeft: 30 }}>

        <h1 className='Credits-Title'> Criadores </h1>

          <section id="Samuel--Programmer">
            <img src={Images.SAMUEL} alt="Samuel"/>
          </section>

      </section>

        <Menu></Menu>

      </div>
    </>

  )
}

export default CreditsPage;
