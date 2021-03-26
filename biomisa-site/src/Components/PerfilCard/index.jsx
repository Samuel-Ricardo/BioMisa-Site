import React, { useEffect, useState } from 'react'
import './PerfilCard.css'


import Images from '../../Images'
import LinkButton from '../LinkButton'
import Facebook from '../SVG/Facebook'


export default (props) => {

  /*
  let imageDirection = props.direction
  let detailsDirection = 'none'

  if (imageDirection === undefined || imageDirection === null || imageDirection === '' || imageDirection === " ") {

    imageDirection = 'right'
  }

  if (imageDirection === 'left') {

    detailsDirection = 'right'
  }
*/
  return (

    <div className="Perfil-Card">

      <img src={props.perfilImage} alt="Samuel"/>

      <section className="Card-Details">

      <h3 className='Card-Title'>
        {props.cardTitle}
      </h3>

      <p className="Card-Function">
      || Desenvolvedor Full Stack ||
      </p>



      <section className='Card-Description'>

        <p>
          Jovem desenvolvedor super apaixonado pela arte de transformar sonhos em realidade e café em código.
        </p>

      </section>


      <section className="Card--Skill-List">
        <h2>
          Skills
        </h2>

        <div className="Skill-List">
          <p className="Skill">
            || Web || Mobile || Desktop ||
          </p>

          <p className="Skill">
            || JavaScript || Java || Elixir ||
          </p>
        </div>
      </section>

      <section className="Card-contact"></section>

        {props.contact}

      </section>

    </div>

  )
}
