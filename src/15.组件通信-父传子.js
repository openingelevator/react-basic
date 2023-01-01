// 组件是独立且封闭的单元，默认情况下组件只能使用自己的数据（state）
// 组件化开发的过程中，完整的功能会拆分多个组件，在这个过程中不可避免的需要互相传递一些数据
// 为了能让各组件之间可以进行互相沟通，数据传递，这个过程就是组件通信

// 父传子实现
import React from "react"
// App父组件 Son子组件
// 函数式的Son
function SonF (props) {
  // props是一个对象，里面存着通过父组件传入的所有数据
  console.log(props)
  // 解构赋值
  const { list, userInfo, getMes, child } = props
  return (
    <div>我是函数子组件,
      {list.map(item => <p key={item}>{item}</p>)}
      {userInfo.name}
      <button onClick={getMes}>触发父组件传入的函数</button>
      {child}
    </div>
  )
}
// 第二种解构方式
// function SonF ({ list, userInfo, getMes, child }) {
//   return (
//     <div>我是函数子组件,
//       {list.map(item => <p key={item}>{item}</p>)}
//       {userInfo.name}
//       <button onClick={getMes}>触发父组件传入的函数</button>
//       {child}
//     </div>
//   )
// }

// 类组件的Son
class SonC extends React.Component {
  render () {
    return (
      // 类组件必须通过this关键词获取，props名称是固定的
      <div>我是类子组件,{this.props.msg}</div>
    )
  }
}

// props注意事项
// props是只读对象，子组件只能读取props中的数据，不能进行修改
// props可以传递任意数据

class App extends React.Component {
  // 准备数据
  state = {
    msg: 'this is message',
    list: [1, 2, 3],
    userInfo: {
      name: 'cp',
      age: 18
    }
  }
  getMes = () => {
    console.log('父组件中的函数')
  }
  render () {
    return (
      <div>
        {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF list={this.state.list}
          userInfo={this.state.userInfo}
          getMes={this.getMes}
          child={<span>this is span</span>}></SonF>
        <SonC msg={this.state.msg}></SonC>
      </div>
    )
  }

}
export default App