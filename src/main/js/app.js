const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import CreatePost from './forms/createPost'

class App extends React.Component {

  render() {
    return (
        <div>
            <CreatePost />
            <PostsBuilder />
        </div>

    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
