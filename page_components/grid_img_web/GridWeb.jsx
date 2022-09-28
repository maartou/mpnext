import Image from 'next/image';
import style from './GridWeb.module.scss';

import gym from '../../public/img/portfolio/Gym.png'
import venezuela from '../../public/img/portfolio/venezuela.jpg'
import hollow from '../../public/img/portfolio/hollow.png'
import jh from '../../public/img/portfolio/jh.png'
import venecia from '../../public/img/portfolio/venecia.jpg'
import jordans from '../../public/img/portfolio/Jordans.png'

const GridWeb = () => {
  return (
    <div className={style.grid}>
        <div className={style.img_container}>
          <Image src={gym} alt="Gym landing page" placeholder="blur" />
        </div>

        <div className={style.img_container}>
          <Image src={venezuela} alt="Venezuela landing page" placeholder="blur" />
        </div>

        <div className={style.img_container}>
          <Image src={hollow} alt="Hollow Knight landing page" placeholder="blur" />
        </div>

        <div className={style.img_container}>
          <Image src={jh} alt="Juan Hernandez" placeholder="blur" />
        </div>

        <div className={style.img_container}>
          <Image src={venecia} alt="Venecia landing page" placeholder="blur" />
        </div>

        <div className={style.img_container}>
          <Image src={jordans} alt="Jordans landing page" placeholder="blur" />
        </div>
    </div>
  )
}

export default GridWeb