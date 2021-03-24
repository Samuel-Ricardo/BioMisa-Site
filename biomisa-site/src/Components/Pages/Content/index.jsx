import React from 'react'
import './Content.css'

import DynamicHeader from '../../DynamicHeader';
import Menu from '../../Menu'
import Summary from '../../Summary';
import MenuSection from '../../MenuSection';
import LinkButton from '../../LinkButton';

const ContentPage = (props) => {

  document.title = 'BioMisa - Sistema Nervoso'

  return (

    <>

      <header>
        <DynamicHeader screenName={'Nervous System'} screenMap="Article" perfilImage={props.perfilImage}/>
      </header>

      <div id="Content--Display">

        <section className='Content--Section' style={{ paddingLeft: 30 }}>

        <div className="content-summary--area">
          <Summary>

            <MenuSection title='Nervous System'>

              <LinkButton link='/content#Introduction'> - Introduçao </LinkButton>

            </MenuSection>

          </Summary>
        </div>

          <article id='Nervous--System'>

            <h1 id='Introduction'> Sistema Nervoso </h1>

            <p>

              O sistema nervoso é o sistema do corpo humano encarregado de captar e gerar respostas diante de estímulos que encontramos externamente e internamente, com esse sistema somos capazes de reagir e sentir diferentes sensações e alterações em nosso ambiente. O mesmo é composto por um tipo de tecido, denominado “tecido nervoso”, o qual possui como tipo celulares, os neurônios e as chamadas células da glia. Os neurônios são responsáveis pela propagação de impulsos nervosos e têm como partes básicas o corpo celular, onde se encontra: O núcleo; Os axônios e os dendritos.

            </p>

            <p>

              <h3 id='system--division'> O sistema nervoso é dividido em duas partes </h3>

              <ul>
                <li>Sistema nervoso central: formado pelo encéfalo e medula espinhal</li>

                <li>Sistema nervoso periférico: formado pelos nervos, gânglios e terminações nervosas.</li>
              </ul>

            </p>

          </article>

        </section>
        <Menu></Menu>
      </div>

    </>

  )
}

export default ContentPage;
