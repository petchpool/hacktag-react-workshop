import React, { Component } from 'react'

class UserDetailContainer extends Component {
  render() {
    const { id, name } = this.props.match.params
    const profile = `${id} ${name}`
    return (
      <div>
        User Detail {id} {name} <br />
        Profile {profile}
      </div>
    )
  }
}

export default UserDetailContainer