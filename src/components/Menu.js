import React from "react"
import "../components/Menu.css"
import { Link } from "react-router-dom"
const Menu = () => {
  return (
    <div className="MenuStyle">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Sorting">Sorting Visualizer</Link>
        </li>
        <li>
          <Link to="Pathfinding">Pathfinding Visualizer</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
