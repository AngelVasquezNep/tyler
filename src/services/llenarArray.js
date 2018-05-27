const llenarArray = (newSize, oldSize, oldArray) => {
  // let object = oldArray
  for (oldSize; oldSize < newSize; oldSize++ ) {
    // object.push(oldSize)
    oldArray.push(oldSize+1)
    console.log("1")
  }
  // return object
  return oldArray
}

export default llenarArray