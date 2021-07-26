import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    count: 0
  }

  // setState第一种写法：对象式setState
  // add = () => {
  //   this.setState({ count: this.state.count + 1 }, () => {
  //     console.log('======', this.state.count)
  //   })
  // }

  // setState第二种写法：函数式setState
  add = () => {
    // this.setState((preState, props) => {
    //   console.log('====preState==', preState)
    //   console.log('====props===', props)
    //   return { count: preState.count + 1 }
    // })
    this.setState(preState => ({ count: preState.count + 1 }))
    this.setState(preState => ({ count: preState.count + 1 }), () => {
      console.log('===state===', this.state.count)
    })
  }

  render() {
    return (
      <div>
        <h1>当前求和为： {this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
