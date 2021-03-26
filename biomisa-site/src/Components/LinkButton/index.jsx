import React from 'react'
import { Link } from 'react-router-dom'
import './LinkButton.css'

export default (props) => {

  return (
    <div className='Link-Button'>

      <img src={props.icon} className='Link-Button--icon' />

      <p><a href={props.link} > {props.children} </a></p>

      <div className="Link-Button--border-bar"></div>
    </div>
  )
}
