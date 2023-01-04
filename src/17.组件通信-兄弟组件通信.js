import React from "react"
// 兄弟组件通信
// 核心思路 通过状态提升机制 利用共同的父组件实现兄弟通信
// 目标 把B组件中的数据传给A
// 1.先把B中的数据通过子传父 传给App
// 2.再把App接收到的Son中的数据 通过父传子 传给A

function SonA (props) {
  console.log('A组件接收到：' + props.sendAMsg)
  return (
    <div>this is A</div>
  )
}

function SonB (props) {
  const { getBMsg } = props
  function clickHandler () {
    const bMsg = '来自B组件的数据'
    getBMsg(bMsg)
  }
  return (
    <div>this is B <button onClick={clickHandler}>发送数据</button></div>
  )
}

class App extends React.Component {
  state = {
    sendAMsg: ''
  }
  // 声明一个传给B组件的方法
  getBMsg = (bMsg) => {
    console.log(bMsg)
    this.setState({
      msg: bMsg
    })
  }
  render () {
    return (
      <div>
        <SonA sendAMsg={this.state.sendAMsg} />
        <SonB getBMsg={this.getBMsg} />
      </div>
    )
  }

}
export default App