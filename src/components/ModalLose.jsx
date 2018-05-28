import React,{Component} from 'react'

class ModalLose extends Component {
  
  handleSubmit = ev => {
    ev.preventDefault()
  }

  render () {
    return(
      <div>
        <h1>Suerte para la próxima</h1>
        <h2>Puntaje Final: { this.props.puntaje }</h2>
        <form onSubmit = {this.handleSubmit}>
          <input type="text" name="user" id="user" required/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default ModalLose