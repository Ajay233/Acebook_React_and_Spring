import React from 'react'
import ExtractId from '../utils/extractId'
const client = require('../client');

class Like extends React.Component{
    constructor(props){
        super(props)
        this.state = {likes: [], count: 0}
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/likes'}).then(response => {
            let likesForThisPost = [];
            for(let i = 0; i < response.entity._embedded.likes.length; i++){
                if (response.entity._embedded.likes[i].postId == ExtractId(this.props.post._links.self.href)){
                    likesForThisPost.push(response.entity._embedded.likes[i])
                }
            }
            this.setState({likes: likesForThisPost, count: likesForThisPost.length});
        });
    }
    
    handleClick(e) {
        e.preventDefault();
        fetch('/api/likes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postId: ExtractId(this.props.post._links.self.href),
                userId: "",
                forename: "",
                surname: ""
            })
        });
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return(
            <span><button onClick={this.handleClick}>Like</button> {this.state.count}</span>
        )
    }

}

export default Like;