import React, { Component } from 'react'

class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: false } //isLikedをstateに格納する、コンストラクタを実行する時、falseを設定した
  }

  handleClickOnLikeButton () {
    this.setState({
    isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
    <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '良いねした' : '良いね！'} 👍
    </button>
    )
  }
}

export default LikeButton;