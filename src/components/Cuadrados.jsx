import React, {Component} from 'react'

class Cuadrados extends Component {

  handleClick = () => {
    this.props.handleClick(this.props.id)
  }

  render() {
    return(
    <div className="Cuadrado" onClick = {this.handleClick} >
      <p> {this.props.id} </p>
    </div>
    )
  }
}


export default Cuadrados