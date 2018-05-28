import React, { Component } from 'react';
import AppContainer from './components/AppContainer'
import ModalContainer from './components/modal/modalContainer'
import Modal from './components/modal/modal'
import Cuadrado from './components/Cuadrados'
import Top5 from './components/Top5'
import {top5initial} from './services/ApiTop5'
import { numRandom, lightnessRandom } from './services/random'
import llenarArray from './services/llenarArray'
import burbuja from './services/burbuja'
import ModalLose from './components/ModalLose'

class App extends Component {

  state = {
    nivel: 0,
    cuadradoSelected: 0,
    top5: [],
    cuadrados: new Array(0),
    puntajeActual: 0,
    lose: false,
    color: {
      h: numRandom(0,359),
      s: numRandom(10,90),
      l: numRandom(10,90),
      lRandom: numRandom(10,90)
    }
  }

  componentDidMount () {
    this.nextLevel()
    this.setState({
      top5: JSON.parse( localStorage.getItem('top5') ) || burbuja(top5initial)
    })
  }


  setColor = () => {
    this.setState({
      color: {
        h: numRandom(359, 0),
        s: numRandom(90,10),
        l: numRandom(90,10),
        lRandom: lightnessRandom( numRandom(90,10) )
      }
    })
  }

  nextLevel = () => {

    this.setColor()

    this.setState( (prevState, props) => ({
      nivel: prevState.nivel + 1
    }))
    
    this.setState( (prevState, props) => ({
      cuadrados: llenarArray( Math.pow((prevState.nivel+1),2), prevState.cuadrados.length, prevState.cuadrados ),
    }))
    
    this.setState((prevState, props)=>({
      cuadradoSelected: numRandom(prevState.cuadrados.length, 1)
    }))
  }
  
  handleClickCuadrado = (id) => {
    if (this.state.cuadradoSelected === id) {
      this.nextLevel()
      this.setState( (prevState, props) => ({
        puntajeActual: prevState.puntajeActual + 1
      }))
    } else {
      this.setState({
        lose: true,
        nivel: 1,
        cuadradoSelected: numRandom(4, 1),
        cuadrados: llenarArray( 4, 0, [] )
      })
    }
  }

  handleClickSaveModal = (top5) => {
    this.setState({
      top5: top5,
      puntajeActual: 0,
      lose: false
    })
    localStorage.setItem('top5', JSON.stringify(top5))
  }

  handleClickCloseModal = () => {

    this.setColor()

    this.setState({
      puntajeActual: 0,
      lose: false
    })
  } 

  render() {
    const { h, s, l, lRandom } = this.state.color
    return (
      <AppContainer>
        <div>
          <div className="Cuadrado-tablero">
            <p> Nivel: {this.state.nivel} </p>
            <p> Puntaje Actual: {this.state.puntajeActual} </p>
            <span>
            <p> Color principal: { `hsl(${h}, ${s}%, ${l}%)` } </p>
            <p> Color único:  { `hsl(${h}, ${s}%, ${lRandom}%)` } </p>
            </span>
          </div>
          
          <Top5
            top5 = {this.state.top5}
          />

          <div>
            <div className="Cuadrado-container"
                style={{ gridTemplateColumns: `repeat( ${this.state.nivel + 1} , auto)` }}
                >
              {
                this.state.cuadrados.map((item, index)=>(
                  <Cuadrado id={item}
                    cuadradoSelected = {this.state.cuadradoSelected}
                    color = { this.state.color }
                    key={index}
                    handleClick = {this.handleClickCuadrado}
                  />
                ))
              }
            </div>
          </div>
        </div>
        {
          this.state.lose &&
          <ModalContainer>
            <Modal
              botonVisible = {true}
              handleClick = { this.handleClickCloseModal }
              >
              <ModalLose
                handleClick = { this.handleClickSaveModal }
                puntaje = {this.state.puntajeActual}
                top5 = { this.state.top5 }
              />
            </Modal>
          </ModalContainer>
        }

      </AppContainer>
    );
  }
}

export default App;
