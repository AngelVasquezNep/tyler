import React, {Component} from 'react'
import {colorRandom} from '../services/random'
import '../css/Cuadrados.css'

class Cuadrados extends Component {

  handleClick = () => {
    this.props.handleClick(this.props.id)
  }

  render() {
    const { id, cuadradoSelected } = this.props
    const {h, s, l, lRandom} = this.props.color
    return(
    <div className="Cuadrado"
         onClick = {this.handleClick}
         style = { id === cuadradoSelected ? {backgroundColor: colorRandom(h, s, l)} : {backgroundColor: colorRandom(h, s, lRandom)} }
         title = { id === cuadradoSelected ? 'Este si' : 'Este no' }
         >
    </div>
    )
  }
}


export default Cuadrados