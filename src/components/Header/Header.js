import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
  const { changeMyName } = props
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/create/posts">Create Post</Link>
      </li>
      <button onClick={() => changeMyName('Hello, Wisit Phusi.')}>Change My Name</button>
    </ul>
  )
}

const mapDispatchToProps = dispatch => ({
  changeMyName: (name) => dispatch({ type: 'CHANGE_MY_NAME', name })
})

export default connect(null, mapDispatchToProps)(Header)
