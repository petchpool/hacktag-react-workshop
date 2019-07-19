import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deletePost, getPost } from '../services/PostService'
import { connect } from 'react-redux'

class PostContainer extends Component {

  state = {
    postLoading: true,
    posts: []
  }

  componentDidMount() {
    getPost(res => {
      this.setState({
        posts: res,
        postLoading: false
      })
    })
  }

  _onDeletePost = (id) => {
    deletePost(id, res => {
      console.log(res)
      alert(`คุณได้ดำเนินการลบข้อมูลไอดี ${id} เรียบร้อยแล้ว`)
    })
  }

  _renderPosts = () => {
    const { postLoading, posts } = this.state
    if (!postLoading) {
      return <ul>
        {
          posts.map((post, key) => (
            <li key={key}>
              <button onClick={() => this._onDeletePost(post.id)}>Delete</button>
              UserId: {post.userId},
              Id: {post.id},
              Title: {post.title}
              <Link to={'/posts/' + post.id}>Show Details</Link>
            </li>
          ))
        }
      </ul>
    } else {
      return 'Loading...'
    }
  }

  render() {
    const { myName } = this.props
    return (
      <div>
        <h1>Posts</h1>
        <h4>{myName}</h4>
        {this._renderPosts()}
      </div>
    )
  }
}

const mapStateToProps = ({ global }) => {
  console.log(global)
  return {
    myName: global.myName
  }
}

export default connect(mapStateToProps)(PostContainer)