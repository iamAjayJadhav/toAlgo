import React, { useState, useEffect } from "react"
import Node from "./Node"
import Astar from "./Astar"
import "./Pathfinding.css"
const cols = 35
const rows = 13

const NODE_START_ROW = 5
const NODE_START_COL = 15
const NODE_END_ROW = rows - 5
const NODE_END_COL = cols - 5

const Pathfinding = () => {
  const [Grid, setGrid] = useState([])
  const [Path, setPath] = useState([])
  const [visitedNodes, setVisitedNodes] = useState([])
  useEffect(() => {
    initializeGrid()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //CREATES GRID
  const initializeGrid = () => {
    const grid = new Array(rows)
    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols)
    }
    createSpot(grid)
    setGrid(grid)
    addNeighbours(grid)

    const startNode = grid[NODE_START_ROW][NODE_START_COL]
    const endNode = grid[NODE_END_ROW][NODE_END_COL]
    let path = Astar(startNode, endNode)
    startNode.isWall = false
    endNode.isWall = false
    setPath(path.path)
    setVisitedNodes(path.visitedNodes)
  }
  const createSpot = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j] = new Spot(i, j)
      }
    }
  }

  // ADD NEIGHBOURS
  const addNeighbours = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j].addneighbours(grid)
      }
    }
  }

  //SPOT CONSTRUCOR
  function Spot(i, j) {
    this.x = i
    this.y = j
    this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL
    this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL
    this.g = 0
    this.f = 0
    this.h = 0
    this.neighbours = []
    this.isWall = false
    if (Math.random(1) < 0.2) {
      this.isWall = true
    }
    this.previous = undefined
    this.addneighbours = function (grid) {
      let i = this.x
      let j = this.y
      if (i > 0) this.neighbours.push(grid[i - 1][j])
      if (i < rows - 1) this.neighbours.push(grid[i + 1][j])
      if (j > 0) this.neighbours.push(grid[i][j - 1])
      if (j < cols - 1) this.neighbours.push(grid[i][j + 1])
    }
  }

  // GRID WITH NODE
  const gridwithNode = (
    <div>
      {Grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="rowWrapper">
            {row.map((col, colIndex) => {
              const { isStart, isEnd, isWall } = col

              return (
                <Node
                  Key={colIndex}
                  isStart={isStart}
                  isEnd={isEnd}
                  row={rowIndex}
                  col={colIndex}
                  isWall={isWall}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )

  const VisualizeShortestPath = (shortestPathNodes) => {
    for (let i = 0; i < shortestPathNodes.length; i++) {
      setTimeout(() => {
        const node = shortestPathNodes[i]
        document.getElementById(`node-${node.x}-${node.y}`).className =
          "node node-shortest-path "
      }, 5 * i)
    }
  }

  const visualizePath = () => {
    for (let i = 0; i <= visitedNodes.length; i++) {
      if (i === visitedNodes.length) {
        setTimeout(() => {
          VisualizeShortestPath(Path)
        }, 5 * i)
      } else {
        setTimeout(() => {
          const node = visitedNodes[i]
          document.getElementById(`node-${node.x}-${node.y}`).className =
            "node node-visited"
        }, 5 * i)
      }
    }
  }

  console.log(Path)
  return (
    <div className="Wrapper">
      <button onClick={visualizePath}>Visualize</button>
      <h1>Pathfinding</h1>
      {gridwithNode}
    </div>
  )
}

export default Pathfinding
