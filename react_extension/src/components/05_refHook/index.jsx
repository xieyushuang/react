import React from 'react'
import ReactDOM from 'react-dom'

export default function Demo() {
  const [count, setCount] = React.useState(0) //初始值设置
  const [name, setName] = React.useState('明明子')
  const myRef = React.useRef()

  const add = () => {
    setCount(preCount => preCount + 1)
  }

  const updateName = () => {
    setName('双双子')
  }

  // 不传第二个参数,监测所有state改变, 传[]谁也不监测,回调函数只会第一次render后执行, 传参,传谁监测谁, 
  // 相当于两个钩子,相当于componentDidMount,componentDidUpdate,相当于谁,取决于第二个参数传谁
  // 隐藏知识点:第一个参数函数里,返回一个函数相当于componentWillUnmount钩子
  React.useEffect(() => {
    const timer = setInterval(() => {
      add()
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const unMount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  const showData = () => [
    alert(myRef.current.value)
  ]

  return (
    <div>
      <input type='text' ref={myRef}></input>
      <h1>当前求和为： {count}</h1>
      <h1>我的名字是: {name}</h1>
      <button onClick={add}>点我+1</button>
      <button onClick={updateName}>点我更新名字</button>
      <button onClick={unMount}>卸载组件</button>
      <button onClick={showData}>点击显示数据</button>
    </div>
  )
}
