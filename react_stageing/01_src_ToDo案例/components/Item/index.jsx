import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    isMouse: false
  }

  handleMouse = (flag)=>{
    return () => {
      this.setState({isMouse: flag})
    }
  }

  handleLeave = (flag)=>{
    return () => {
      this.setState({isMouse: flag})
    }
  }

  handleChange = (id)=>{
    return (event)=>{
      this.props.changeToDo(id,event.target.checked)
    }
  }

  handleDelete = (id)=>{
    if(window.confirm('确定删除么?')) {
      this.props.deleteToDo(id)
    }
  }


  render() {
    const {isMouse} = this.state
    const {id,name, isDown} = this.props
    return (
      <li style={{background: isMouse ? '#ccc' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleLeave(false)}>
        <label>
          <input type="checkbox" checked={isDown} onChange={this.handleChange(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={()=>this.handleDelete(id)} style={{ display:  isMouse ? 'inline-block' : 'none'}}>删除</button>
      </li>
    )
  }
}
