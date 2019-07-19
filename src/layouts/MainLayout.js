import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import HomeContainer from '../containers/HomeContainer'
import AboutContainer from '../containers/AboutContainer'
import UserDetailContainer from '../containers/UserDetailContainer'
import PostContainer from '../containers/PostContainer'
import PostDetailContainer from '../containers/PostDetailContainer'
import PostCreateContainer from '../containers/PostCreateContainer'

class MainLayout extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/about" component={AboutContainer} />
        <Route exact path="/users/:id/:name" component={UserDetailContainer} />
        <Route exact path="/posts" component={PostContainer} />
        <Route exact path="/create/posts" component={PostCreateContainer} />
        <Route exact path="/posts/:id" component={PostDetailContainer} />
      </Router>
    )
  }
}

export default MainLayout