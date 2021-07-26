import {ADDPERSON} from '../constant'
const initSate = []

export default function PersonReducer (personState = initSate, action) {
  const {type, data} = action
  switch(type){
    case ADDPERSON:
      return [...personState, data]
    default:
      return personState
  }
}