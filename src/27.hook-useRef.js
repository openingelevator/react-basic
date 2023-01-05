import React, { useEffect, useRef } from "react"

// useRef获取真实的dom或组件实例
// dom对象 标签

// 1. 导入 useRef 函数
// 2. 执行 useRef 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
// 3. 通过ref 绑定 要获取的元素或者组件

class TestC extends React.Component {
  getName = () => {
    return 'this is child test'
  }
  render () {
    return (
      <div>
        this is class component
      </div>
    )
  }
}
function App () {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    console.log(testRef.current)
    console.log(h1Ref.current)
  }, [])
  // useEffect回调 是在dom渲染之后
  return (
    <div>
      <TestC ref={testRef}></TestC>
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  )
}
export default App