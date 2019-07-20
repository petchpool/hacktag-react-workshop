import React from 'react'
import { connect } from 'react-redux'

const CountButton = (props) => {
  const { condition, onCountUp, onCountDown } = props
  console.log(props)
  return (
    <div>
      <button onClick={condition === 'up' ? () => onCountUp(10) : onCountDown}>
        {condition === 'up' ? '+1' : '-1'}
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCountUp: (number) => dispatch({ type: 'COUNT_UP', number }),
    onCountDown: () => dispatch({ type: 'COUNT_DOWN', number: 1 })
  }
}

export default connect(null, mapDispatchToProps)(CountButton)
