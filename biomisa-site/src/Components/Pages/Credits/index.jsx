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
import Youtube from '../../SVG/Youtube';

import TeacherCard from '../../TeachersCard';


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

              <h2 className='Credits--Programmers-Title'>PrOgramadores</h2>

              <div className="Credits--Border-bar"/>

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
                  userTitle='||  Desingner e Programador ||'
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

              <section id="Milena--Card">

                <PerfilCard

                  perfilImage={Images.MILENA}
                  cardTitle='Milena Fernanda'
                  userTitle='|| Pesquisadora ||'
                  skillList={
                    [
                      <p className="Skill">
                        || Google Scholar || Photograph ||
                      </p>

                      ,

                      <p className="Skill">
                        || Read || Search ||
                      </p>
                    ]
                  }
                  contact={

                    [

                      <LinkButton link='https://twitter.com/loona200421' blank={true}>
                        <Twitter color="rgb(115, 16, 207)"/>
                      </LinkButton>,

                      <LinkButton link='mailto:milenafaraujoprof21@gmail.com' blank={true}>
                        <Gmail color="rgb(115, 16, 207)"/>
                      </LinkButton>,
                    ]}

                >

                  <p>
                  Uma pesquisadora nata, que não perde oportunidade de se encarregar da responsabilidade de realizar as pesquisas dos trabalhos. meu passa tempo? ver anime e navegar no twitter :)
                  </p>

                </PerfilCard>

              </section>

              <section id="Gleydson--Card">

                <PerfilCard

                  perfilImage={Images.GLEYDSON}
                  cardTitle='Gleydson'
                  userTitle='|| Pesquisador ||'
                  skillList={
                    [
                      <p className="Skill">
                        || Read || Search ||
                      </p>

                    ]
                  }
                  contact={

                    [

                      <LinkButton link='https://www.instagram.com/gleydsonv2002/' blank={true}>
                        <Instagram color="rgb(115, 16, 207)"/>
                      </LinkButton>,

                      <LinkButton link='mailto:' blank={true}>
                        <Gmail color="rgb(115, 16, 207)"/>
                      </LinkButton>,
                    ]}

                >

                  <p>
                  Uma grande pesquisador, que sempre disposto a ajudar a equipe com minhas habilidades ;)
                  </p>

                </PerfilCard>

              </section>

              <div className="Credits--Border-bar"/>

            </section>

          </section>

          <section id="Sources">
            <h1 className="Credits--Source-Title"> Fontes de Pesquisa </h1>

            <section id="Teachers--Samuel-Cunha">

              <TeacherCard

                link={"https://professorsamuelcunha.com.br/"}
                name="Samuel Cunha"
                title='|| Professsor de Biologia ||'

                contact={
                  [
                    <LinkButton link='https://www.youtube.com/channel/UCdLt2OhiWNLRsGNF-0DE4-A' blank={true}>
                      <Youtube color='#4ce300' width={50} height={50}/>
                    </LinkButton>,

                    <LinkButton link='https://www.instagram.com/professorsamuelcunha/' blank={true}>
                      <Instagram color='#4ce300' width={50} height={50} />
                    </LinkButton>,
                  ]
                }
              ></TeacherCard>

            </section>

            <section id="Teachers--Misael">

              <TeacherCard

                link={"https://www.youtube.com/embed/hQ2n86X1WSU"}
                video={true}
                name=" Misael Lima"
                title='|| Professsor de Biologia da ETEMB ||'

                contact={
                  [
                    <LinkButton link='https://www.youtube.com/channel/UCEOcdeNrlmLUvOWNPSwQ3jA' blank={true}>
                      <Youtube color='#fc5602' width={50} height={50}/>
                    </LinkButton>,

                    <LinkButton link='https://www.instagram.com/misaellimajr/' blank={true}>
                      <Instagram color='#fc5602' width={50} height={50} />
                    </LinkButton>,
                  ]
                }
              ></TeacherCard>

            </section>

            <section id="Teachers--Kennedy">

              <TeacherCard

                link={"https://www.bioexplica.com.br/"}
                video={false}
                name="Kennedy Ramos"
                title='|| Professsor de Biologia ||'

                contact={
                  [
                    <LinkButton link='https://www.youtube.com/user/kennedyramosbio' blank={true}>
                      <Youtube color='blue' width={50} height={50}/>
                    </LinkButton>,

                    <LinkButton link='https://www.instagram.com/bioexplica/' blank={true}>
                      <Instagram color='blue' width={50} height={50} />
                    </LinkButton>,
                  ]
                }
              ></TeacherCard>

            </section>



            <section id="Teachers--Jubilut">

              <TeacherCard

                link={"https://www.biologiatotal.com.br/"}
                video={false}
                name="Paulo Jubilut"
                title='|| Professsor de Biologia ||'

                contact={
                  [
                    <LinkButton link='https://www.youtube.com/c/biologiatotalbrjubilut/featured' blank={true}>
                      <Youtube color='rgb(255, 208, 0)' width={50} height={50}/>
                    </LinkButton>,

                    <LinkButton link='https://www.instagram.com/paulojubilut/' blank={true}>
                      <Instagram color='rgb(255, 208, 0)' width={50} height={50} />
                    </LinkButton>,
                  ]
                }
              ></TeacherCard>

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
