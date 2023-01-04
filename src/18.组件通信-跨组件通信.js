import React, { createContext } from "react"
// context跨组件通信
// App->A->C
// App数据直接交给C
// 上层组件与下层组件的关系是相对只要存在就可以使用 通常会使用App作为数据提供方

// 导入createContext方法并执行
const context = createContext()
const { Provider, Consumer } = context

function ComA () {
  return (
    <div>
      this is ComA
      <ComC></ComC>
    </div>
  )
}

function ComC () {
  return (
    <div>
      this is ComC
      {/* 通过Consumer使用数据 */}
      <Consumer>
        {value => <span> {value}</span>}
      </Consumer>
    </div>
  )
}

class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render () {
    return (
      // 使用Provider
      <Provider value={this.state.message}>
        <div>
          <ComA></ComA>
        </div>
      </Provider>
    )
  }

}
export default App
