import React from "react"
// 事件绑定
// on+事件名称={事件处理程序}
// onFocus onMouseEnter
function HelloFn () {
  // 获取事件对象e
  const clickHandler = (e) => {
    // 阻止默认行为
    e.preventDefault()
    console.log('函数组件中的事件被触发了', e)
  }
  return <div onClick={clickHandler}><a href="http://baidu.com">百度</a></div>
}

class HelloComponent extends React.Component {
  // 事件回调函数标准写法，避免this指向问题
  // 这样写 回调函数中的this指向的是当前的组件实例对象
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }
  render () {
    return <div onClick={this.clickHandler}>HelloComponent</div>
  }
}

// 事件绑定传递额外参数
// 如何传递自定义参数
// 1.只需要一个额外参数 {clickHandler}->{()=>clickHandler('自定义参数')}
// 2.既需要e也需要额外的参数 {(e)=>clickHandler(e,'自定义参数')}
function Hello () {
  const clickHandler = (e, msg) => {
    console.log('函数组件的事件被触发了', e, msg)
  }
  return <div onClick={(e) => clickHandler(e, 'this is message')}>hello</div>
}
function App () {
  return (
    <div className="App">
      <HelloFn></HelloFn>
      <HelloComponent />
      <Hello></Hello>
    </div>
  )
}

export default App
