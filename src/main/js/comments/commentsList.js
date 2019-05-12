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
        const showHideClassName = this.props.show ? "comments-box expanded" : "comments-box hidden";
        return(
            <div>
                <div className={showHideClassName}>
                <div>
                    {this.getComments()}
                </div>
                <div>
                    <CreateComment refresh={this.props.refresh} postId={this.props.postId}/>
                </div>
                </div>
            </div>

        )
    }

}

export default CommentsList;