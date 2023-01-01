import React from "react"
// 子传父:子组件调用父组件传递过来的函数 并且把想要传递的数据当成函数的实参

function Son (props) {
  const { getSonMsg } = props
  function clickHandler () {
    const sonMsg = '来自子组件中的数据'
    getSonMsg(sonMsg)
  }
  return (
    <div>
      <button onClick={clickHandler}>this is son</button>
    </div>
  )
}

class App extends React.Component {
  // 准备一个函数 传给子组件
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }
  render () {
    return (
      <div>
        <Son getSonMsg={this.getSonMsg}></Son>
      </div>
    )
  }

}
export default App