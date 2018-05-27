import React, { Component } from 'react';
import Cuadrado from './components/Cuadrados'
import { numRandom } from './services/random'
import llenarArray from './services/llenarArray'
import './css/AppContainer.css'


class App extends Component {

  state = {
    nivel: 0,
    cuadradoSelected: 0,
    cuadrados: new Array(0),
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
      nivel: prevState.nivel + 1,
    }))

    this.setState( (prevState, props) => ({
      cuadrados: llenarArray( Math.pow((prevState.nivel+1),2), prevState.cuadrados.length, prevState.cuadrados ),
    }))

    this.setState((prevState, props)=>({
      cuadradoSelected: numRandom(prevState.cuadrados.length, 1)
    }))
    
  }

  handleClick = ev => {
    this.nextLevel()
  }

  handleClickCuadrado (id) {
    console.log("ID: " + id)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> nextLevel </button>
        <p> Nivel: {this.state.nivel} </p>
        <p> CuadradoSelected: {this.state.cuadradoSelected} </p>
        <p> Cuadrado: {this.state.cuadrados.length} </p>

        <div className="Cuadrado-container"
             style={{ gridTemplateColumns: `repeat( ${this.state.nivel + 1} , 1fr)` }}
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
    );
  }
}

export default App;
