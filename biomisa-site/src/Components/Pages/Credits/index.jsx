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

          <section id="Authors">

            <h1 className='Credits--Authors-Title'> Equipe de Desenvolvedores </h1>

            <section id="Programmers">

              <h2 className='Credits--Programmers-Title'>Programadores</h2>

              <section id="Samuel--Card">

                <img src={Images.SAMUEL} alt="Samuel" />

                <h3 className='Card-Title'>
                  Samuel Ricardo
                </h3>

                <p className="Card-Function">
                || Desenvolvedor Full Stack ||
                </p>

                <section className='Card--Description'>

                  <p>
                    Jovem desenvolvedor super apaixonado pela arte de transformar sonhos em realidade e café em código.
                  </p>

                </section>

                <section className="Card--Skill-List">
                  <h2>
                    Skills
                  </h2>

                  <div className="Skill-List">
                    <p className="Skill">
                      || Web || Mobile || Desktop ||
                    </p>

                    <p className="Skill">
                      || JavaScript || Java || Elixir ||
                    </p>
                  </div>
                </section>

              </section>

            </section>
          </section>

      </section>

        <Menu></Menu>

      </div>
    </>

  )
}

export default CreditsPage;
