import React from 'react';
import DeletePost from './deletePost'
import UpdatePost from './updatePost'
import Modal from '../modal/modal'
import Like from './like'

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
				<div className='post-title'>
					<span className='title'>Title: {this.props.post.title}</span>
					<span className='time'>Posted at: {this.props.post.time}</span>
				</div>
				<div className='post-content'>
					<span>{this.props.post.content}</span>
				</div>
				<div>
					<DeletePost postID={this.props.post}/>
					<button type="button" onClick={this.showModal}>Update Post</button>
					<Modal show={this.state.show} handleClose={this.closeModal}>
						<UpdatePost postID={this.props.post}/>
					</Modal>
					<Like post={this.props.post}/>
				</div>
			</div>
		)
	}

}

export default Post;
