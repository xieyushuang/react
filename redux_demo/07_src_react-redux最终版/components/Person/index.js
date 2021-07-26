import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { nanoid } from "nanoid"
import { personAction } from '../../redux/actions/person'

class Person extends Component {

  onAdd = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const person = {
      id: nanoid(),
      name,
      age
    }
    if(name&&age) {
      this.props.addPerson(person)
      this.nameNode.value = ''
      this.ageNode.value = ''
    } else {
      alert('名字年龄必填')
    }
    
  }


  render() {
    return (
      <div>
        <h2>我是Person组件，上方组件求和为：{this.props.count}</h2>
        名字：<input ref={(c => this.nameNode = c)} type="text" placeholder="名字" />
        年龄：<input ref={(c => this.ageNode = c)} type="text" placeholder="年龄" />
        <button onClick={this.onAdd}>添加</button>

        <ul>
          {
            this.props.persons&&this.props.persons.length ? 
            this.props.persons.map(person => {
              return (<li key={person.id}>名称： {person.name}==========年龄：{person.age}</li>)
            }) : (<Fragment/>)
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ persons: state.persons, count: state.count }),
  {
    addPerson: personAction
  }
)(Person)
