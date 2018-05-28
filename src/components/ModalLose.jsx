import React,{Component} from 'react'
import Top5 from './Top5'
import burbuja from '../services/burbuja'
import '../css/ModalLose.css'

class ModalLose extends Component {

  state = {
    textValue: ''
  }

  handleSubmit = ev => {
    ev.preventDefault()
    let top5 = Object.assign([],this.props.top5)
    top5.push({name: this.state.textValue, puntaje: this.props.puntaje})

    this.props.handleClick(burbuja(top5))

    this.setState({
      textValue: ''
    })
  }

  textChange = (element) => {
    this.setState({
      textValue: element.target.value
    })
  }

  setRef = element => {
    this.text = element
  }

  render () {
    return(
      <div className="ModalLose--container">
        <h1>Suerte para la próxima</h1>

        <Top5
          isShow = {this.props.isShowTop5}
          handleClick = {this.props.handleClickShowTop5}
          top5 = {this.props.top5}
        />

        <h2>Puntaje Final: { this.props.puntaje }</h2>
        <form onSubmit = {this.handleSubmit}>
          <input className = 'ModalLose--input ModalLose--inputText'
                 type="text"
                 onChange = {this.textChange}
                 ref = {this.setRef}
                 name="user"
                 value = {this.state.textValue}
                 id="user" 
                 required
                 />
          <button className="ModalLose--input ModalLose--inputButton" type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default ModalLose