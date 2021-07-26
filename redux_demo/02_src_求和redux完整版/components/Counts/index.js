import React, { Component } from 'react'
import store from '../../redux/store'
import { incrementAction, decrementAction } from '../../redux/count_action'

export default class Count extends Component {

  // componentDidMount() {
  //   // 检测redux变化
  //   store.subscribe(()=>{
  //     // 此处setState虚晃一下更新状态，调用render渲染
  //     this.setState({})
  //   })
  // }
  
  increment = () => {
    const {value} = this.selectNumber
    store.dispatch(incrementAction(value*1))
  }

  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch(decrementAction(value*1))
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber
    if(store.getState() % 2 !== 0) {
      store.dispatch(incrementAction(value*1))
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    setTimeout(()=>{
      store.dispatch(incrementAction(value*1))
    },1000)
  }

  render() {
    return (
      <div>
        <h1>当前值: {store.getState()}</h1>
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
