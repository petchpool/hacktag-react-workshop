import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexContainer from '../containers/IndexContainer'
import Header from '../components/Header/Header'
import PostContainer from '../containers/PostContainer'
import PostDetailContainer from '../containers/PostDetailContainer'

class MainLayout extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={IndexContainer} />
        <Route exact path="/posts" component={PostContainer} />
        <Route exact path="/posts/:id" component={PostDetailContainer} />
      </Router>
    )
  }
}

export default MainLayout