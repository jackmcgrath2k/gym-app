import React from 'react'
import SectionWrap from './SectionWrap'
import Slider from './Slider'
import { AGENTS } from '../constants/stratdata'

function Header(props) {
  const {index, title, description} = props
  return (
    <div>
      <div>
        <p>{index}</p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default function Generator() {
  return (
    
    <div className="py-20">
      <SectionWrap header={"LETS TALK STRATEGY"} title={"MAP SELECT"}>
        <Slider></Slider>
      </SectionWrap>
      </div>
    
  )
}
