import React from "react"
// 初始化状态->读取状态->修改状态->影响视图
class TestComponent extends React.Component {
  // 1.定义组件状态
  state = {
    // 可以在此定义各种属性，全都是当前组件的状态
    name: 'cp teacher'
  }
  // 事件回调函数
  changeName = () => {
    // 3.修改state中的状态name
    // 注意不可以直接做赋值操作
    this.setState({
      name: 'xiaoming'
    })
  }
  render () {
    // 2.使用状态
    return (
      <div>
        this is TestComponent
        当前name为：{this.state.name}
        <button onClick={this.changeName}>修改name</button>
      </div>
    )
  }
}

// 编写组件其实就是编写原生js或者函数
// 定义状态必须通过state实例属性的方法 提供一个对象 名称固定为state
// 修改state中的属性不可以直接赋值 必须通过setState方法修改

class Counter extends React.Component {
  // 通过state定义组件状态
  state = {
    count: 0
  }
  // 事件回调函数
  changeCount = () => {
    // 修改state
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return (
      <button onClick={this.changeCount}>{this.state.count}click</button>
    )
  }
}

function App () {
  return (
    <div className="App">
      <TestComponent></TestComponent>
      <Counter />
    </div>
  )
}

export default App
