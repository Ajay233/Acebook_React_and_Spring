import React from 'react'
import ExtractId from '../utils/extractId'
import CommentsList from '../comments/commentsList'
const client = require('../client');

class CommentsBuilder extends React.Component {
    constructor(props){
        super(props)
        this.state = {comments: [], refresh: false}
        this.triggerUpdate = this.triggerUpdate.bind(this);
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
        }).catch(e => {
            console.log(e);
        });
    }

    // Commented out because this was causing a memory issue due to repeated requests. TO BE REFACTORED
    // componentDidUpdate() {
    //     client({method: 'GET', path: '/api/comments'}).then(response => {
    //         let filteredComments = [];
    //         for(let i = 0; i < response.entity._embedded.comments.length; i++){
    //             if(response.entity._embedded.comments[i].postid == ExtractId(this.props.post._links.self.href)){
    //                 filteredComments.push(response.entity._embedded.comments[i])
    //             }
    //         }
    //         this.setState({comments: filteredComments, refresh: false});
    //     }).catch(e => {
    //         console.log(e);
    //     });
    // }

    triggerUpdate(){
        this.setState({refresh: true})
    }


    render() {
        return(
            <CommentsList
                postId={ExtractId(this.props.post._links.self.href)}
                comments={this.state.comments}
                refresh={this.triggerUpdate}/>
        )
    }
}

export default CommentsBuilder;