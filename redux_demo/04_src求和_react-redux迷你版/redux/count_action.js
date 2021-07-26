import { INCREMENT, DECREMENT } from "./constant"
// const incrementAction = (data) => {
//   // return {type: 'increment', data: data }
//   //简写
//   return {type: 'increment', data}
// }

// incrementAction简写

export const incrementAction = data => ({type: INCREMENT, data}) // 同步action 
export const decrementAction = data => ({type: DECREMENT, data}) // 同步action 
export const incrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() =>{
      dispatch(incrementAction(data))
    }, time)
  }
} // 异步action

// 返回object是同步，返回function是异步，因为zhiyoufunction里可以写setTimeout类似的异步操作