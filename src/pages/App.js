import React from "react"
import Sorting from "./Sorting"
import SortingApp from "../Sorting/SortingApp"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { BrowserRouter, Route, Switch } from "react-router-dom"
import Menu from "../components/Menu"
import PathfindingVisualizer from "../PathfindingVisualizer/PathfindingVisualizer"
import Home from "./index"
import Navbar from "../components/Navbar"
import Theory from "../components/TheorySection/Theory"

function App() {
  return (
    // <Router>
    //   <Home />
    // </Router>

    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Theory" component={Theory} exact />
        <Route path="/Sorting" component={SortingApp} exact />
        <Route
          path="/PathfindingVisualizer"
          component={PathfindingVisualizer}
          exact
        />
        <Route
          path="/Contact"
          component={() => {
            window.location.replace(
              "https://www.linkedin.com/in/iamajayjadhav/"
            )
            return null
          }}
        />
      </Switch>
    </Router>

    //    <BrowserRouter>
    //    <div>
    //      <Menu />
    //      <Switch>
    //        <Route path="/" exact component={Home} />
    //        <Route path="/sorting" component={Sorting} />
    //        <Route path="/pathfinding" component={Pathfinding} />
    //      </Switch>
    //    </div>
    //  </BrowserRouter>
  )
}

// const Home = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   )
// }
export default App
