import React from "react"
import styled from "styled-components"
import "../TheorySection/Theory.css"
import Navbar from "../Navbar"

import bubble_gif from "../../images/bubblegif.gif"
import merge_gif from "../../images/mergegif.gif"
import quick_gif from "../../images/quickgif.gif"
import insertion_gif from "../../images/insertiongif.gif"
import selection_gif from "../../images/selectiongif.gif"
import counting_gif from "../../images/countinggif.gif"
import bubble_ss from "../../images/bubblesort_ss.png"
import merge_ss from "../../images/Mergesort_ss.png"
import selection_ss from "../../images/selectionsort_ss.png"
import insertion_ss from "../../images/insertionsort_ss.png"
import counting_ss from "../../images/countingsort_ss.png"
import quick1_ss from "../../images/quicksort1_ss.png"
import quick2_ss from "../../images/quicksort2_ss.png"
export default function Theory() {
  return (
    <div>
      <Navbar />
      <Basement>
        <br />
        <br />
        <div>
          <h1>Bubble Sort</h1>
          <div>
            <img src={bubble_gif} alt="bubble sort animations" />
          </div>
          <br />

          <p>
            This is the “Hello World” of sorting methods, nothing crazy but it
            <br />
            gets the job done. For each item in the array we want to check if
            <br />
            the next item is larger, if it is then swap their indexes in the
            <br />
            array. To avoid recomparing sorted numbers we’ll start from the back
            <br />
            of the array while another for loop gets the preceding number. This
            <br />
            way all of the largest values build up, or “bubbles up”, on the end.
            <br />
          </p>
          <br />
          <h4>Program</h4>
          <br />
          <div>
            <img src={bubble_ss} alt="bubble sort code" />
          </div>
          <br />
          <h4>
            Following are the Time and Space complexity for the Bubble Sort
            algorithm.
          </h4>
          <br />
          <ul>
            <li>Best Case Time Complexity [Big-omega] : Ω(n)</li>
            <li>Average Time Complexity [Big-theta] : Θ(n^2)</li>
            <li>Worst Case Time Complexity [ Big-O ] : O(n^2)</li>

            <li>Space Complexity: O(1)</li>
          </ul>
          <br />

          <br />
          <br />

          <h1>Merge Sort</h1>
          <br />
          <div>
            <img src={merge_gif} alt="merge sort animations" />
          </div>
          <br />
          <p>
            Merge Sort is a divide and conquer algorithm. It works by
            <br />
            recursively breaking down a problem into two or more sub-problems of
            <br />
            the same or related type, until these become simple enough to be
            <br />
            solved directly. The solutions to the sub-problems are then combined
            <br />
            to give a solution to the original problem. So Merge Sort first
            <br />
            divides the array into equal halves and then combines them in a
            <br />
            sorted manner.
          </p>

          <br />
          <h4>Program</h4>
          <div>
            <img src={merge_ss} alt="merge sort code" />
          </div>
          <br />
          <h4>
            Following are the Time and Space complexity for the Merge Sort
            algorithm.
          </h4>
          <br />
          <ul>
            <li>Best Case Time Complexity [Big-omega] : Ω(n log(n))</li>
            <li>Average Time Complexity [Big-theta] : Θ(n log(n))</li>
            <li>Worst Case Time Complexity [ Big-O ] : O(n log(n))</li>

            <li>Space Complexity: O(n)</li>
          </ul>
          <br />
          <br />
          <br />

          <h1>Quick Sort</h1>
          <br />
          <div>
            <img src={merge_gif} alt="merge sort animations" />
          </div>
          <br />
          <p>
            Implementation is simultaneously pretty simple and a bit confusing,
            <br />
            as recursion tends to be. We’re going to use our pivot function to
            <br />
            get the first sorted item from our array. With that, we’ll
            <br />
            recursively run our quickSort to do the same process on the first
            <br />
            half of our partitioned array, which will repeat until there’s
            <br />
            nothing left to sort, then do the same for the other half. When both
            <br />
            are done our fully sorted array can be returned.
          </p>
          <br />

          <h4>Program</h4>
          <div>
            <img src={quick1_ss} alt="quick sort code" />
          </div>
          <br />
          <h4>Pivot</h4>
          <br />
          <p>
            Firstly, we’ll need our pivot utility function. There’s 4 main
            <br />
            parts to this, our swapper, the loop, the pivot itself, and our
            <br />
            pointer. Our pointer is just a placeholder for our pivot. Every
            <br />
            time our loop progresses, each item is compared to the pivot and
            <br />
            if it is smaller it’s swapped with our pointer. Every time we do
            <br />
            this is to ensure that the pointer is ahead of everything smaller
            <br />
            than the pivot and before everything that’s larger.
            <br />
            When everything is complete, and our array is partitioned, then
            <br />
            we can assign the pivot to the pointer’s index as its final
            position.
            <br />
            Our swap works by just reassigning the indexes of each item with
            each
            <br />
            other’s index, nothing too crazy.
          </p>
          <br />
          <h4>Program</h4>
          <div>
            <img src={quick2_ss} alt="quick sort code" />
          </div>
          <br />
          <h4>
            Following are the Time and Space complexity for the Quick Sort
            algorithm.
          </h4>
          <br />
          <ul>
            <li>Best Case Time Complexity [Big-omega] : Ω(n log(n))</li>
            <li>Average Time Complexity [Big-theta] : Θ(n log(n))</li>
            <li>Worst Case Time Complexity [ Big-O ] : O(n^2)</li>

            <li>Space Complexity: O(log(n))</li>
          </ul>
          <br />
          <h1>Insertion Sort</h1>
          <div>
            <img src={insertion_gif} alt="insertion sort animations" />
          </div>
          <br />

          <p>
            My personal favorite and the most performant of the three, insertion
            <br />
            sort, is more similar to how you would sort something by hand. We
            <br />
            look at the array as two parts, the sorted and unsorted, with every
            <br />
            time we find a new value we loop back to find its place in the
            <br />
            sorted half. With each addition our sorted group grows until it is
            <br />
            the whole array.
          </p>
          <br />
          <h4>Program</h4>
          <br />
          <div>
            <img src={insertion_ss} alt="insertion sort code" />
          </div>
          <br />
          <h4>
            Following are the Time and Space complexity for the Bubble Sort
            algorithm.
          </h4>
          <br />
          <ul>
            <li>Best Case Time Complexity [Big-omega] : Ω(n)</li>
            <li>Average Time Complexity [Big-theta] : Θ(n^2)</li>
            <li>Worst Case Time Complexity [ Big-O ] : O(n^2)</li>

            <li>Space Complexity: O(1)</li>
          </ul>
          <br />

          <br />
          <br />
          <h1>Selection Sort</h1>
          <div>
            <img src={selection_gif} alt="selecton sort animations" />
          </div>
          <br />

          <p>
            Selection sort works like the opposite of Bubble sort, while bubble
            <br />
            sorting is pushing all of the largest values to the end now we’re
            <br />
            going to push the minimum values to the start. Every time it loops
            <br />
            over the array it selects the smallest value, if it finds a lower
            <br />
            value that then that becomes the new lowest value. When the loop is
            <br />
            done it’ll take that minimum and put it on the front of the array
            <br />
            before starting the loop again. This way the lowest value of each
            <br />
            iteration is stacked onto the front until the whole array is sorted.
          </p>
          <br />
          <h4>Program</h4>
          <br />
          <div>
            <img src={selection_ss} alt="selection sort code" />
          </div>
          <br />
          <h4>
            Following are the Time and Space complexity for the Bubble Sort
            algorithm.
          </h4>
          <br />
          <ul>
            <li>Best Case Time Complexity [Big-omega] : Ω(n^2)</li>
            <li>Average Time Complexity [Big-theta] : Θ(n^2)</li>
            <li>Worst Case Time Complexity [ Big-O ] : O(n^2)</li>

            <li>Space Complexity: O(1)</li>
          </ul>
          <br />

          <br />
          <br />
          <h1>Counting Sort</h1>
          <div>
            <img src={counting_gif} alt="counting sort animations" />
          </div>
          <br />

          <p>
            we’ll be introduced to our first non-comparison sorting algorithm —
            <br />
            counting sort! By being a non-comparison algorithm, counting sort
            <br />
            doesn’t really care about what the other elements in a list are when
            <br />
            it’s figuring out the sorted position of any given element, and
            <br />
            you’ll see why when we dive into the theory behind it. Counting sort
            <br />
            is a stable sort, and runs in O(n + k), or linear, time where n is
            <br />
            the size of the input list and k is the value of the max element in
            <br />
            the input array. When k = O(n), then counting sort runs in O(n)
            <br />
            time. Typically, sorting algorithms are bound at being able to run
            <br />
            no faster than Ω(n log n), but because counting sort doesn’t run on
            <br />
            the comparison model that other sorting algorithms such as merge
            <br />
            sort or quick sort do, that bound doesn’t apply to it.
          </p>
          <br />
          <h4>Program</h4>
          <br />
          <div>
            <img src={counting_ss} alt="counting sort code" />
          </div>
          <br />
          <h4>
            Following are the Time and Space complexity for the Bubble Sort
            algorithm.
          </h4>
          <br />
          <ul>
            <li>Best Case Time Complexity [Big-omega] : Ω(n+k)</li>
            <li>Average Time Complexity [Big-theta] : Θ(n+k)</li>
            <li>Worst Case Time Complexity [ Big-O ] : O(n+k)</li>

            <li>Space Complexity: O(k)</li>
          </ul>
          <br />

          <br />
          <br />
        </div>
      </Basement>
    </div>
  )
}
const Basement = styled.div`
  margin-top: 40px;
  display: flex;
  font-size: 20px;
  font-family: sans-serif;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  line-height: normal;

  border: 3px solid grey;
`
