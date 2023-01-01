// 函数组件的创建与渲染
// 组件名称需要大写
// 函数组件必须要有返回值，否则返回null
// 使用函数名称作为组件标签名称，可以成对出现也可以自闭合
// 创建
function Hello () {
  return <div>hello</div>
}
function App () {
  return (
    <div className="App">
      <div>
        {/* 渲染hello组件 */}
        <Hello />
        <Hello></Hello>
      </div>
    </div>
  )
}

export default App