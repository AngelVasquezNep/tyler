import React from 'react'
import { createPortal } from 'react-dom'

class Modal extends React.Component {
  render () {
    return createPortal(
      this.props.children, 
      document.getElementById('modal')
    )
  }
}

export default Modal