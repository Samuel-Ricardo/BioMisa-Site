import React from 'react'
import { Link } from 'react-router-dom'
import './LinkButton.css'

export default (props) => {

  return (
    <div className='Link-Button'>

      <p><Link to={props.link} className='Button-link' > {props.children} </Link></p>

      <div className="Link-Button--border-bar"></div>
    </div>
  )
}
