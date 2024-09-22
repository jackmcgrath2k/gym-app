import React from 'react'
import SectionWrap from './SectionWrap'
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

export default function GeneratorBoard() {
  return (
    
      <SectionWrap title={"THE PLAYING FIELD"}>
        
        {Object.keys(AGENTS).map((type, typeIndex) =>{
          return (
            <button key={typeIndex}>
              <p>{type}</p>
            </button>
          )
        })}
      </SectionWrap>
    
  )
}
