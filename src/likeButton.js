import React, { Component } from 'react'

class LikeButton extends Component {
  static defaultProps = {
    likedText: '良いねした',
    unlikedText: '良いね！'
  }

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
    return (
    <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? this.props.likedText : this.props.unlikedText} 👍
    </button>
    )
  }
}

export default LikeButton;