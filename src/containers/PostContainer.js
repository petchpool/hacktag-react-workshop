import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deletePost, getPost } from '../services/PostService'
import { connect } from 'react-redux'

class PostContainer extends Component {

  componentDidMount() {
    const { savePosts } = this.props
    getPost(res => {
      savePosts(res)
    })
  }

  _onDeletePost = (id) => {
    deletePost(id, res => {
      console.log(res)
      alert(`คุณได้ดำเนินการลบข้อมูลไอดี ${id} เรียบร้อยแล้ว`)
    })
  }

  _renderPosts = () => {
    const { postLoading, posts } = this.props.postReducer
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
    return (
      <div>
        <h1>Posts</h1>
        {this._renderPosts()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postReducer: state.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    savePosts: (posts) =>
      dispatch({ type: 'SAVE_POST', posts: posts, loading: false })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)