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
        {props.userTitle}
      </p>



      <section className='Card-Description'>

        {props.children}

      </section>


      <section className="Card--Skill-List">
        <h2>
          Skills
        </h2>

        <div className="Skill-List">
          {props.skillList}
        </div>
      </section>

      <section className="Card-contact">

      {props.contact}

      </section>

      </section>

    </div>

  )
}
