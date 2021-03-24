import React from 'react';
import './Content.css';


import DynamicHeader from '../../DynamicHeader';

import Summary from '../../Summary';

import Menu from '../../Menu';
import MenuSection from '../../MenuSection';
import LinkButton from '../../LinkButton';

import Bold from '../../TextStyle/Bold'
import Bolder from '../../TextStyle/Bolder'
import Italic from '../../TextStyle/Italic'

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

            <section className="article-section--intro">

            <h1 id='Introduction'> Sistema Nervoso </h1>

              <p>

                O sistema nervoso é o sistema do corpo humano encarregado de captar e gerar respostas diante de estímulos que encontramos externamente e internamente, com esse sistema somos capazes de reagir e sentir diferentes sensações e alterações em nosso ambiente. O mesmo é composto por um tipo de tecido, denominado “tecido nervoso”, o qual possui como tipo celulares, os neurônios e as chamadas células da glia. Os neurônios são responsáveis pela propagação de impulsos nervosos e têm como partes básicas o corpo celular, onde se encontra: O núcleo; Os axônios e os dendritos.

              </p>

              <p>

                <h3 id='system--division'> O sistema nervoso é dividido em duas partes </h3>

                <ul>
                  <li> <a href="#SNC"><Bold> Sistema Nervoso Central: </Bold></a> formado pelo encéfalo e medula espinhal</li>

                  <li> <a href="#SNP"><Bold> Sistema Nervoso Periférico: </Bold></a> formado pelos nervos, gânglios e terminações nervosas.</li>
                </ul>

              </p>


            </section>

            <section className="article-section--SNC">

              <h2> O Sistema Nervoso Central é Composto por: </h2>

              <p>

                Células da Glia: Estima-se que haja no SNC 10 células glia para cada neurônio, mas devido ao seu reduzido tamanho, elas ocupam a metade do volume do tecido nervoso. Elas diferem em forma e em funções, são elas:

              </p>

              <section className="glia--section">

                <p>

                  Células da Glia: Estima-se que haja no SNC 10 células glia para cada neurônio, mas devido ao seu reduzido tamanho, elas ocupam a metade do volume do tecido nervoso. Elas diferem em forma e em funções, são elas:

                </p>

                <p>

                  - Oligodendrócitos: São responsáveis pela produção da bainha de mielina e possuem a função de isolante elétrico para os neurônios do SNC. Possuem prolongamentos que se enrolam ao redor dos axônios, produzindo a bainha de mielina.

                </p>

                <p>

                  - Oligodendrócitos: São responsáveis pela produção da bainha de mielina e possuem a função de isolante elétrico para os neurônios do SNC. Possuem prolongamentos que se enrolam ao redor dos axônios, produzindo a bainha de mielina.

                </p>

                <p>

                  - Células de Schwann: Possuem a mesma função dos oligodendrócitos, no entanto, se localizam ao redor dos axônios do sistema nervoso periférico.

                </p>

                <p>

                  - Células ependimárias: São células epiteliais colunares que revestem os ventrículos do cérebro e o canal central da medula espinhal. Em algumas regiões, estas células são ciliadas, facilitando a movimentação do líquido cefalorraquidiano.

                </p>

                <p>

                  - Micróglia: Estas células são pequenas e alongadas, com prolongamentos curtos e irregulares. São fagocitárias e derivam de precursores que alcançam a medula óssea através da corrente sanguínea, representando o sistema mononuclear fagocitário do SNC.

                </p>

              </section>

              <p>

                Encéfalo: Ele está localizado na caixa craniana e tem três órgãos centrais: Cérebro, cerebelo e tronco encefálico.

              </p>

              <p>

                Cérebro: É a sede do intelecto humano. Ele possui dois hemisférios que se conectam pelo corpo caloso.

              </p>

            </section>


          </article>

        </section>
        <Menu></Menu>
      </div>

    </>

  )
}

export default ContentPage;
