import React from 'react';
import DeletePost from './deletePost'
import UpdatePost from './updatePost'
import Modal from '../modal/modal'
import Like from './like'
import CommentsBuilder from '../comments/commentsBuilder'

class Post extends React.Component {
	constructor(props) {
		super(props)
		this.state = {show: false}

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	showModal(){
		this.setState({
			show: true
		});
	}

	closeModal(){
		this.setState({show: false});
	}

	render(){
		return (
			<div className='post-main'>
				<center>
				<div className='post-title'>
					<span className='title'><strong>Title:</strong> {this.props.post.title}</span>
					<span className='time'><strong>Posted at:</strong> {this.props.post.time}</span>
				</div>
				<div className='post-content'>
					<span>{this.props.post.content}</span>
				</div>
				<div>
					<Like post={this.props.post}/>
					<button className="post-button" type="button" onClick={this.showModal}><i className="far fa-edit"></i> Update Post</button>
					<Modal show={this.state.show} handleClose={this.closeModal}>
						<UpdatePost update={this.props.update} postID={this.props.post} />
					</Modal>
					<button className="post-button" type="button"><i className="far fa-comment-alt"></i> Comment</button>
					<DeletePost update={this.props.update} postID={this.props.post}/>
				</div>
				<div>
					<CommentsBuilder post={this.props.post}/>
				</div>
				</center>
			</div>
		)
	}

}

export default Post;
