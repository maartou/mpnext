import style from './title2.module.scss'

const Title2 = ({small, title}) =>{
    return(
        <div className={style.title2}>
            <small>{small}</small>
            <h2>{title}</h2>
        </div>
    );
}

export default Title2;