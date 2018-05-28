import React from 'react'
import '../css/ModalLose.css'
import '../css/Top5.css'

const Top5 = props => (
  <div className="Top5--container">
    <div className="Top5"
      style = {{ height: props.isShow ? '350px' : '0' }}
    >
    <h2> Top 5 </h2>
    {
      props.top5.map((item, index)=>{
        return <p key = {index}> {index + 1} - Name: {item.name}  Puntaje: {item.puntaje} </p>
      })
    }
    </div>
    
    <div className="Top5--close" >
      <button 
        className = "ModalLose--input"
        onClick = {props.handleClick} > { props.isShow ? 'Ocultar Top5' : 'Ver Top5' } </button>
    </div>
  
  </div>
)

export default Top5