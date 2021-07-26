import React, { Component } from 'react'

export default class Paren extends Component {
  render() {
    return (
      <div style={{ width: '650px', background: '#ccc' }}>
        <div >
          <h3>我是Parent</h3>
        </div>
        <hr />
        <A render={(name)=><B name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {
  state = {name: '双双子'}
  render() {
    return (
      <div style={{ width: '600px', background: 'pink', margin: '0 20px' }}>
        <div>
          <h3>我是A组件</h3>
          {this.props.render(this.state.name)}
        </div>
        <hr />
      </div>
    )
  }
}

// 此种只能写法类组件接收
class B extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '550px', background: '#0f0', margin: '0 30px' }}>
          <h3>我是B组件, {this.props.name}</h3>
        </div>
        <hr/>
      </div>
    )
  }
}
