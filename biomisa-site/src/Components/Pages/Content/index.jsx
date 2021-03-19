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

      <div className="Content--Display">

      <section className='Content--Section' style={{ paddingLeft: 30 }}>

        <article>

            <p>
              O sistema nervoso é o sistema do corpo humano encarregado de captar e gerar respostas diante de estímulos que encontramos externamente e internamente, com esse sistema somos capazes de reagir e sentir diferentes sensações e alterações em nosso ambiente. O mesmo é composto por um tipo de tecido, denominado “tecido nervoso”, o qual possui como tipo celulares, os neurônios e as chamadas células da glia. Os neurônios são responsáveis pela propagação de impulsos nervosos e têm como partes básicas o corpo celular, onde se encontra: O núcleo; Os axônios e os dendritos.

              O sistema nervoso é dividido em duas partes:
              Sistema nervoso central: formado pelo encéfalo e medula espinhal
              Sistema nervoso periférico: formado pelos nervos, gânglios e terminações nervosas.

              Sobre o sistema nervoso central temos:

              Células da Glia: Estima-se que haja no SNC 10 células glia para cada neurônio, mas devido ao seu reduzido tamanho, elas ocupam a metade do volume do tecido nervoso. Elas diferem em forma e em funções, são elas:

              - Oligodendrócitos: São responsáveis pela produção da bainha de mielina e possuem a função de isolante elétrico para os neurônios do SNC. Possuem prolongamentos que se enrolam ao redor dos axônios, produzindo a bainha de mielina.

              - Astrócitos: Estas células ligam os neurônios aos capilares sanguíneos e a pia-máter. Podem influenciar a atividade e a sobrevivência dos neurônios, devido à sua capacidade de controlar constituintes do meio extracelular, absorver excessos localizados de neurotransmissores e sintetizar moléculas neuroativas.

              - Células de Schwann: Possuem a mesma função dos oligodendrócitos, no entanto, se localizam ao redor dos axônios do sistema nervoso periférico.

              - Células ependimárias: São células epiteliais colunares que revestem os ventrículos do cérebro e o canal central da medula espinhal. Em algumas regiões, estas células são ciliadas, facilitando a movimentação do líquido cefalorraquidiano.

              - Micróglia: Estas células são pequenas e alongadas, com prolongamentos curtos e irregulares. São fagocitárias e derivam de precursores que alcançam a medula óssea através da corrente sanguínea, representando o sistema mononuclear fagocitário do SNC.

              Encéfalo: Ele está localizado na caixa craniana e tem três órgãos centrais: Cérebro, cerebelo e tronco encefálico.
              Cérebro: Representa o órgão mais importante do sistema nervoso, também é o órgão que mais ocupa o encéfalo e é dividido entre hemisfério esquerdo e direito.
              Assim, a camada mais externa do cérebro e cheia de reentrâncias, chama-se córtex cerebral, o responsável pelos nossos sentidos: pensamento, visão, audição, tato, paladar, fala, escrita, etc.
              Medula Espinhal: A medula espinhal é um cordão de tecido nervoso localizado                      dentro da coluna vertebral na parte superior e está conectada no tronco encefálico
              sua principal função é guiar os impulsos do corpo inteiro para o cérebro e conduzir os atos involuntários chamados de reflexo


              O SNP é constituído por nervos e gânglios. Eles são os responsáveis por interligar o SNC às partes do corpo.

              Os nervos correspondem a feixes de fibras nervosas envolvidas por tecido conjuntivo. Eles são responsáveis por fazer a união do SNC a outros órgãos periféricos e pela transmissão dos impulsos nervosos.

              Os nervos apresentam a seguinte divisão:

              Nervos Espinhais: compostos por 31 pares, são os que fazem conexão com a medula espinhal. Estes nervos são responsáveis por inervar o tronco, os membros e algumas regiões específicas da cabeça.

              Nervos Cranianos: compostos por 12 pares, são os que fazem conexão com o encéfalo. São estes nervos que inervam as estruturas da cabeça e do pescoço.
              Os nervos apresentam os seguintes tipos:

              Nervos Aferentes (Sensitivos): enviam sinais da periferia da corpo para o sistema nervoso central. Este tipo de nervo é capaz de captar estímulos como o calor e a luz, por exemplo.
              Nervos Eferentes (Motores): enviam sinais do sistema nervoso central para os músculos ou glândulas.
              Nervos Mistos: formados por fibras sensoriais e fibras motoras, por exemplo, os nervos raquidianos.

              Os gânglios nervosos são aglomerados de neurônios situados fora do sistema nervoso central, espalhados pelo corpo. É comum eles formarem uma estrutura esférica.


              O SNP (Sistema nervoso periférico) é dividido em sistema nervoso somático e sistema nervoso autônomo.

              Sistema Nervoso Somático: regula as ações que estão sob o controle da nossa vontade, ou seja, ações voluntárias. Atua sob a musculatura esquelética de contração voluntária.

              Sistema Nervoso Autônomo: atua de modo integrado com o sistema nervoso central. Geralmente, exerce o controle de atividades que independem da nossa vontade, ou seja, ações involuntárias como as atividades realizadas pelos órgãos internos. Atua sob a musculatura lisa e cardíaca.

              O Sistema Nervoso Autônomo tem como função regular as atividades orgânicas, garantindo a homeostase do organismo. Ele apresenta duas subdivisões:

              Sistema Nervoso Simpático que estimula o funcionamento dos órgãos; é formado pelos nervos espinhais da região torácica e lombar da medula. Os principais neurotransmissores liberados são a noradrenalina e a adrenalina.

              Sistema Nervoso Parassimpático que inibe o funcionamento dos órgãos; é formado pelos nervos cranianos e espinhais das extremidades da medula. O principal neurotransmissor liberado é a acetilcolina.

            </p>

        </article>


      </section>

      <div className='content--menu' onLoad={() => updateHeigth}>
          <Menu></Menu>
      </div>


      </div>
    </>

  )
}

export default ContentPage;
