// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import {incrementAction, decrementAction, incrementAsyncAction} from '../../redux/count_action'
// /所以a函数的返回的对象中的key值就作为传递给UI组件props的key,value就作为传递给UI组件props的value--------状态
function mapStateToProps(state) {
  return { count: state }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: value => dispatch(incrementAction(value)),
    decement: value => dispatch(decrementAction(value)),
    incrementAsync: (value, time) => dispatch(incrementAsyncAction(value, time)),
  }
}



// 创建并暴漏一个容器组件,connect必须第一次调用的时候，必须传两个参数，而且必须是function,必须有返回值
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)