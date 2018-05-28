import React from 'react'

const Top5 = props => (
  <div className="Top5">
    <h2> top 5 </h2>
    {
      props.top5.map((item, index)=>{
        return <p key = {index}> {index + 1} - Name: {item.name}  Puntaje: {item.puntaje} </p>
      })
    }
  </div>
)

export default Top5