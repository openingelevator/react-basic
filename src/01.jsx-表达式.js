// 识别常规变量
const name = '张三'
// 原生js方法调用
const getAge =()=>{
  return 18
}
// 三元运算符
const flag = true

function App() {
    return (
      <div className="App">
        {name}
        {getAge()}
        {flag ? 'good':'bad'}
      </div>
    );
  }
  
  export default App;