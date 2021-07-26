import React, { Component, PureComponent } from 'react'

// export default class Parent extends Component {
//   state = {
//     carName: '奔驰'
//   }

    // changeCar = () => {
    //   // this.setState({carName: '宝马'})
    //   const obj = this.state
    //   obj.carName = '宝马'
    //   this.setState(obj)
    // }

//   shouldComponentUpdate(nextProps, nextState) {
//     return !(nextState.carName === this.state.carName)
//   }


//   render() {
//     console.log('=====parent render====')
//     const {carName} = this.state
//     return (
//       <div>
//         我是父组件
//         <span>我的车名是： {carName}</span>
//         <hr/>
//         <button onClick={this.changeCar}>点击换车</button>

//         <Child carName={carName}/>
//       </div>
//     )
//   }
// }


// class Child extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return !(nextProps.carName === this.props.carName)
//   }
//   render() {
//     console.log('=====child render===')
//     return (
//       <div>
//         我是子组件
//         <span>我接收的车名是： {this.props.carName}</span>
//       </div>
//     )
//   }
// }




export default class Parent extends Component {
  state = {
    carName: '奔驰'
  }

  changeCar = () => {
    this.setState({carName: '宝马'})
  }

  render() {
    console.log('=====parent render====')
    const {carName} = this.state
    return (
      <div>
        我是父组件
        <span>我的车名是： {carName}</span>
        <hr/>
        <button onClick={this.changeCar}>点击换车</button>

        <Child carName={carName}/>
      </div>
    )
  }
}


class Child extends Component {
  render() {
    console.log('=====child render===')
    return (
      <div>
        我是子组件
        <span>我接收的车名是： {this.props.carName}</span>
      </div>
    )
  }
}
