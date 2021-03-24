import React from 'react';
import './Bolder.css';

export default (props) => {

  return (
    <span style={{
      fontWeight: 'bolder'
    }}> {props.children} </span>
  )
}
