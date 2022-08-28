import style from './title.module.scss'

const Title = ({title,content}) => {
    return(
        <div className={style.title_div}>
            <h2> {title} </h2>
            <p> {content} </p>
        </div>
    );
}

export default Title