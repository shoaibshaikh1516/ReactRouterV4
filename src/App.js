import React, { Component } from "react";
import "./App.css";
// import Home from "./components/layout/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

// import SideBar from "./components/layout/SideBar"
// import Container from "./components/common/Container"


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)



const Topic = () => (
  <div>
    <h2>About</h2>
  </div>
)
const Topics = () => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`/topics/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`/topics/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`/topics/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`/topics/rendering`} component={Topic} />
    <Route path={`/topics/components`} component={Topic} />
    <Route path={`/topics/props-v-state`} component={Topic} />
  </div>
)



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>
  
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    )
  }
}

export default App;
