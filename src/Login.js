// 导入useNavigate
import { useNavigate } from "react-router-dom"

function Login () {
  // // 2.执行useNavigate得到一个跳转函数
  // const navigate = useNavigate()
  // // 跳转到关于页
  // function goAbout () {
  //   // navigate('/about?id=1001&name=cp', { replace: true })
  //   navigate('/about/1001', { replace: true })
  // }
  return (
    <div>
      login
      {/* <button onClick={goAbout}>跳到关于页</button> */}
    </div>
  )
}
export default Login