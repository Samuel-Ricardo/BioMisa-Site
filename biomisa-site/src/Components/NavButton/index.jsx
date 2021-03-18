import React from 'react'
import "./NavButton.css"

import { NavLink } from 'react-router-dom'

export default (props) => {


  return (

    <div className='nav-button'>
      <NavLink to={props.link} > {props.children} </NavLink>
    </div>
  )
}


