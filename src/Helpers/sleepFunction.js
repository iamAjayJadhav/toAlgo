import { size } from "../pages/Sorting"
export const Sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
