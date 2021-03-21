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

              <p>

                

              </p>

          </article>

        </section>
        <Menu></Menu>
      </div>


    </>

  )
}

export default ContentPage;
