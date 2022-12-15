import React from 'react'
import Image from 'next/image'

const PortfolioItem = ({img, alt, titulo, enlace}) => {
  return (
    <article className='border border-white lg:h-[20rem] 2xl:h-[26rem]'>
        {/* Contenedor de las fotos  */}
        <div>
            <Image src={img} alt={alt} />
        </div>

        {/* Titulo y enlace  */}
        <div className='p-4 flex flex-col gap-3'>
            <h3 className='uppercase text-xl tracking-widest'>{titulo}</h3>
            <a href={enlace} target="_blank" rel='noreferrer' className="border border-primary-100 py-3 px-5 w-max rounded-lg hover:bg-primary-100 transition-colors">Visitar sitio</a>
        </div>
    </article>
  )
}

export default PortfolioItem