import React from 'react'
import ExtractId from '../utils/extractId'
import CommentsList from '../comments/commentsList'
const client = require('../client');

class CommentsBuilder extends React.Component {
    constructor(props){
        super(props)
        this.state = {comments: []}
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/comments'}).then(response => {
            let filteredComments = [];
            for(let i = 0; i < response.entity._embedded.comments.length; i++){
                if(response.entity._embedded.comments[i].postid == ExtractId(this.props.post._links.self.href)){
                    filteredComments.push(response.entity._embedded.comments[i])
                }
            }
            this.setState({comments: filteredComments});
        })
    }


    render() {
        return(
            <CommentsList
                postId={ExtractId(this.props.post._links.self.href)}
                comments={this.state.comments}/>
        )
    }
}

export default CommentsBuilder;