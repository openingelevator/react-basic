import { Outlet } from "react-router-dom"
function Layout () {
  return (
    <div>
      layout
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  )
}

export default Layout