import { useSearchParams } from "react-router-dom"
import { useParams } from "react-router-dom"

function About () {
  // const [params] = useSearchParams()
  // console.log(params)
  // params是一个对象 对象里有一个get方法
  // 获取对应的参数
  // 把参数的名称作为get方法的实参传过来
  // const id = params.get('id')
  // const name = params.get('name')

  const params = useParams()
  console.log(params)
  return (
    <div>about:得到的参数id值为{params.id}
      <br></br>
      {/* 得到的参数name值为{name} */}
    </div>
  )
}

export default About