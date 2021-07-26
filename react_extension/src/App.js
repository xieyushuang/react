import { BrowserRouter } from 'react-router-dom'
import Demo from './components/09_renderProps'
import React, { Component } from 'react'

export default class App extends Component {

  componentDidMount(){

  }


  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <BrowserRouter>
          <Demo />
        </BrowserRouter>
      </div>
    )
  }
}

