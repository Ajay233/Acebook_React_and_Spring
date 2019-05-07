import React from 'react'
const client = require('../client');

class Like extends React.Component{
    constructor(props){
        super(props)
        this.state = {likes: [], updated: false}
        this.handleClick = this.handleClick.bind(this);
    }

    extractId(href){
        const regex = /(?<=posts\/).+/;
        let str = href;
        let endOfPath = str.search(regex);
        let id = str.substr(endOfPath);
        return id
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/likes'}).then(response => {
            let likesForThisPost = [];
            for(let i = 0; i < response.entity._embedded.likes.length; i++){
                if (response.entity._embedded.likes[i].postId == this.extractId(this.props.post._links.self.href)){
                    likesForThisPost.push(response.entity._embedded.likes[i])
                }
            }
            this.setState({likes: likesForThisPost, updated: false});
        });
    }

    componentDidUpdate() {
        client({method: 'GET', path: '/api/likes'}).then(response => {
            let updatedLikesForThisPost = [];
            for(let x = 0; x < response.entity._embedded.likes.length; x++){
                if (response.entity._embedded.likes[x].postId == this.extractId(this.props.post._links.self.href)){
                    updatedLikesForThisPost.push(response.entity._embedded.likes[x])
                }
            }
            this.setState({likes: updatedLikesForThisPost, updated: false});
        });
    }

    // Extract the post id from the end of the href
    handleClick(e) {
        e.preventDefault();
        fetch('/api/likes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postId: this.extractId(this.props.post._links.self.href),
                userId: "",
                forename: "",
                surname: ""
            })
        });
        this.setState({ updated: true });
    }

    render() {
        return(
            <span><button onClick={this.handleClick}>Like</button> {this.state.likes.length}</span>
        )
    }

}

export default Like;