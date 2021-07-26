import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import countReducer from './reducers/count'
import personReducer from './reducers/person'

const reducers = combineReducers({count:countReducer,persons:personReducer})

export default createStore(reducers, applyMiddleware(thunk))