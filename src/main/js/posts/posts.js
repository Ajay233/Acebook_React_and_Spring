import React from 'react';
import Post from './post'
import CreatePost from '../forms/createPost'
import Modal from '../modal/modal'
import NavBar from '../navbar/navBar'


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false}

    this.getPosts = this.getPosts.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(){
      this.setState({show: true})
  }

  closeModal(){
      this.setState({show: false})
  }

	render() {
		return (
      <article className='posts-main'>
          <NavBar handleClose={this.showModal}>
              <li>
              <button className="hidden-button" onClick={this.showModal}>Create a Post</button>
              </li>
          </NavBar>
          <center>
            <h1 className='posts-title'>
            Welcome to Acebook Posts
            </h1>
          </center>
          <Modal show={this.state.show} handleClose={this.closeModal}>
              <CreatePost update={this.props.update}/>
          </Modal>
  			<div className='posts-items'>
  				{this.getPosts()}
  			</div>
      </article>
		)
	}

  getPosts() {
    return this.props.posts.map(post =>
			<Post key={post._links.self.href} post={post} update={this.props.update} />
		);
  }
}

export default Posts;
