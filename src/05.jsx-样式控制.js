import './app.css';
// jsx样式控制
// 1.行内样式-在元素身上绑定style属性
const style={
  color:'red',fontSize:'30px'
}
// 2.类名样式-在元素身上绑定一个className属性即可

const activeFlag = true
function App() {
  return (
    <div className="App">
      <span style={style}>this is span</span>
      <span className={activeFlag ? 'active':''}>测试类名属性</span>
    </div>
  );
}

export default App;