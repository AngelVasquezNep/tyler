import React, {Component} from 'react'
import {colorRandom} from '../services/random'
import '../css/Cuadrados.css'

class Cuadrados extends Component {

  handleClick = () => {
    this.props.handleClick(this.props.id)
  }

  render() {
    return(
    <div className="Cuadrado"
         onClick = {this.handleClick}
         style = { this.props.id === this.props.cuadradoSelected ? {backgroundColor: colorRandom(this.props.color.h, this.props.color.s, this.props.color.l)} : {backgroundColor: colorRandom(this.props.color.h, this.props.color.s, this.props.color.lRandom)} }
         >
      <p> {this.props.id} </p>
    </div>
    )
  }
}


export default Cuadrados