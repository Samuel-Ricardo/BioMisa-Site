import React from 'react';
import './Italic.css';

export default (props) => {

  return (
    <span style={{
      fontStyle: 'italic'
    }}> {props.children} </span>
  )
}
