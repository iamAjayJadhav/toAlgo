/* eslint-disable no-restricted-globals */
import { Buttons } from "../components/Header.style"
import React from "react"
import styled from "styled-components"
import "../pages/Main.css"
export default function Main({ currentIndex, nextIndex, data }) {
  const width = screen.width / data.length
  return (
    <Container>
      <BlocksContainer>
        {data.map((size, i) => (
          <>
            <Bar
              height={`${size}px`}
              width={`${width}px`}
              key={i}
              active={currentIndex === i}
              style={nextIndex === i ? { backgroundColor: "green" } : null}
            >
              {data.length < 31 && <Buttons disabled>{size}</Buttons>}
            </Bar>
          </>
        ))}
      </BlocksContainer>

      <Basement>
        <div className="Base">
          <div className="leftBase">
            <h1>Bubble Sort</h1>
            <h4>
              Bubble Sort is the simplest sorting algorithm that works by
              repeatedly swapping the adjacent elements <br /> if they are in
              wrong order.
            </h4>
            <h4>
              Following are the Time and Space complexity for the Bubble Sort
              algorithm.
            </h4>

            <ul>
              <li>Worst Case Time Complexity [ Big-O ]: O(n2)</li>
              <li>Best Case Time Complexity [Big-omega]: O(n)</li>
              <li>Average Time Complexity [Big-theta]: O(n2)</li>
              <li>Space Complexity: O(1)</li>
            </ul>
          </div>

          <div className="rightBase">
            <pre>
              <h1>Pseudocode</h1>
              <h3>
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
              </h3>
            </pre>
          </div>
        </div>
      </Basement>
    </Container>
  )
}
const Container = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
`
const BlocksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`
const Basement = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #e2eafc;
  border: 3px solid grey;
`

const Bar = styled.div`
  align-items: center;

  display: flex;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.active ? "blue" : "#e63946")};
  margin-right: 3px;
  ${(props) => props.style}
`
