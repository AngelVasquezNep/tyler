 export const llenarArray = (newSize, oldSize, oldArray) => {
          // let object = oldArray
          for (oldSize; oldSize < newSize; oldSize++ ) {
            // object.push(oldSize)
            oldArray.push(oldSize)
          }
          // return object
          return oldArray
        }