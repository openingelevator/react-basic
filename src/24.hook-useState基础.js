import { useState } from "react"
// hooks 只能在函数组件中使用
// 使用
// 导入useState函数
// 执行这个函数并且传入初始值
// [数据 修改数据的方法]
// 使用数据 修改数据

// 组件的更新
// 调用setCount的时候 更新过程
// 首次渲染 组件内部的代码会被执行一次
// 其中useState也会跟着执行 初始值只在首次渲染时生效
// 更新渲染 setCount都会更新
// 1. App组件会再次渲染 这个函数再次执行
// 2.useState再次执行 得到的新的count值不再是0而是1 模板会用新值渲染

// 注意事项
// 不能嵌套在if/for/其他函数中（react按照hooks的调用顺序识别每一个hook）

function getDefaultValue () {
  for (let i = 0; i < 100; ++i) {

  }
  return '10'
}

function Counter (props) {
  const [count, setCount] = useState(() => {
    return props.count
    // return getDefaultValue()
  })
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}

// useState回调函数作为参数
function App () {
  // 参数：状态初始值，传入0表示初始值为0
  // 返回值：数组 包含两个值：1 状态值 2 修改该状态的函数
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])
  console.log(count)

  function test () {
    setCount(count + 1)
    setFlag(false)
    setList([1, 2, 3])
  }

  return (
    <div>
      count:{count}flag:{flag ? '1' : '0'}list:{list.join('-')}
      <button onClick={test}>+</button>
      <Counter count={10}></Counter>
      <Counter count={20}></Counter>
    </div>
  )
}
export default App