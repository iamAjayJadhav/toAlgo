import React from "react"
import { Buttons, Wrapper, SortWrapper } from "./Header.style"
export default function Header({
  randomList,
  rangeChange,
  bubbleOnClick,
  selectionSort,
  countingSort,
  insertionSort,
  QuickSort_call,
  customarray,
}) {
  return (
    <Wrapper>
      <Buttons onClick={randomList}>Random List</Buttons>
      <Buttons onClick={rangeChange}>Change array size</Buttons>

      <SortWrapper>
        <Buttons onClick={bubbleOnClick}>Bubble O(n)</Buttons>
        <Buttons onClick={insertionSort}>Insertion</Buttons>
        <Buttons onClick={selectionSort}>Selection</Buttons>
        <Buttons onClick={countingSort}>Counting</Buttons>
        <Buttons onClick={QuickSort_call}>Quick</Buttons>
      </SortWrapper>
    </Wrapper>
  )
}
