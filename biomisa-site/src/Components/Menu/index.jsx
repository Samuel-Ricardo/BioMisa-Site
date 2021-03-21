import React from 'react'
import './Menu.css'

import NavButton from '../NavButton'
import MenuSection from '../MenuSection'

export default (props) => {



  return (

    <nav className="Menu">

      <MenuSection title='Pages'>

        <NavButton link='/'> Home Page </NavButton>

        <NavButton link='/content'> Content </NavButton>

        <NavButton link='/Credits'> Credits </NavButton>

      </MenuSection>

      


      {props.children}

    </nav>
  )
}
