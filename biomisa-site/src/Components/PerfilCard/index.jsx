import React from 'react'
import './PerfilCard'

export default () => {


  return (

    <div className="Perfil-Card">

      <img src={Images.SAMUEL} alt="Samuel" />

      <section className="Card-Details">

      <h3 className='Card-Title'>
        Samuel Ricardo
      </h3>

      <p className="Card-Function">
      || Desenvolvedor Full Stack ||
      </p>



      <section className='Card-Description'>

        <p>
          Jovem desenvolvedor super apaixonado pela arte de transformar sonhos em realidade e café em código.
        </p>

      </section>


      <section className="Card--Skill-List">
        <h2>
          Skills
        </h2>

        <div className="Skill-List">
          <p className="Skill">
            || Web || Mobile || Desktop ||
          </p>

          <p className="Skill">
            || JavaScript || Java || Elixir ||
          </p>
        </div>
      </section>

      <section className="Card-contact"></section>

      <LinkButton>
        <Facebook color="#4ce300" width='40' heigth='40'/>
      </LinkButton>

      </section>

    </div>

  )
}
