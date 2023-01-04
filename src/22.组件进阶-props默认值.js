import React from "react"
// 函数组件默认值
// 函数参数默认值
// 只有在传递时组件内部才有这个prop
function TestF ({ pageSize = 10 }) {
  return (
    <div>
      this is test
      {pageSize}
    </div>
  )
}
// 函数组件默认值
// 在使用时组件内部已经有了pageSize这个prop
// TestF.defaultProps = {
//   pageSize: 10
// }

// 类组件默认值
class TestC extends React.Component {
  static defaultProps = {
    pageSize: 10
  }
  render () {
    return (
      <div>
        {this.props.pageSize}
      </div>
    )
  }
}
// TestC.defaultProps = {
//   pageSize: 10
// }

class App extends React.Component {
  render () {
    return (
      <div>
        <TestF pageSize={20}></TestF>
        <TestC pageSize={20}></TestC>
      </div>
    )
  }

}
export default App