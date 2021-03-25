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

              <section id="Samuel--Programmer">
                <img src={Images.SAMUEL} alt="Samuel" />

                <p>
                  Samuel Ricardo
                </p>

                <p>

                  A roda de cores (ou imagem na guia Extrair tema) pode ser usada para gerar paleta de cores, a qual pode ser salva na Creative Cloud após o logon.
                  Depois, você pode usar seus temas de cores salvos nos produtos da Adobe, como o Photoshop, o Illustrator, o Fresco etc., por meio do painel de temas do Adobe Color ou das Bibliotecas da CC.
                </p>

                <p>A roda de cores (ou imagem na guia Extrair tema) pode ser usada para gerar paleta de cores, a qual pode ser salva na Creative Cloud após o logon.
</p>
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
