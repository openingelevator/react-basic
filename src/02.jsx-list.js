// 列表渲染
// map重复渲染的是哪个模板就返回谁
// 遍历列表时同样需要一个类型为number/string的不可重复的key 提高diff的性能
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
    return (
      <div className="App">
        <ul>
          {songs.map(song=><li key={song.id}>{song.name}</li>)}
        </ul>

      </div>
    );
  }
  
  export default App;
  