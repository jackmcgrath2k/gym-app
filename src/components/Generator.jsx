import React from 'react'
import SectionWrap from './SectionWrap'
import Slider from './Slider'

function Header(props) {
  const {index, title, description} = props
  return (
    <div>
      <div>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default function Generator() {
  return (
    
      <SectionWrap header={"STRATEGY"} title={"MAP SELECT"}>
        <Slider></Slider>
      </SectionWrap>
    
  )
}
