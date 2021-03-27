import React from 'react'
import './TeacherCard.css'

export default (props) => {


  return (

    <div className="Teacher-Card">

      <section className="TeacherCard--Iframe">

        <a href={props.link} about='_blank'>
          <iframe src={props.link}>
          </iframe>
        </a>

      </section>

      <section className="TeacherCard--Details">

        <h1 className="TeacherCard--Name">{props.name}</h1>

        <p className='TeacherCard--Title'>{props.title}</p>

        <section calssName='TeacherCard--contact'>
          {props.contact}
        </section>
      </section>

    </div>

  )
}
