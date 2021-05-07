import { swap } from "./helpers"

const selectionsort = (array, position, arraySteps, colorSteps) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice()

  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j
        arraySteps.push(array.slice())
        colorKey[i] = 1
        colorKey[min] = 1
        colorSteps.push(colorKey.slice())
        colorKey[i] = 0
        colorKey[min] = 0
      }
    }
    if (min !== i) {
      array = swap(array, i, min)
    }
    colorKey[array.length] = 2
    arraySteps.push(array.slice())
    colorSteps.push(colorKey.slice())
  }

  // Remaining bars become green
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2)
  return
}

export default selectionsort

// for (let i = 0; i < len; i++) {
//     let min = i
//     for (let j = i + 1; j < len; j++) {
//       if (list[min] > list[j]) {
//         min = j
//       }
//     }
//     if (min !== i) {
//       setCurrentIndex(i)
//       setCurrentNext(min)
//       ;[list[i], list[min]] = [list[min], list[i]]
//     }
