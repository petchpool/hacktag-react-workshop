import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <button className="Button" onClick={() => alert('Hello, World.')}>
      Button
    </button>
  )
}

export default Button
