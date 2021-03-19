import React from 'react'
import './StyledTitle.css'

const StyledTittle = (props) => {



  return (

    <h1 className='styled-title'> {props.children} </h1>

  )
}

export default StyledTittle;
