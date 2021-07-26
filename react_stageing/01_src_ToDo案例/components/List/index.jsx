import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
import ProoTypes from "prop-types";

export default class List extends Component {
  static prooTypes = {
    changeToDo: ProoTypes.func.isRequired,
    deleteToDo: ProoTypes.func.isRequired,
    todos: ProoTypes.array.isRequired
  }

  render() {
    const {todos} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(item =>{
            return <Item key={item.id} {...item} changeToDo={this.props.changeToDo} deleteToDo={this.props.deleteToDo}/>
          })
        }
      </ul>
    )
  }
}
