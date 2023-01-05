import React from "react"
// 引入两个组件
import Home from "./Home"
import About from "./About"

import { HashRouter, BrowserRouter, Link, Routes, Route } from 'react-router-dom'
// 核心组件BrowserRouter
// 作用：包裹整个应用
// 两种常用Router
// HashRouter 使用URL的哈希值实现
// BrowserRouter 使用H5的history.pushState API实现

// Link组件
// 用于指定导航链接 完成路由跳转

// Routes
// 提供一个路由出口 满足条件的路由组件就会渲染到组件内部
// Route
// 指定导航链接 完成路由跳转
// path属性指定匹配的路径地址 element属性指定要渲染的组件
function App () {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
