const llenarArray = (newSize, oldSize, oldArray) => {
  for (oldSize; oldSize < newSize; oldSize++ ) {
    oldArray.push(oldSize+1)
  }
  return oldArray
}

export default llenarArray