import style from './NewHero.module.scss'

const NewHero = ({title}) => {
  return (
    <section className={style.section}>
        <h1>{title}</h1>
    </section>
  )
}

export default NewHero