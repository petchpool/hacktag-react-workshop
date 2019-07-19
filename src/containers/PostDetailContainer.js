import React, { Component } from 'react'
import { getPostDetail } from '../services/PostService'

class PostDetailContainer extends Component {

  state = {
    loading: true,
    postDetails: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    getPostDetail(id, res => {
      this.setState({
        postDetails: res,
        loading: false
      })
    })
  }

  _renderDetail = () => {
    const { loading, postDetails } = this.state
    if (!loading) {
      return (
        <div>
          <h3>ID: {postDetails.id}</h3>
          <h3>Body: {postDetails.body}</h3>
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

export default PostDetailContainer