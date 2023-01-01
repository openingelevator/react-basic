import React from "react"

class Test extends React.Component {

  hander () {
    console.log(this)
  }
  render () {
    console.log('父级函数this指向为', this)
    return (
      // 如果不通过constructor做修正，直接可以在事件绑定的位置
      // 通过箭头函数的写法 直接沿用父函数中的this指向也是正确的
      <button onClick={() => this.hander()}>
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
