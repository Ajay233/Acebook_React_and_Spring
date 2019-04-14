import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				<div className='post-title'>
					<span className='title'>{props.post.title}</span>
					<span className='time'>Posted at:{props.post.time}</span>
				</div>
				<span>{props.post.content}</span>
			</div>
		</div>
	)
}

export default Post;
