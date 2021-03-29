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

              <LinkButton link='/content#system--division'> - Divisão do Sistema Nervoso </LinkButton>

              <LinkButton link='/content#glia--section'> - Células da Glia </LinkButton>

              <LinkButton link='/content#Brain-Section'> - Região Cerebral </LinkButton>

              <LinkButton link='/content#nervous-section'> - Nervos </LinkButton>

              <LinkButton link='/content#SNP-Division'> - Divisão do Sistema Nervoso Periférico </LinkButton>

            </MenuSection>

          </Summary>
        </div>

          <article id='Nervous--System'>

            <section className="article-section--intro">

            <h1 id='Introduction'> Sistema Nervoso </h1>

              <p id='intro'>

                O sistema nervoso é o sistema do corpo humano encarregado de captar e gerar respostas diante de estímulos que encontramos externamente e internamente, com esse sistema somos capazes de reagir e sentir diferentes sensações e alterações em nosso ambiente. O mesmo é composto por um tipo de tecido, denominado “tecido nervoso”, o qual possui como tipo celulares, os neurônios e as chamadas células da glia. Os neurônios são responsáveis pela propagação de impulsos nervosos e têm como partes básicas o corpo celular, onde se encontra: O núcleo; Os axônios e os dendritos.

              </p>

              <p>

                <h3 id='system--division'> O sistema nervoso é dividido em duas partes </h3>

                <ul className='list'>
                  <li> <a href="#SNC"><Bold> Sistema Nervoso Central: </Bold></a> formado pelo encéfalo e medula espinhal</li>

                  <li> <a href="#SNP"><Bold> Sistema Nervoso Periférico: </Bold></a> formado pelos nervos, gânglios e terminações nervosas.</li>
                </ul>

              </p>


            </section>

            <section className="article-section--SNC">

              <h2 id='SNC'> O Sistema Nervoso Central é Composto por: </h2>

              <p>

                <Bold>Células da Glia: </Bold>Estima-se que haja no SNC 10 células glia para cada neurônio, mas devido ao seu reduzido tamanho, elas ocupam a metade do volume do tecido nervoso. Elas diferem em forma e em funções, são elas:

              </p>

              <section id="glia--section">

                <p>

                 <Bold> - Oligodendrócitos: </Bold>São responsáveis pela produção da bainha de mielina e possuem a função de isolante elétrico para os neurônios do SNC. Possuem prolongamentos que se enrolam ao redor dos axônios, produzindo a bainha de mielina.

                </p>

                <p>

                  <Bold>- Células de Schwann:</Bold> Possuem a mesma função dos oligodendrócitos, no entanto, se localizam ao redor dos axônios do sistema nervoso periférico.

                </p>

                <p>

                  <Bold>- Células ependimárias:</Bold> São células epiteliais colunares que revestem os ventrículos do cérebro e o canal central da medula espinhal. Em algumas regiões, estas células são ciliadas, facilitando a movimentação do líquido cefalorraquidiano.

                </p>

                <p>

                 <Bold> - Micróglia:</Bold> Estas células são pequenas e alongadas, com prolongamentos curtos e irregulares. São fagocitárias e derivam de precursores que alcançam a medula óssea através da corrente sanguínea, representando o sistema mononuclear fagocitário do SNC.

                </p>

              </section>

              <p>

                <Bold>Encéfalo:</Bold> Ele está localizado na caixa craniana e tem três órgãos centrais: Cérebro, cerebelo e tronco encefálico.

              </p>

              <p>

               <Bold> Cérebro: </Bold> É a sede do intelecto humano. Ele possui dois hemisférios que se conectam pelo corpo caloso.

              </p>

              <section id='Brain-Section' className='section'>

                <p>

                  <Bold>Córtex cerebral:</Bold> Onde se formam os pensamentos conscientes, linguagem, memória, etc. (Hipocampo)

                </p>

                <p>

                 <Bold> Região interna:</Bold> É formada por neurofibras, dendritos e axônios(neurônios).

                </p>

                <p>

                 <Bold> Dendrito: </Bold> Capta as informações.

                </p>

                <p>

                 <Bold> Corpo Celular: </Bold> Interpreta as informações.

                </p>

                <p>

                 <Bold> Bainha de mielina: </Bold> Liga as interpretações até a transmissão delas.

                </p>

                <p>

                 <Bold> Axônios: </Bold> Transmite a informação.

                </p>

              </section>

                <p>

                  <Bold>Medula Espinhal:</Bold> A medula espinhal é um cordão de tecido nervoso localizado dentro da coluna vertebral na parte superior e está conectada no tronco encefálico. Sua principal função é guiar os impulsos do corpo inteiro para o cérebro e conduzir os atos involuntários chamados de reflexo.

                </p>

            </section>

            <section className="article-section--SNP">

              <h1 id='SNP'>Sistema Nervoso Periférico</h1>

              <p>
                O <Bold>SNP</Bold> é constituído por <a href='#nervous-section'><Bold>nervos</Bold></a> e <a href='ganglios'><Bold>gânglios</Bold>.</a> Eles são os responsáveis por interligar o SNC às partes do corpo.
              </p>

              <p>
                Os <Bold>nervos</Bold> correspondem a feixes de fibras nervosas envolvidas por tecido conjuntivo. Eles são responsáveis por fazer a união do SNC a outros órgãos periféricos e pela transmissão dos impulsos nervosos.
              </p>

              <h2>
                Os nervos apresentam a seguinte divisão:
              </h2>

              <section id='nervous-section'>

                <p>

                  <Bold>Nervos Espinhais:</Bold> Ele é composto por 31 pares, e são os que fazem conexão com a medula espinhal. Estes nervos são responsáveis por inervar o tronco, os membros e algumas regiões específicas da cabeça.

                </p>


                <p>

                 <Bold> Nervos Cranianos: </Bold>Composto por 12 pares, são os que fazem conexão com o encéfalo. São estes nervos que inervam as estruturas da cabeça e do pescoço

                </p>

                <p>

                 <Bold> Nervos Aferentes (Sensitivos):</Bold> Enviam sinais da periferia da corpo para o sistema nervoso central. Este tipo de nervo é capaz de captar estímulos como o calor e a luz, por exemplo.

                </p>

                <p>

                  <Bold>Nervos Eferentes (Motores):</Bold> Enviam sinais do sistema nervoso central para os músculos ou glândulas.

                </p>

                <p>

                  <Bold>Nervos Mistos:</Bold> Formados por fibras sensoriais e fibras motoras, por exemplo, os nervos raquidianos.

                </p>

              </section>

              <p id='ganglios'>

                Os<Bold> gânglios nervosos</Bold> são aglomerados de neurônios situados fora do sistema nervoso central, espalhados pelo corpo. É comum eles formarem uma estrutura esférica.

              </p>

              <h2> O SNP (Sistema nervoso periférico) é dividido em sistema nervoso somático e sistema nervoso autônomo. </h2>

              <section id='SNP-Division'>
                <p>

                  <Bold>Sistema Nervoso Somático:</Bold> Tem ações voluntárias. Ex: Músculo estriado esquelético.

                </p>

                <p>

                  <Bold>Sistema Nervoso Autônomo:</Bold> Possui ações involuntárias. Ex: Músculo liso e cardíaco. Atua exclusivamente nos sistemas simpático e parassimpático.

                </p>

                <p>

                  <Bold>Simpático:</Bold> Libera adrenalina; Acelera o coração; Dilata a pupila; Bexiga relaxa.

                </p>

                <p>

                  <Bold>Parassimpático:</Bold> Libera acetilcolina; Desacelera o coração; Contrai a pupila; Bexiga contrai

                </p>
              </section>

            </section>

          </article>

        </section>
        <Menu></Menu>
      </div>

    </>

  )
}

export default ContentPage;
