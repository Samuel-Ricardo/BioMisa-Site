import React from 'react';
import './MenuSection.css';

const MenuSection = (props) => {

  return (

    <section id='menu--section'>
      <h2>{props.title}</h2>

      <div className='section--item'>

        {props.children}

      </div>
    </section>
  )
}

export default MenuSection;
