import React from 'react'

export default function SectionWrap(props) {

    const {children, header, title, episode, act} = props

  return (
    <section className="flex flex-col">
        <div className="py-10 flex flex-col gap-2 justify-center items-center p-4">
            <p className="uppercase font-bold">{header}</p>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{title}</h2>
            <p className='text-yellow-500'>{episode}</p>
            <p className='text-white font-extralight'>{act}</p>
        </div>
        {children}
    </section>
  )
}
