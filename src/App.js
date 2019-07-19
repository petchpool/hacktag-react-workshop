import React, { Component } from 'react'
import { convertIntToString, convertStringToInt } from './utils/globals'
import { requestUsers, requestUsers2 } from './services/UserService'

class App extends Component {

  state = {
    count: 1
  }

  // รูปแบบที่ 1
  _plusOne() {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  // รูปแบบที่ 2
  _plusOne2 = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  // รูปแบบที่ 2 แบบผ่านค่า
  _funcWithParam = (condition) => {
    const { count } = this.state
    if (condition === 'up') {
      this.setState({ count: count + 1 })
    } else {
      this.setState({ count: count - 1 })
    }
  }

  render() {
    return (
      <div>
        {this.state.count} <br />
        {/*<button onClick={() => this._plusOne()}>+1</button>*/}
        <button onClick={() => this._funcWithParam('up')}>+1</button>
        <br />
        <button onClick={() => this._funcWithParam('down')}>-1</button>

        {convertIntToString(10)} <br />
        {requestUsers()}
        {requestUsers2()}

      </div>
    )
  }
}

export default App