// 受控组件就是可以被React状态控制的组件
// React组件的状态存储在state中，input表单元素也有自己的状态存储在value中
// React将state与表单元素的value绑定在一起，由state的值控制表单元素的值、
// 从而保证单一数据源特性
import React from "react"

class Counter extends React.Component {
  // 1.声明用来控制input value的react组件自己的状态
  state = {
    message: 'this is message',
  }
  // 回调函数
  inputChange = (e) => {
    console.log('change事件触发了', e)
    // 4.拿到输入框最新的值 交给state中的message
    this.setState({
      message: e.target.value
    })
  }
  render () {
    return (
      // 2.给input框的value属性绑定 react state
      // 3.给input框绑定change的事件，为了拿到当前输入框中的数据
      <input type='text'
        value={this.state.message}
        onChange={this.inputChange}
      ></input>
    )
  }
}

function App () {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
}

export default App
