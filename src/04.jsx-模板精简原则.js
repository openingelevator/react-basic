// 原则：模板中的逻辑尽量保持精简
// 复杂多分支的逻辑收敛为一个函数，通过一个专门的函数写分支逻辑
const getHtag = (type) => {
    if (type === 1) {
      return <h1>this is h1</h1>
    }
    if (type === 2) {
      return <h2>this is h2</h2>
    }
    if (type === 3) {
      return <h3>this is h3</h3>
    }
  }
  
  
  function App() {
    return (
      <div className="App">
        {getHtag(1)}
        {getHtag(2)}
        {getHtag(3)}
      </div>
    );
  }
  
  export default App;