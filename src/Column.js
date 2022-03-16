import React from 'react'
import Circle from './Circle'

export default function Column(props) {
  const style = `backgroundColor:'blue'`

      const {playerCol, i} = props
      return playerCol.map((element, index)=>{
        return <div key={index} style={{style}}>  
        <Circle player={element} />
               </div>
          })}
