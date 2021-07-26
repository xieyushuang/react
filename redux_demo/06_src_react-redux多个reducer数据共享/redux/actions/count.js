import { INCREMENT, DECREMENT } from "../constant"

export const incrementAction = data => ({type: INCREMENT, data}) // 同步action 
export const decrementAction = data => ({type: DECREMENT, data}) // 同步action 
export const incrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() =>{
      dispatch(incrementAction(data))
    }, time)
  }
} // 异步action
