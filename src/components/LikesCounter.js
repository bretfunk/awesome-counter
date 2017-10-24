import React, { Component } from 'react';
import ActionButton from './action-button'

class LikesCounter extends Component {
  constructor(props) {
    super(props)
      this.state = {
        likes: props.initialLikes
      }
  }

  modifyLikes(value) {
    this.setState({
      likes: parseInt(this.state.likes) + value
    })
  }

  handleLike() {
    this.modifyLikes(1)
  }
  handleDislike() {
    this.modifyLikes(-1)
  }

  render() {
    return  (
        <div>
        <h1>Likes total: {this.state.likes}</h1>
      <ActionButton
      text="Like +1"
      onClick={this.handleLike.bind(this)}
      />
      <ActionButton
      text="Dislike -1"
      onClick={this.handleDislike.bind(this)}
      />
      </div>
        )
  }
}

export default LikesCounter
