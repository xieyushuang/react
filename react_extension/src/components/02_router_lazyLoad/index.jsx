import React, { Component, lazy, Suspense } from 'react'
import { Link, Route } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
import './index.css'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h3 className="header">头部</h3>

        <div className="container">
          <div className="sider">
            <Link style={{ display: 'block' }} to="/about">About</Link>
            <Link style={{ display: 'block' }} to="/home">Home</Link>
          </div>

          <div>
            <Suspense fallback={<h1>loading.......</h1>}>
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
            </Suspense>
          </div>
        </div>

      </div>
    )
  }

}

