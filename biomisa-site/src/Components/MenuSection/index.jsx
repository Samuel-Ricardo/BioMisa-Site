import React from 'react';
import './MenuSection.css';

const MenuSection = (props) => {

  return (

    <section className='menu--section'>
      <h2>{props.title}</h2>

      <div className='section--itens'>

        {props.children}

      </div>
    </section>
  )
}

export default MenuSection;
