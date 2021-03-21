import React from 'react'
import './Content.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu'

const ContentPage = (props) => {

  document.title = 'BioMisa - Sistema Nervoso'

  return (

    <>

      <header>
        <DynamicHeader screenName={'Nervous System'} screenMap="Article" perfilImage={props.perfilImage}/>
      </header>

      <div id="Content--Display">

        <section className='Content--Section' style={{ paddingLeft: 30 }}>

          <article>

              <p id='Intro'>

                O sistema nervoso é o sistema do corpo humano encarregado de captar e gerar respostas diante de estímulos que encontramos externamente e internamente, com esse sistema somos capazes de reagir e sentir diferentes sensações e alterações em nosso ambiente. O mesmo é composto por um tipo de tecido, denominado “tecido nervoso”, o qual possui como tipo celulares, os neurônios e as chamadas células da glia. Os neurônios são responsáveis pela propagação de impulsos nervosos e têm como partes básicas o corpo celular, onde se encontra: O núcleo; Os axônios e os dendritos.

              </p>

          </article>

        </section>
        <Menu></Menu>
      </div>


    </>

  )
}

export default ContentPage;
