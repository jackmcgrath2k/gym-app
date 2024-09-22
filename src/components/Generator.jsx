import React from 'react'
import SectionWrap from './SectionWrap'

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
    
      <SectionWrap header={"VALOSTRAT"} title={['It\'s ', 'Time']}>
       adsadfadf
      </SectionWrap>
    
  )
}
