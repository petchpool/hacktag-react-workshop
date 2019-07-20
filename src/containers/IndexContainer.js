import React, { Component } from 'react'
import CountButton from '../components/CountButton/CountButton'
import { connect } from 'react-redux'

class IndexContainer extends Component {
  render() {
    const { count } = this.props.global
    return (
      <div>
        COUNT NUMBER: {count} <br />
        <CountButton condition="down" />
        <CountButton condition="up" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    global: state.global
  }
}

export default connect(mapStateToProps)(IndexContainer)