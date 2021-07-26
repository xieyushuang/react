import React, { Component } from 'react'
import { BrowserRouter, HashRouter, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

export default class App extends Component {



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
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </div>
        </div>

      </div>
    )
  }

}

