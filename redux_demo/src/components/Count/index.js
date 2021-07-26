import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction, incrementAsyncAction } from '../../redux/actions/count'

class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }

  decrement = () => {
    const { value } = this.selectNumber
    this.props.decement(value * 1)
  }

  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }

  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 2000)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>我是Count组件，下方组件总人数：{this.props.persons.length}</h2>
        <h3>当前求和: {this.props.count}</h3>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数+</button>
        <button onClick={this.incrementAsync}>异步+</button>
      </div>
    )
  }
}

export default connect(
  state => {
    return { count: state.count, persons: state.persons }
  },
  {
    increment: incrementAction,
    decement: decrementAction,
    incrementAsync: incrementAsyncAction
  }
)(Count)