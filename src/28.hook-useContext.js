import React, { useContext, useState } from "react"
import Context from "./context"
// 如果Context要传递的数据是纯静态的 只需要在整个应用初始化的时候传递一次即可

function ComA () {
  const count = useContext(Context)
  return (
    <div>
      this is ComA
      <br></br>
      app传过来的数据为：{count}
      <ComC />
    </div>
  )
}

function ComC () {
  // 在底层组件使用useContext获取数据
  const count = useContext(Context)
  return (
    <div>
      this is ComC
      <br></br>
      app传过来的数据为：{count}
    </div>
  )
}

function App () {
  const [count, setCount] = useState(0)
  return (
    // 在顶层组件使用Provider提供数据
    <Context.Provider value={count}>
      <div>
        <ComA />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </Context.Provider>
  )
}
export default App