import React from "react"
// 类组件的创建与渲染
// 类组件也必须以大写字母开头
// 类组件需要继承React.Component
// render方法必须有返回值，返回值表示UI结构
class HelloComponent extends React.Component {
  render () {
    return <div>this is class component</div>
  }
}
// 渲染
function App () {
  return (
    <div className="App">
      <div>
        <HelloComponent />
      </div>
    </div>
  )
}

export default App
