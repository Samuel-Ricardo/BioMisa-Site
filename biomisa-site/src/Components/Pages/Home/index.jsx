import React from 'react'
import './Home.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu';
import MenuSection from '../../MenuSection';
import Summary from '../../Summary';
import LinkButton from '../../LinkButton';
import NavButton from '../../NavButton';

const HomePage = (props) => {

  document.title = 'BioMisa - HomePage'

  return (

    <>

      <header>
        <DynamicHeader screenName={'Welcome'} perfilImage={props.perfilImage}>

          <div className="headers--pages">

            <div className="home--button">
            <NavButton link='/'>Home</NavButton>
            </div>


            <NavButton link='/content'>| Content</NavButton>

            <NavButton link='/Credits'>| Credits</NavButton>
          </div>

        </DynamicHeader>
      </header>

      <div className="Home--Display">

      <section className='Home--Section' style={{ paddingLeft: 30 }}>

          <div className="Home-page--title">
            <h1>|| Hello Visitor | Welcome :) ||</h1>
          </div>

          <div className="Home-page--title">
            <h2> Summary: </h2>
          </div>

      </section>

        {/*<Menu></Menu>*/}

      </div>
    </>
  )
}

export default HomePage;
