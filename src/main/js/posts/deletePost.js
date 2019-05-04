import React from 'react'
const client = require('../client');


class DeletePost extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props) {
        const regex = /(?<=posts\/).+/;
        let str = this.props.postID._links.self.href;
        let endOfPath = str.search(regex);
        let id = str.substr(endOfPath);
        client({method: 'DELETE', path: '/api/posts/' + id})
        window.location.reload();
    }

    render() {
        return(
            <button onClick={this.handleClick}>Delete Post</button>
        )
    }
}

export default DeletePost;
