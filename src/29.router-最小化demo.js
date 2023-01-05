import React from "react"
// 引入两个组件
import Home from "./Home"
import About from "./About"

import Login from "./Login"

// 进行路由配置
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

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
    // 声明当前要用一个非hash模式的路由
    <BrowserRouter>
      {/* 指定跳转的组件 to用来配置路由地址 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      {/* 路由出口 路由对应的组件会在这里进行渲染 */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about/:id' element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App