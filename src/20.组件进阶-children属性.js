import React from "react"

function ListItem ({ children }) {
  // children()
  return (
    <div>
      ListItem, {children}
    </div>
  )
}

class App extends React.Component {
  render () {
    return (
      <div>
        <ListItem>
          {/* children属性表示该组件的子节点，只要组件内部有子节点 props中就有该属性 */}
          {/* <div>this is child</div> */}
          {/* {() => console.log(123)} */}
          {<div><p>{'this is p'}</p></div>}
        </ListItem>
      </div>
    )
  }

}
export default App
