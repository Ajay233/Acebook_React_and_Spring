import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				<span>{props.post.title}</span>
				<span>{props.post.content}</span>
				<span>{props.post.time}</span>
			</div>
		</div>
	)
}

export default Post;
