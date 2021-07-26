// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { incrementAction, decrementAction, incrementAsyncAction } from '../../redux/count_action'

// 普通写法
// // 映射状态
// const mapStateToProps = state => {
//   return { count: state }
// }

// // 映射操作状态的方法
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: value => dispatch(incrementAction(value)),
//     decement: value => dispatch(decrementAction(value)),
//     incrementAsync: (value, time) => dispatch(incrementAsyncAction(value, time))
//   }
// }

// // 创建并暴漏一个容器组件,connect必须第一次调用的时候，必须传两个参数，而且必须是function,必须有返回值
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

// 一般写法
// export default connect(
//   state => ({ count: state }),
//   dispatch => {
//     return {
//       increment: value => dispatch(incrementAction(value)),
//       decement: value => dispatch(decrementAction(value)),
//       incrementAsync: (value, time) => dispatch(incrementAsyncAction(value, time))
//     }
//   })(CountUI)


// 精简写法, mapDispatchToProps可以写成一个普通的函数，也可以写一个对象
export default connect(
  state => ({ count: state }),
  {
    increment: incrementAction,
    decement: decrementAction,
    incrementAsync: incrementAsyncAction
  }
)(CountUI)