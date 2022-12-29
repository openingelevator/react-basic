// 条件渲染
// 三元表达式，逻辑与运算
const flag = true

function App() {
    return (
      <div className="App">
  
        {flag ? 
        (<div>
          <span>
            this is a span
            </span>
          </div>):null}
  
          {true && 
          <span>
            this is a span
          </span>}
  
      </div>
    );
  }
  
  export default App;