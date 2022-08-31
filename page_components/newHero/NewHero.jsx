import style from './NewHero.module.scss'

const NewHero = ({title}) => {
  return (
    <section className={style.section}>
        <h2>{title}</h2>
    </section>
  )
}

export default NewHero