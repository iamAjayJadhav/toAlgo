import React from "react"
import styled from "styled-components"
import "../TheorySection/Theory.css"
export default function Theory() {
  return (
    <Basement>
      <div>
        <h1>Bubble Sort</h1>
        <br />

        <p>
          Just like the way bubbles rise from the bottom of a glass, bubble sort
          is a <br /> simple algorithm that sorts a list, allowing either lower
          or higher values to
          <br />
          bubble up to the top. The algorithm traverses a list and compares
          adjacent <br /> values, swapping them if they are not in the correct
          order. <br /> With a worst-case complexity of O(n^2), bubble sort is
          very slow compared to
          <br /> other sorting algorithms like quicksort. The upside is that it
          is one of the <br /> easiest sorting algorithms to understand and code
          from scratch.
          <br /> From technical perspective, bubble sort is reasonable for
          sorting small-sized
          <br /> arrays or specially when executing sort algorithms on computers
          with
          <br /> remarkably limited memory resources.
        </p>
        <br />
        <h3>
          Following are the Time and Space complexity for the Bubble Sort
          algorithm.
        </h3>
        <br />
        <ul>
          <li>Worst Case Time Complexity [ Big-O ]: O(n2)</li>
          <li>Best Case Time Complexity [Big-omega]: O(n)</li>
          <li>Average Time Complexity [Big-theta]: O(n2)</li>
          <li>Space Complexity: O(1)</li>
        </ul>
        <br />
        <div className="codeBase">
          <pre>
            <h3>Pseudocode</h3>
            <p>
              begin BubbleSort(list)
              <br />
              <br /> &ensp; for all elements of list <br />
              &emsp; &emsp; if list[i] > list[i+1] <br />
              &emsp; &emsp; &emsp; swap(list[i], list[i+1])
              <br />
              &emsp; &emsp; end if <br />
              &emsp;&emsp; end for <br />
              <br />
              &emsp;&emsp; return list <br />
              end BubbleSort
            </p>
          </pre>
        </div>
        <br />
        <br />
        <h1>Merge Sort</h1>
        <br />

        <p>
          Merge Sort is a divide and conquer algorithm.
          <br />
          It works by recursively breaking down a problem into two or more
          sub-problems <br />
          of the same or related type, until these become simple enough to be
          solved directly.
          <br /> The solutions to the sub-problems are then combined to give a
          solution to the original problem.
          <br /> So Merge Sort first divides the array into equal halves and
          then combines them in a sorted manner.
        </p>
        <br />
        <h3>
          Following are the Time and Space complexity for the Merge Sort
          algorithm.
        </h3>
        <br />
        <ul>
          <li>Worst Case Time Complexity [ Big-O ]: O(nlogn)</li>
          <li>Best Case Time Complexity [Big-omega]: O(n*log n)</li>
          <li>Average Time Complexity [Big-theta]: O(n*log n)</li>
          <li>Space Complexity: O(n)</li>
        </ul>
        <br />
        <br />
        <br />
        <h1>Quick Sort</h1>
        <br />

        <p>
          Quick Sort is a sorting algorithm, which is commonly used in computer
          science.
          <br />
          Quick Sort is a divide and conquer algorithm. It creates two empty{" "}
          <br />
          arrays to hold elements less than the pivot value and elements greater
          than
          <br /> the pivot value, and then recursively sort the sub arrays.
          There are two
          <br /> a section of the array.
        </p>
        <br />
        <h3>
          Following are the Time and Space complexity for the Quick Sort
          algorithm.
        </h3>
        <br />
        <ul>
          <li>Worst Case Time Complexity [ Big-O ]:O(n^2)</li>
          <li>Best Case Time Complexity [Big-omega]:Ω(n log(n))</li>
          <li>Average Time Complexity [Big-theta]: θ(n log(n))</li>
          <li>Space Complexity:O(n*log n)</li>
        </ul>
        <br />
      </div>
    </Basement>
  )
}
const Basement = styled.div`
  display: flex;
  font-size: 20px;
  font-family: sans-serif;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  line-height: normal;

  border: 3px solid grey;
`
