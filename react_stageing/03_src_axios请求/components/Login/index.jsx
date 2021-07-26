import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
  onLogin = () => {
    const url = 'https://api.shop.eduwork.cn/api/auth/login'
    axios.post(url, {email: 'test@a.com', password: '123123'}).then(res=>{
      window.localStorage.setItem('accessToken', res.data.access_token)
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.onLogin}>登 录</button>
      </div>
    )
  }
}
