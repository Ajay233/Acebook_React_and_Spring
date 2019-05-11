import React from 'react'
import ExtractId from '../utils/extractId'
const client = require('../client');


class DeletePost extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props) {
        let postHref = this.props.postID._links.self.href;
        client({method: 'DELETE', path: '/api/posts/' + ExtractId(postHref)})
        this.props.update;
    }

    render() {
        return(
            <button className="post-button" onClick={this.handleClick}><i className="fas fa-trash-alt"></i> Delete Post</button>
        )
    }
}

export default DeletePost;
