// 非受控组件就是通过手动操作dom的方式获取文本框的值
// 文本框中的值不受react组件的state中的状态控制，直接通过原生dom获取输入框的值
import React, { createRef } from "react"
class Input extends React.Component {
  // 自定义实例属性接收createRef
  msgref = createRef()
  // 定义回调函数
  getValue = () => {
    // 通过msgRef获取input框的value值
    console.log(this.msgref.current.value)
    console.log(this.msgref.current)
  }

  render () {
    return (
      <>
        <input
          type='text'
          ref={this.msgref}
        />
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
    )
  }
}

function App () {
  return (
    <div className="App">
      <Input></Input>
    </div>
  )
}

export default App
