import React from 'react';
import DeletePost from './deletePost'

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-title'>
				<span className='title'>Title: {props.post.title}</span>
				<span className='time'>Posted at: {props.post.time}</span>
			</div>
			<div className='post-content'>
				<span>{props.post.content}</span>
			</div>
			<div>
				<DeletePost postID={props.post}/>
			</div>
		</div>
	)
}

export default Post;
