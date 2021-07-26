import { createStore } from 'redux'
import {ADDPERSON} from '../constant'

export const personAction = person => ({type: ADDPERSON, data: person})                                          