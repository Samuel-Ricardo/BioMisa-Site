import React from 'react'
import './TeacherCard.css'

export default (props) => {

  let allow = ""

  if (props.video === true) {

    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  }

  return (

    <div className="Teacher-Card">



      <section className="TeacherCard--Details">

        <h1 className="TeacherCard--Name">{props.name}</h1>

        <p className='TeacherCard--Title'>{props.title}</p>

        <section calssName='TeacherCard--contact'>
          {props.contact}
        </section>
      </section>


      <section className="TeacherCard--Iframe" >

        <a href={props.link} target="_blank" style={{backgroundColor: 'blueviolet'}}>

          {props.video
                ?
                  (
                    <iframe src={props.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen >
                    </iframe>
                  )
                :
                  (
                    <iframe src={props.link} >
                    </iframe>
                  )
          }


        </a>
      </section>



    </div>

  )
}
