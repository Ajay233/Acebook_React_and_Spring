import React from 'react'

class Comment extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="comment">
                {this.props.comment.comment}
                <hr/>
            </div>
        )
    }
}

export default Comment;