import React from 'react';
import './Bold.css';

export default (props) => {

  return (
    <span style={{
      fontWeight: 'bold'
    }}> {props.children} </span>
  )
}
