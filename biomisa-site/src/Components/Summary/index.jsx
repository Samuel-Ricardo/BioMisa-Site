import React from 'react'
import './Summary.css'

const Summary = (props) => {

  return (
    <nav className='Summary'>
      <div className="Summary--item">
        {props.children}
      </div>
    </nav>
  )
}

export default Summary
