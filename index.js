// Add your functions here
function map(array, func) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]))
  }
  return newArray
}

function reduce(array, func, startingPoint = 0) {
  let result = startingPoint
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number')
      result += array[i]
    else if (array[i] === false){
      result = false
    }
    else if (array[i] === true){
      result = true
    }
  }
  return result
}
