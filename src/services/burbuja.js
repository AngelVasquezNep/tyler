export default (burbuja) => {
  let apuntador1 = 0, apuntador2, contadorVueltas = 0, aux = {}

  while ( burbuja.length > contadorVueltas ) {

    for ( apuntador2 = 1; apuntador2 < burbuja.length; apuntador2++ ) {
      
      if ( burbuja[apuntador2].puntaje > burbuja[apuntador1].puntaje ) {
        aux = burbuja[apuntador1]
        burbuja[apuntador1] = burbuja[apuntador2]
        burbuja[apuntador2] = aux
       }
       apuntador1++
    }
    apuntador1 = 0
    apuntador2 = 1
    contadorVueltas++
    console.log('Vuelta')
  }
  return burbuja
  
}