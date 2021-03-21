import React from 'react'
import './Menu.css'

import NavButton from '../NavButton'

export default (props) => {



  return (

    <nav className="Menu">

      <section>
        <h2>Pages</h2>

        <div/>

        <div className='section--item'>
          <NavButton link='/'> Home Page </NavButton>

          <NavButton link='/content'> Content </NavButton>

          <NavButton link='/Credits'> Credits </NavButton>
        </div>
      </section>

      {props.children}

    </nav>
  )
}
