import React from 'react'
const client = require('../client');

class CreatePost extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
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
        this.refs.content.value="";
        this.refs.title.value="";
        window.location.reload();
    }


    render() {
        return(
            <div>
                <div className="modal-header">
                    <h1>Create your post below</h1>
                </div>
                <div className="modal-body">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label> Title:
                                <input className="field" ref="title" id="title" name="title" type="text" />
                            </label>
                        </div>
                        <div>
                            <label> Content:
                                <input className="field" ref="content" id="content" name="content" type="text" />
                           </label>
                        </div>
                        <input className="button" type="submit" name="Submit Post"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreatePost;