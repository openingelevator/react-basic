import React from "react"
// 类组件需要实例化，因此有生命周期的概念
// 函数组件没有生命周期
class Test extends React.Component {
  // 如果数据是组件的状态需要去影响视图 定义到state中
  // 如果需要的数据状态不和视图绑定 定义成一个普通的实例属性即可
  timer = null
  componentDidMount () {
    this.timer = setInterval(() => {
      console.log('定时器开启')
    }, 1000)
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
    // 清理定时器
    clearInterval(this.timer)
  }
  render () {
    return (
      <div>test</div>
    )
  }
}



class App extends React.Component {
  constructor() {
    // 触发时机 创建组件时最先执行，初始化的时候只执行一次
    // 作用 初始化state 创建Ref 使用bind解决this指向问题
    super()
    console.log('constructor')
  }
  state = {
    count: 0,
    flag: true
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: this.state.flag ? 0 : 1
    })
  }
  componentDidMount () {
    // 组件挂载(完成DOM渲染)后执行 初始化的时候执行一次
    // 作用 1.发送网络请求 2.DOM操作
    console.log('componentDidMount')
  }
  componentDidUpdate () {
    // 组件更新后
    // DOM操作，可以获取到更新后的DOM内容 不要直接调用setState
    console.log('componentDidUpdate')
  }
  render () {
    // 每次组件渲染都会触发
    // 作用 渲染UI(不能在里面调用setState)
    console.log('render')
    return (
      <div>
        this is div
        {/* 通过一个数据状态的切换 让Test组件进行销毁重建 就会发生组件卸载 */}
        {this.state.flag ? <Test></Test> : null}
        <button onClick={this.clickHandler}>{this.state.count}</button>

      </div>
    )
  }

}
export default App