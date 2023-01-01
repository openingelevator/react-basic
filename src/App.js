import React from "react"

class App extends React.Component {

  render () {
    return (
      <div>
        <Son getSonMsg={this.getSonMsg}></Son>
      </div>
    )
  }

}
export default App
