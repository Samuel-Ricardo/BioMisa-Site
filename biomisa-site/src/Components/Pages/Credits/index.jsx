import React from 'react'
import './Credits.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu'
import Images from '../../../Images';
import LinkButton from '../../LinkButton';
import Facebook from '../../SVG/Facebook';
import PerfilCard from '../../PerfilCard';

const CreditsPage = (props) => {

  const showBorder = () => {

  }

  return (

    <>

      <header>
        <DynamicHeader screenName={'Participants'} screenMap="Credits" perfilImage={props.perfilImage}/>
      </header>

      <div className="Credits--Display">

        <section className='Credits--Section' style={{ paddingLeft: 30 }}>

          <section id="Authors">

            <h1 className='Credits--Authors-Title'> Equipe de Desenvolvedores </h1>

            <section id="Programmers">

              <h2 className='Credits--Programmers-Title'>Programadores</h2>

              <section id="Samuel--Card">

                <PerfilCard></PerfilCard>

              </section>

            </section>
          </section>

        </section>

          <Menu></Menu>

      </div>

      {showBorder()}
    </>

  )
}

export default CreditsPage;
