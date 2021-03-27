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

              <section id="Hylan--Card">

                <PerfilCard

                  perfilImage={Images.HYLAN}
                  cardTitle='Hylan Silva'
                  userTitle='||  Desing e Programador ||'
                  skillList={
                    [
                      <p className="Skill">
                        || Web || Mobile || Desktop ||
                      </p>

                      ,

                      <p className="Skill">
                       || Java || PHP || Flutter || MySQL ||
                      </p>
                    ]
                  }
                  contact={

                    [

                      <LinkButton link='https://github.com/HylanSilva' blank={true}>
                        <Github color='#4ce300'/>
                      </LinkButton>,

                      <LinkButton link='https://www.linkedin.com/in/hylan-silva-89025b189/' blank={true}>
                        <LinkedInEmpty color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='https://www.instagram.com/laninhonutella/?hl=pt-br' blank={true}>
                        <Instagram color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='mailto:hylansilva27@gmail.com' blank={true}>
                        <Gmail color="#4ce300"/>
                      </LinkButton>,

                      <LinkButton link='https://twitter.com/laninhonutella' blank={true}>
                        <Twitter color="#4ce300"/>
                      </LinkButton>,
                    ]}

                >

                  <p>
                  Jovem que gosta muito de tecnologia, mas não esquece de curtir a vida, e sempre na positividade #sóalegria
                  </p>

                </PerfilCard>

              </section>

            </section>

            <section className="researchers">

            <h2 className='Credits--Researchers-Title'>Pesquisadores</h2>

              <section id="Deborah--Card">

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

                      <LinkButton link='https://www.instagram.com/santosdeborah16/' blank={true}>
                        <Instagram color="rgb(115, 16, 207)"/>
                      </LinkButton>,

                      <LinkButton link='mailto:nascimentodeborah151@gmail.com' blank={true}>
                        <Gmail color="rgb(115, 16, 207)"/>
                      </LinkButton>,

                      <LinkButton >
                        <Whatssap color="rgb(115, 16, 207)"/>
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
