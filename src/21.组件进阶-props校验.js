import React from "react"
// 里面有各种各样的校验规则
import PropTypes from 'prop-types'
// pros属性校验
// 常见规则
// 常见类型：array bool func number object string
// React元素类型：element
// 必填项：isRequired
// 特定结构对象：shape({})
function Test ({ list }) {
  return (
    <div>
      {list.map(item => <p key={item}>{item}</p>)}
    </div>
  )
}
Test.propTypes = {
  // 定义规则
  list: PropTypes.array.isRequired // 限定list参数的类型必须是数组类型
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Test list={[2, 3, 4]}></Test>
      </div>
    )
  }

}
export default App
