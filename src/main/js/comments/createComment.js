import React from 'react'

class CreateComment extends React.Component {
    constructor(props){
        super(props)
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postid: this.props.postId,
                userid: 1, //This needs to be changed once sessions is implimented, for test purposes only
                comment: this.refs.content.value,
            })
        });
        this.props.refresh;
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Comment:
                        <input className="comment-input" type="text" id="content" name="content" ref="content"/>
                    </label>
                    <button className="button" type="submit" name="Submit Post">Comment</button>
                </form>
            </div>
        )
    }

}

export default CreateComment;