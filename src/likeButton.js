import React, { Component } from 'react'

class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
    isLiked: !this.state.isLiked
    })
  }

  render () {
    const likedText = this.props.likedText || '良いねした'
    const unlikedText = this.props.unlikedText || '良いね！'
    return (
    <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? likedText : unlikedText} 👍
    </button>
    )
  }
}

export default LikeButton;