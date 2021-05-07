import { swap } from "./helpers"

const insertionsort = (array, position, arraySteps, colorSteps) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice()

  for (let i = 1; i < array.length; i++) {
    let key = array[i]

    let j = i - 1
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      j = j - 1
      array[j + 1] = key
      arraySteps.push(array.slice())
      colorKey[j] = 1
      colorKey[j + 1] = 1
      colorSteps.push(colorKey.slice())
      colorKey[j] = 0
      colorKey[j + 1] = 0
    }
    colorKey[array.length] = 2
    arraySteps.push(array.slice())
    colorSteps.push(colorKey.slice())
  }

  // Remaining bars become green
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2)
  return
}

export default insertionsort

// let length = arr.length
//     for (let i = 1; i < length; i++) {
//       let key = arr[i]

//       let j = i - 1
//       while (j >= 0 && arr[j] > key) {
//         setCurrentIndex(j)
//         setCurrentNext(i)
//         arr[j + 1] = arr[j]
//         j = j - 1
//       }
//       arr[j + 1] = key

//       if (size < 21) {
//         await Sleep(2000)
//       } else {
//         await Sleep(100)
//       }
//       setArr([...arr])
//       setCurrentIndex(null)
//       setCurrentNext(null)
//     }
//     return arr
//   }
