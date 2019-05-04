const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {showModal: false}
    }



  render() {
    return (
        <div>
            <PostsBuilder />
        </div>

    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
