import React from 'react'
const client = require('../client');

class CreatePost extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        {console.log(data)}
        fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: this.refs.content.value,
                title: this.refs.title.value,
            })
        });

    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Title:
                        <input ref="title" id="title" name="title" type="text" />
                    </label>
                    <label> Content:
                        <input ref="content" id="content" name="content" type="text" />
                    </label>
                    <input type="submit" name="Submit Post"/>
                </form>
            </div>
        );
    }
}

export default CreatePost;