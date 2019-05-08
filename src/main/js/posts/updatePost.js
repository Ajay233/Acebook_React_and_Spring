import React from 'react'
import ExtractId from '../utils/extractId'


class UpdatePost extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let postHref = this.props.postID._links.self.href;
        e.preventDefault();
        fetch('/api/posts/' + ExtractId(postHref), {
            method: 'PUT',
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
        this.props.update;
        window.location.reload();
    }


    render() {
        return(
            <div>
                <div className="modal-header">
                    <h1>Update your post below</h1>
                </div>
                <form className="modal-body" onSubmit={this.handleSubmit}>
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
                    <hr/>
                    <input className="button" type="submit"/>
                </form>
            </div>
        )
    }

}

export default UpdatePost;