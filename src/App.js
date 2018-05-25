import React, { Component } from 'react';
import { colorRandom, numRandom } from './services/random'
class App extends Component {

  
  state = {
    nivel: 0,
    color: {
      h: numRandom(0,359),
      s: numRandom(10,90),
      l: numRandom(10,90)
    }
  }

  cuadrados = new Array[ Math.pow((this.state.nivel + 1), 2)]

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
  }

  handleClick = ev => {

  }

  render() {
    return (
      <div style = {this.backgroundColor} >
        <button onClick={this.handleClick}> Hola </button>
        <p> Nivel: {this.state.nivel} </p>
        <p> Cuadrados: {this.state.cuadrados} </p>

        {
          
        }

      </div>
    );
  }
}

export default App;
