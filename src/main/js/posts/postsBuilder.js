import React from 'react';
import Posts from './posts'
const client = require('../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: []};
  }

  // componentDidMount is a react lifecycle method
  // This executes once when this component is initialy rendered
  componentDidMount() {
    client({method: 'GET', path: '/api/posts'}).then(response => {
      this.setState({posts: response.entity._embedded.posts});
    });
  }

	render() {
		return (
      <Posts posts={this.state.posts}/>
		)
	}
}

export default PostsBuilder;
