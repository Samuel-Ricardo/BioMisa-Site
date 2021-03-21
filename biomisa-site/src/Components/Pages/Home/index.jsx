import React from 'react'
import './Home.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu';
import MenuSection from '../../MenuSection';
import Summary from '../../Summary';
import LinkButton from '../../LinkButton';

const HomePage = (props) => {

  document.title = 'BioMisa - HomePage'

  return (

    <>

      <header>
        <DynamicHeader screenName={'Welcome'} screenMap="Home Screen" perfilImage={props.perfilImage}/>
      </header>

      <div className="Home--Display">

      <section className='Home--Section' style={{ paddingLeft: 30 }}>

          <div className="Home-page--title">
            <h1>|| Hello Visitor | Welcome :) ||</h1>
          </div>

          <div className="Home-page--title">
            <h2>Summary: </h2>
          </div>


            <Summary>

              <MenuSection title='Nervous System'>

                <LinkButton link='/content#Intro'> - Introduction </LinkButton>

              </MenuSection>

            </Summary>
      </section>

      <Menu></Menu>
      </div>
    </>
  )
}

export default HomePage;
