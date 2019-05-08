import React from 'react'
import Comment from './comment'
import CreateComment from './createComment'

class CommentsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    getComments(){
        return this.props.comments.map(comment =>
            <Comment key={comment._links.self.href} comment={comment} />
        )
    }

    render(){
        return(
            <div>
                <div id="comments-box">
                <div>
                    {this.getComments()}
                </div>
                <div>
                    <CreateComment postId={this.props.postId}/>
                </div>
                </div>
            </div>

        )
    }

}

export default CommentsList;