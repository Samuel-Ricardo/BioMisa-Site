import React from 'react'
import './Menu.css'

import NavButton from '../NavButton'

export default (props) => {

  return (

    <nav className="Menu">

      <p><NavButton link='/'> Home Page </NavButton></p>

      <p><NavButton link='/content'> Content </NavButton></p>

    </nav>
  )
}
