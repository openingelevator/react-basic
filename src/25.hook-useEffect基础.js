import { useEffect, useState } from "react"
// 纯函数 除了自己要实现的功能外没有其他部分
// function getNumber1 (a, b) {
//   return a + b
// }

// 非纯函数 除了处理接收的参数外还处理了其他数据
// let count1 = 0
// function getNumber2 (a, b) {
//   count1++// 副作用
//   return a + b
// }

// 常见副作用
// 数据请求ajax发送
// 手动修改dom
// localstorage操作

// 在修改数据之后 把count值放到页面标题中
// 导入useEffect函数
// 在函数组件中执行 传入回调函数 并且定义副作用
// 当我们通过修改状态更新组件时 副作用也会不断执行

// 依赖项控制副作用执行时机
// 1.默认状态（无依赖项）
// 组件初始化时先执行一次 等到每次数据修改组件更新再次执行
// 2.添加空数组依赖性
// 只会在组件初始化的时候执行一次
// 3.添加特定依赖项
// 副作用会在首次渲染时执行 在依赖项发生变化时重新执行

// 注意事项
// 只要在useEffect回调函数中用到的数据状态就应该出现在依赖项数组中声明

// 使用useEffect清理副作用（例如定时器）
function Test () {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了')
    }, 1000)
    return () => {
      // 清理的动作
      clearInterval(timer)
    }
  }, [])
  return (
    <div>
      this is test
    </div>
  )
}

function App () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('zs')
  const [flag, setFlag] = useState(true)
  // 每次组件更新时都会执行一次
  useEffect(() => {
    // 定义副作用
    console.log('副作用执行了')
    document.title = count
    console.log(name)
  }, [count, name])

  // useEffect发送网络请求
  // useEffect(() => {
  //   // 发送请求
  //   function loadData () {
  //     fetch('http://geek.itheima.net/v1_0/channels').then(
  //       response => response.json()
  //     ).then(
  //       data => console.log(data)
  //     )
  //   }
  //   loadData()
  // }, [])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName('ls')}>{name}</button>
      {flag ? <Test></Test> : null}
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  )
}
export default App