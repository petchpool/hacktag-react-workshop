import React, { Component } from 'react'
import { createPost } from '../services/PostService'

class PostCreateContainer extends Component {

  state = {
    loading: false,
    statusMessage: null,
    userId: '',
    title: '',
    body: ''
  }

  _onCreate = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      loading: true
    })
    const { userId, title, body } = this.state
    const data = { userId, title, body }
    createPost(data, (res) => {
      console.log(res)
      this.setState({
        ...this.state,
        loading: false,
        statusMessage: 'บันทึกข้อมูลสำเร็จ',
        userId: '',
        title: '',
        body: ''
      })

    })
  }

  render() {
    const { loading, statusMessage, userId, body, title } = this.state
    return (
      <div>
        <h1>Create Form</h1>
        <form action="">
          <label>
            User ID
            <input type="text" value={userId} onChange={(e) => this.setState({ userId: e.target.value })} />
          </label> <br />
          <label>
            Title
            <input type="text" value={title} onChange={(e) => this.setState({ title: e.target.value })} />
          </label><br />
          <label>
            Body
            <input type="text" value={body} onChange={(e) => this.setState({ body: e.target.value })} />
          </label> <br />
          <button onClick={this._onCreate} disabled={loading}>Create</button>
          {
            statusMessage != null ? statusMessage : null
          }
        </form>
      </div>
    )
  }
}

export default PostCreateContainer