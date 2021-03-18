import React from 'react'
import './Menu.css'

import NavButton from '../NavButton'

export default (props) => {

  return (

    <nav className="Menu">

      <h2>Pages</h2>

      <div/>

      <div className='pages'>
        <p><NavButton link='/'> Home Page </NavButton></p>

        <p><NavButton link='/content'> Content </NavButton></p>

        <p><NavButton link='/Credits'> Credits </NavButton></p>
      </div>

    </nav>
  )
}
