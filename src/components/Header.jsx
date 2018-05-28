import React from 'react'
import '../css/Header.css'

const Header = props => {

  const { h, s, l, lRandom } = props.color
  return (
    <header className="Header">
      <div className="Cuadrado-tablero">
        <div className="Cuadrado-tablero-nivel"> 
            <p>Nivel: </p> &nbsp; <span> {props.nivel} </span> 
        </div>
        <div className="Cuadrado-tablero-puntaje">
            <p>Puntaje:</p> &nbsp; <span> {props.puntajeActual} </span> </div>
        <div>
          <p> <strong>Color principal:</strong> &nbsp; 
              <span style={{background: `hsl(${h}, ${s}%, ${l}%)`}}>
                { `hsl(${h}, ${s}%, ${l}%)` }
              </span>
          </p>
          <p> <strong>Color único:</strong> &nbsp;
              <span style={{background: `hsl(${h}, ${s}%, ${lRandom}%)`}} >
                { `hsl(${h}, ${s}%, ${lRandom}%)` }
              </span> 
          </p>
        </div>
      </div>
    </header>
  )
}


export default Header