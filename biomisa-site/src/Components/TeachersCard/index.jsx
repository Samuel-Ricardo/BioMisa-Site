import React from 'react'
import './TeacherCard.css'

export default (props) => {

  let allow = ""

  if (props.video === true) {

    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  }

  return (

    <div className="Teacher-Card">

      <section className="TeacherCard--Iframe">


          <iframe src={props.link} allow={allow} allowfullscreen>
          </iframe>
      

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
