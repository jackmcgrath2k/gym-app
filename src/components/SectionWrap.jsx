import React from 'react'

export default function SectionWrap(props) {

    const {children, header, title} = props

  return (
    <section className="min-h-screen flex flex-col gap-10">
        <div className="bg-gradient-to-r from-red-950 from-0% via-stone-950 via-14% to-stone-950 to-90%  py10 flex flex-col gap-4 justify-center items-center">
            <p className="uppercase font-bold">{header}</p>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{title}</h2>
            <p className='text-red-800'>EPISODE 9 <span className='text-white font-extralight'>ACT 2</span></p>
        </div>
        {children}
    </section>
  )
}
