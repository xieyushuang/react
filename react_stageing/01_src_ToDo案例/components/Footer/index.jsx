import React, { Component } from 'react'
import './index.css'
import ProoTypes from "prop-types";

export default class Footer extends Component {
  static prooTypes = {
    onClearAllDone: ProoTypes.func.isRequired,
    checkAllTodo: ProoTypes.func.isRequired,
  }
  
  handleChangeAll = (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  handleDoneTodo = ()=>{
    this.props.onClearAllDone()
  }

  render() {
    const count = this.props.todos.reduce((pre, current) => {
      return pre + (current.isDown ? 1 : 0)
    }, 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleChangeAll} checked={count === this.props.todos.length && count ? true : false}/>
        </label>
        <span>
          <span>已完成{count}</span>/ 全部{this.props.todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.handleDoneTodo}>清除已完成任务</button>
      </div>
    )
  }
}
