import React, { Component } from 'react';
import Cuadrado from './components/Cuadrados'
import { colorRandom, numRandom } from './services/random'
import llenarArray from './services/llenarArray'
import './css/AppContainer.css'


class App extends Component {

  state = {
    nivel: 0,
    cuadrados: new Array(0),
    color: {
      h: numRandom(0,359),
      s: numRandom(10,90),
      l: numRandom(10,90)
    }
  }

  // cuadrado = new Array(Math.pow((this.state.nivel + 1),2))
  // cuadrado = [1,2,3,4]
  // cuadrado= new Array(4)

  backgroundColor = {
    backgroundColor: colorRandom(this.state.color.h, this.state.color.s, this.state.color.l)
  }

  componentDidMount () {
    this.nextLevel()
  }
  
  nextLevel = () => {
    this.setState( (prevState, props) => ({
      nivel: prevState.nivel + 1,
    }))
    this.setState( (prevState, props) => ({
        cuadrados: llenarArray( Math.pow((prevState.nivel+1),2), prevState.cuadrados.length, prevState.cuadrados )
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
      <div style = {this.backgroundColor} >
        <button 
              style={{padding:'10px 20px', background: "#1ff", border:'none', margin: '30px'}}
              onClick={this.handleClick}> nextLevel </button>
        <p> Nivel: {this.state.nivel} </p>
        <p> Cuadrado: {this.state.cuadrados.length} </p>

        <div className="Cuadrado-container">
          {
            this.state.cuadrados.map((item, index)=>{
              return <Cuadrado id={item} 
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
