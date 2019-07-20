import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      {/*<li>
        <Link to="/create/posts">Create Post</Link>
      </li>*/}
    </ul>
  )
}


export default Header