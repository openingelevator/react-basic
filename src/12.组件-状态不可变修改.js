import React from "react"
class Counter extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    Person: {
      name: 'jack',
      age: '18'
    }
  }
  changeState = () => {
    // 基于当前的状态创建新值
    // 合并修改
    // this.setState({
    //   count: this.state.count + 1,
    //   list: [...this.state.list, 4, 5],
    //   Person: {
    //     ...this.state.Person,
    //     // 覆盖原来的属性达到修改的目的
    //     name: 'rose'
    //   }
    // })

    // 删除-filter
    this.setState({
      list: this.state.list.filter(item => item !== 2)

    })
  }
  render () {
    return (
      <>
        <ul>
          {this.state.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div>{this.state.Person.name}</div>
        <button onClick={this.changeState}>{this.state.count}click</button>
      </>
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
