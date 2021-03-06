import React from 'react'
import './Home.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu';
import MenuSection from '../../MenuSection';

import Summary from '../../Summary';

import LinkButton from '../../LinkButton';
import NavButton from '../../NavButton';
import Images from '../../../Images';



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

      <section className='Home--Title--Section' style={{ paddingLeft: 30 }}>

          <div className="Home-page--title">
            <p>A BETTER WAY</p>
            <p className='orange--title'>TO LEARN BIOLOGY</p>
          </div>

        </section>



        <section className="Home-guide--section">

          <div className="orange-border-bar"></div>

          <div className="Home-page--guide">
            <h2> Guide: </h2>

            <div className="home-summary--area">
              <Summary>
                <MenuSection>

                  <LinkButton link='/content#Introduction' icon={Images.MIND}>
                    Nervous System - Get Started
                  </LinkButton>

                  <LinkButton link='/credits#Authors' icon={Images.MIND}>
                    Team - Authors
                  </LinkButton>

                  <LinkButton link='/credits#Sources' icon={Images.MIND}>
                    Teachers - Content Source
                  </LinkButton>

                </MenuSection>
              </Summary>
            </div>


          </div>

        </section>

        {/*<Menu></Menu>*/}

      </div>
    </>
  )
}

export default HomePage;
