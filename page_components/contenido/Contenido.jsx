import React from 'react'
import style from './Contenido.module.scss'

const Contenido = (props) => {
  return (
    <article className={style.article}>
        <div className={style.container}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    </article>
  )
}

export default Contenido