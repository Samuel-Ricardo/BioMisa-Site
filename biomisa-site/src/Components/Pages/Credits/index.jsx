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

                <PerfilCard

                  perfilImage={Images.SAMUEL}
                  cardTitle='Samuel Ricardo'
                  userTitle='|| Desenvolvedor Full Stack ||'
                  skillList={
                    [
                      <p className="Skill">
                        || Web || Mobile || Desktop ||
                      </p>

                      ,

                      <p className="Skill">
                        || JavaScript || Java || Elixir ||
                      </p>
                    ]
                  }
                  contact={

                    [
                      <LinkButton link='/'>
                        <Facebook color="#4ce300" />
                      </LinkButton>,
                    ]}

                >

                  <p>
                    Jovem desenvolvedor super apaixonado pela arte de transformar sonhos em realidade e café em código.
                  </p>

                </PerfilCard>

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
