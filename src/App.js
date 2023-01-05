// 一级路由
import Login from "./Login"
import Layout from "./Layout"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Board from "./Board"
import Article from "./Article"
import NotFound from "./NotFound"

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          {/* 定义二级路由嵌套 */}
          {/* 添加index 该组件会成为默认渲染的二级路由 */}
          <Route index path="board" element={<Board></Board>}></Route>
          <Route path="article" element={<Article></Article>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        {/* 当所有路径都没有匹配时 显示未找到 */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
