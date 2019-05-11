const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

import PostsBuilder from './posts/postsBuilder'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {user: {}}
    }

    // Gets the sessions listed in the sessions table
    componentDidMount() {
        client({method: 'GET', path: '/api/sessions'}).then(response => {
            // Extract the session that matches the current authenticated username and save to state.user
            // let users = response.entity._embedded.sessions
            // client({method: 'GET', path: '/username'}).then(response =>{
            //     for(let i = 0; i < users; i++){
            //         if(users[i].email == response){
            //             this.setState({user: users[i]});
            //         }
            //     }
            // })
            this.setState({user: response.entity._embedded.sessions})
        }).catch(e => {
            console.log(e);
        });
    }

  render() {
    return (
        <div>
            <PostsBuilder userDetails={this.state}/>
            {console.log(this.state)}
        </div>

    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
