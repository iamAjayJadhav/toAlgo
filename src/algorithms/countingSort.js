import { Zoom } from "@material-ui/core"
import { swap } from "./helpers"

const countingSort = (array, position, arraySteps, colorSteps, min, max) => {
  min = Math.min(...array)
  max = Math.max(...array)
  let colorKey = colorSteps[colorSteps.length - 1].slice()
  let i
  let z = 0
  const count = []

  for (i = min; i <= max; i++) {
    count[i] = 0
  }

  for (i = 0; i < array.length; i++) {
    count[array[i]]++
    colorKey[i] = 1
    colorKey[i + 1] = 1
    colorSteps.push(colorKey.slice())
    colorKey[i] = 0
    colorKey[i + 1] = 0
  }

  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      array[z++] = i
      arraySteps.push(array.slice())
      colorKey[min] = 3
      colorKey[z + 1] = 3
      colorSteps.push(colorKey.slice())
      colorKey[min] = 0
      colorKey[z + 1] = 0
    }
    colorKey[array.length - 1 - i] = 2
    arraySteps.push(array.slice())
    colorSteps.push(colorKey.slice())
  }

  // Remaining bars become green
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2)
  return
}

export default countingSort
// let i
//       let z = 0
//       const count = []

//       for (i = min; i <= max; i++) {
//           count[i] = 0
//       }

//       for (i=0; i < array.length; i++) {
//           count[array[i]]++
//           arraySteps.push(array.slice());
//       colorKey[j] = 1;
//       colorKey[j + 1] = 1;
//       colorSteps.push(colorKey.slice());
//       colorKey[j] = 0;
//       colorKey[j + 1] = 0;
//       }

//       for (i = min; i <= max; i++) {
//           while (count[i]-- > 0) {
//               array[z++] = i
//           }
//           colorKey[array.length - 1 - i] = 2;
//     arraySteps.push(array.slice());
//     colorSteps.push(colorKey.slice());
//       }
// return array

// arraySteps.push(array.slice());
//       colorKey[j] = 1;
//       colorKey[j + 1] = 1;
//       colorSteps.push(colorKey.slice());
//       colorKey[j] = 0;
//       colorKey[j + 1] = 0;
