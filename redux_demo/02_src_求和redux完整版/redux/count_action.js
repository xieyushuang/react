import { INCREMENT, DECREMENT } from "./constant"
// const incrementAction = (data) => {
//   // return {type: 'increment', data: data }
//   //简写
//   return {type: 'increment', data}
// }

// incrementAction简写

export const incrementAction = data => ({type: INCREMENT, data})
export const decrementAction = data => ({type: DECREMENT, data})
