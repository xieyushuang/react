import React, { Component } from 'react'

const Context = React.createContext()
const {Provider, Consumer} = Context
// export default class A extends Component {
//   state = {
//     userName: '双双子'
//   }
//   render() {
//     return (
//       <div style={{ width: '600px', background: '#ccc' }}>
//         <div >
//           <h3>我是A组件</h3>
//           <h4>我的而用户名是： {this.state.userName}</h4>
//         </div>
//         <hr />
//         <Provider value={this.state.userName}>
//           <B userName={this.state.userName}/>
//         </Provider>
//       </div>
//     )
//   }
// }

export default class A extends Component {
  state = {
    userName: '双双子',
    age: 18
  }
  render() {
    return (
      <div style={{ width: '650px', background: '#ccc' }}>
        <div >
          <h3>我是A组件</h3>
          <h4>我的而用户名是： {this.state.userName}</h4>
        </div>
        <hr />
        <Provider value={this.state}>
          <B userName={this.state.userName}/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  
  render() {
    return (
      <div style={{ width: '600px', background: 'pink', margin: '0 20px' }}>
        <div>
          <h3>我是B组件</h3>
          <h4>我从A接收的用户名是：{this.props.userName}</h4>
        </div>
        <hr />
        <C />
      </div>
    )
  }
}

// 此种只能写法类组件接收
class C extends Component {
  static contextType = Context
  render() {
    return (
      <div>
        <div style={{ width: '550px', background: '#0f0', margin: '0 30px' }}>
          <h3>我是C组件</h3>
          <h4>我从A接收的用户名是：{this.context.userName}</h4>
        </div>
        <hr/>
        <D/>
      </div>
    )
  }
}

// 此种方法类组件，函数时组件都能使用
function D() {
  return (
    <div>
      <div style={{ width: '500px', background: '#00f', margin: '0 40px' }}>
        <h3>我是D组件</h3>
        <h4>
          我从A接收的用户名是：
          <Consumer>
            {
              value => {
                console.log('==value==', value)
                return `${value.userName}, 年龄：${value.age}`
              }
            }
          </Consumer>
        </h4>
      </div>
      <hr/>
    </div>
  )
}