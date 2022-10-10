import React from 'react'
import style from './Contenido.module.scss'

const Contenido = (props) => {
  return (
    <section>
        <div className={style.container}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    </section>
  )
}

export default Contenido