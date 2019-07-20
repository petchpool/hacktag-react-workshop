import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostDetail } from '../services/PostService'

class PostDetailContainer extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    const { saveCurrentPost } = this.props
    getPostDetail(id, res => {
      saveCurrentPost(res)
    })
  }

  _renderDetail = () => {
    const { currentPostLoading, currentPost } = this.props.postReducer
    if (!currentPostLoading) {
      return (
        <div>
          <h3>ID: {currentPost.id}</h3>
          <h3>Body: {currentPost.body}</h3>
        </div>
      )
    } else {
      return 'Loading...'
    }
  }

  render() {
    return (
      <div>
        <h1>Details</h1>
        <hr />
        {this._renderDetail()}
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
    saveCurrentPost: (post) =>
      dispatch({ type: 'SAVE_CURRENT_POST', post: post, loading: false })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer)