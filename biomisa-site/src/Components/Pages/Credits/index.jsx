import React from 'react'
import './Credits.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu'

import PerfilCard from '../../PerfilCard';

import Images from '../../../Images';

import LinkButton from '../../LinkButton';
import Facebook from '../../SVG/Facebook';
import Github from '../../SVG/Github';
import LinkedIn from '../../SVG/LinkedIn';
import LinkedInEmpty from '../../SVG/LinkedInEmpty';
import Gmail from '../../SVG/Gmail';
import Instagram from '../../SVG/Instagram';
import Twitter from '../../SVG/Twitter';
import Whatssap from '../../SVG/Whatssap';


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

                      <LinkButton link='https://github.com/Samuel-Ricardo' blank={true}>
                        <Github color='#4ce300'/>
                      </LinkButton>,

                      <LinkButton link='https://www.linkedin.com/in/samuel-ricardo-cabral/' blank={true}>
                        <LinkedIn color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='https://www.linkedin.com/in/samuel-ricardo-cabral/detail/recent-activity/shares/' blank={true}>
                        <LinkedInEmpty color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='https://www.instagram.com/samuel_ricardo.ex/' blank={true}>
                        <Instagram color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='mailto:samuelricardoofficial@gmail.com' blank={true}>
                        <Gmail color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='https://twitter.com/SamuelR84144340' blank={true}>
                        <Twitter color="#4ce300"/>
                      </LinkButton>,
                    ]}

                >

                  <p>
                    Jovem desenvolvedor super apaixonado pela arte de transformar sonhos em realidade e café em código.
                  </p>

                </PerfilCard>

              </section>

            </section>

            <section className="researchers">

              <section id="Deborah--Car">

                <PerfilCard

                  perfilImage={Images.DEBORA}
                  cardTitle='Deborah Nascimento'
                  userTitle='|| Desenvolvedora ||'
                  skillList={
                    [
                      <p className="Skill">
                        || Web || Desktop ||
                      </p>

                      ,

                      <p className="Skill">
                        || JavaScript || Java ||
                      </p>
                    ]
                  }
                  contact={

                    [

                      <LinkButton link='https://www.instagram.com/samuel_ricardo.ex/' blank={true}>
                        <Instagram color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='https://samuelricardoofficial@gmail.com' blank={true}>
                        <Gmail color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='https://twitter.com/SamuelR84144340' blank={true}>
                        <Whatssap color="#4ce300"/>
                      </LinkButton>,
                    ]}

                >

                  <p>
                    Jovem desenvolvedora e em alguns momentos poeta, apaixonada pela cozinha e sonhando com uma carreira militar
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
