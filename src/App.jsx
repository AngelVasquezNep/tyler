import React, { Component } from 'react';
import AppContainer from './components/AppContainer'
import Cuadrado from './components/Cuadrados'
import { numRandom } from './services/random'
import llenarArray from './services/llenarArray'


class App extends Component {

  state = {
    nivel: 0,
    cuadradoSelected: 0,
    cuadrados: new Array(0),
    puntajeActual: 0,
    color: {
      h: numRandom(0,359),
      s: numRandom(10,90),
      l: numRandom(10,90),
      lRandom: numRandom(10,90)
    }
  }

  componentDidMount () {
    this.nextLevel()
  }

  nextLevel = () => {
    this.setState({
      color: {
        h: numRandom(0,359),
        s: numRandom(10,90),
        l: numRandom(10,90),
        lRandom: numRandom(10,90)
      }
    })

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
        nivel: 1,
        cuadradoSelected: numRandom(4, 1),
        cuadrados: llenarArray( 4, 0, [] )
      })
      console.log('Error')
    }
  }

  render() {
    return (
      <AppContainer>
        <div>
          <div className="Cuadrado-tablero">
            <p> Nivel: {this.state.nivel} </p>
            <p> CuadradoSelected: {this.state.cuadradoSelected} </p>
            <p> Cuadrado: {this.state.cuadrados.length} </p>
            <p> Puntaje Actual: {this.state.puntajeActual} </p>
          </div>
          <div>
            <div className="Cuadrado-container"
                style={{ gridTemplateColumns: `repeat( ${this.state.nivel + 1} , auto)` }}
                >
              {
                this.state.cuadrados.map((item, index)=>{
                  return <Cuadrado id={item}
                  cuadradoSelected = {this.state.cuadradoSelected}
                  color = { this.state.color }
                  key={index}
                  handleClick = {this.handleClickCuadrado}
                  />
                })
              }
            </div>
          </div>
        </div>
      </AppContainer>
    );
  }
}

export default App;
