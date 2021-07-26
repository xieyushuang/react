import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        isDown: true
      },
      {
        id: '002',
        name: '睡觉',
        isDown: true
      },
      {
        id: '003',
        name: '打豆豆',
        isDown: false
      }
    ]
  }

  addToDo = (todoObj) => {
    const {todos} = this.state
    const newToDos = [todoObj,...todos]
    this.setState({todos: newToDos})
  }

  changeToDo = (id, done)=>{
    const {todos} = this.state
    const newToDos = todos.map(item => {
      if(item.id == id) {
        item.isDown = done
      }
      return item
    })

    this.setState({todos: newToDos})
  }

  deleteToDo = (id)=>{
    const {todos} = this.state
    const newToDos = todos.filter(item => {
      return item.id !== id
    })

    this.setState({todos: newToDos})
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newToDos = todos.map(item => {
      item.isDown = done
      return item
    })
    this.setState({todos: newToDos})
  }

  onClearAllDone = () =>{
    const {todos} = this.state
    const newToDos = todos.filter(item => {
      return !item.isDown
    })
    this.setState({todos: newToDos})
  }


  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDo={this.addToDo} todos={todos}/>
          <List todos={todos} changeToDo={this.changeToDo} deleteToDo={this.deleteToDo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} onClearAllDone={this.onClearAllDone}/>
        </div>
      </div>
    )
  }
}

