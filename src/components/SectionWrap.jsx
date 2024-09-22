import React from 'react'

export default function SectionWrap(props) {

    const {children, header, title} = props

  return (
    <section className="min-h-screen flex flex-col gap-10">
        <div className="bg-gradient-to-r from-red-950 from-0% via-stone-950 via-14% to-stone-950 to-90%  py10 flex flex-col gap-4 justify-center items-center">
            <p className="uppercase font-bold">{header}</p>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{title}</h2>
        </div>
        {children}
    </section>
  )
}
