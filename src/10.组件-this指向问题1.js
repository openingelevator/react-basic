import React from "react"
// this有问题的写法
class Test extends React.Component {
  constructor() {
    super()
    // 使用bind强行修正this的指向
    // 相当于在类组件的初始化阶段 就可以把回调函数的this修正
    // 永远指向当前组件的实例对象
    this.hander = this.hander.bind(this)
  }

  hander () {
    console.log(this)
  }
  render () {
    return (
      <button onClick={this.hander}>
        click
      </button>
    )
  }
}
function App () {
  return (
    <div className="App">
      <Test></Test>
    </div>
  )
}

export default App
