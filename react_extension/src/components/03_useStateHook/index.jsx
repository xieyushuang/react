import React from 'react'

export default function Demo() {
  console.log('==细节:每次状态更新都调用一次,render一次Demo,按理说count又被初始化0,但是react底层做了处理,放入缓存===')
  // a包含两个元素,[状态state, 更新状态的方法]
  const [count, setCount] = React.useState(0) //初始值设置
  const [name, setName] = React.useState('明明子')
  const add = () => {
    // setCount第一种写法
    // setCount(count + 1)

    // setCount第二种写法
    setCount(preCount => preCount + 1)
  }

  const updateName = () =>{
    setName('双双子')
  }

  return (
    <div>
      <h1>当前求和为： {count}</h1>
      <h1>我的名字是: {name}</h1>
      <button onClick={add}>点我+1</button>
      <button onClick={updateName}>点我更新名字</button>
    </div>
  )
}
