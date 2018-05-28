import React from 'react'
import './modal.css'

function Modal (props) {
  return (
    <div className="Modal">
      { props.children }
      {
        props.botonVisible ? <button className="Modal-close" onClick={props.handleClick} >&times;</button> : null
      }
    </div>
  )
}

export default Modal