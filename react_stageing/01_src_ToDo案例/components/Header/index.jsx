import React, { Component } from 'react'
import './index.css'
import ProoTypes from "prop-types"
import { v4 as uuidv4 } from 'uuid';


export default class Header extends Component {
  static prooTypes = {
    addToDo: ProoTypes.func.isRequired
  }


  handleKeyUp=(event)=>{
    if(event.keyCode !== 13 ) return
    if(!event.target.value) {
      alert('输入内容不能为空')
      return
    }
    const newToDo = {
      id: uuidv4(),
      name: event.target.value,
      isDown: false
    }
    this.props.addToDo(newToDo)
    event.target.value = ''
  }
  
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入任务名称，按回车键确认" />
      </div>
    )
  }
}
