import React from 'react';
import Posts from './posts'
const client = require('../client');

class PostsBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {posts: [], update: false};
    this.triggerupdate = this.triggerUpdate.bind(this);
  }

  // componentDidMount is a react lifecycle method
  // This executes once when this component is initialy rendered
  componentDidMount() {
    client({method: 'GET', path: '/api/posts'}).then(response => {
      this.setState({posts: response.entity._embedded.posts});
    });
  }

  componentDidUpdate() {
      client({method: 'GET', path: '/api/posts'}).then(response => {
          this.setState({posts: response.entity._embedded.posts, update: false});
      });
  }

  triggerUpdate(){
      this.setState({update: true})
  }

    render() {
		return (
      <Posts update={this.triggerUpdate} posts={this.state.posts}/>
		)
	}
}

export default PostsBuilder;
