import React, { Component } from 'react'
import Login from './components/Login'
import axios from './config/http'
import './App.css'

export default class App extends Component {
  getProductList = () => {
    axios.get('https://api.shop.eduwork.cn/api/goods').then(res=>{
      console.log(res)
    })
  }


  
  render() {
    return (
      <div>
        <Login/>
        <button onClick={this.getProductList}>获取数据</button>
      </div>
    )
  }
}

