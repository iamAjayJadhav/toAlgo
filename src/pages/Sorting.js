/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import "./App.style.css"
import Main from "./Main"

import { Sleep } from "../Helpers/sleepFunction"
function Sorting() {
  const [size, setSize] = useState(10)
  const [arr, setArr] = useState([])
  const [currentIndex, setCurrentIndex] = useState(null)
  const [currentNext, setCurrentNext] = useState(null)
  const selection = undefined
  useEffect(() => {
    updateList()
  }, [size])

  const updateList = () => {
    const randomArr = Array.from({ length: size }, () =>
      generateRandomInteger(50, 400)
    )
    setArr(randomArr)
  }

  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  const rangeChange = () => {
    const range = prompt("How big do you want the graph to be? (between 5-100)")
    if (range < 5 || range > 100) {
      rangeChange()
    } else {
      setSize(range)
    }
  }

  const generateRandomList = () => {
    const sizeOfList = generateRandomInteger(5, 20)
    const randomArr = Array.from({ length: sizeOfList }, () =>
      generateRandomInteger(50, 400)
    )
    setArr(randomArr)
  }

  const bubbleOnClick = async () => {
    const len = arr.length
    let swapped
    do {
      swapped = false
      for (let i = 0; i < len; i++) {
        setCurrentIndex(i)
        setCurrentNext(i + 1)
        if (arr[i] > arr[i + 1]) {
          let tmp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = tmp
          swapped = true
        }
        if (size < 21) {
          await Sleep(900)
        } else {
          await Sleep(10)
        }

        setArr([...arr])
      }
    } while (swapped)
    setCurrentIndex(null)
    setCurrentNext(null)
  }

  const selectionSort = async () => {
    const list = arr
    const len = list.length
    for (let i = 0; i < len; i++) {
      let min = i
      for (let j = i + 1; j < len; j++) {
        if (list[min] > list[j]) {
          min = j
        }
      }
      if (min !== i) {
        setCurrentIndex(i)
        setCurrentNext(min)
        ;[list[i], list[min]] = [list[min], list[i]]
      }
      if (size < 21) {
        await Sleep(900)
      } else {
        await Sleep(100)
      }
      setArr([...list])
      setCurrentIndex(null)
      setCurrentNext(null)
    }

    return list
  }

  let countingSort = async (min, max) => {
    let i = min,
      j = 0,
      len = arr.length,
      count = []
    for (i; i <= max; i++) {
      count[i] = 0
    }
    for (i = 0; i < len; i++) {
      count[arr[i]] += 1
    }
    for (i = min; i <= max; i++) {
      setCurrentIndex(i)
      setCurrentNext(j)
      while (count[i] > 0) {
        arr[j] = i
        j++
        count[i]--
      }
      setArr([...arr])
    }
    return arr
  }

  const insertionSort = async () => {
    let length = arr.length
    for (let i = 1; i < length; i++) {
      let key = arr[i]

      let j = i - 1
      while (j >= 0 && arr[j] > key) {
        setCurrentIndex(j)
        setCurrentNext(i)
        arr[j + 1] = arr[j]
        j = j - 1
      }
      arr[j + 1] = key

      if (size < 21) {
        await Sleep(2000)
      } else {
        await Sleep(100)
      }
      setArr([...arr])
      setCurrentIndex(null)
      setCurrentNext(null)
    }
    return arr
  }

  return (
    <div className="App">
      <Header
        rangeChange={rangeChange}
        bubbleOnClick={bubbleOnClick}
        randomList={generateRandomList}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
        countingSort={countingSort}
      />
      <Main
        data={arr}
        currentIndex={currentIndex}
        nextIndex={currentNext}
        selection={selection}
      />
    </div>
  )
}

export default Sorting
