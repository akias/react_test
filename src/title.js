import React, { Component } from 'react';

class Title extends Component {
  handleClickOnTitle(str){
    alert(`${str} click on title.`)
  }
  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this, 'Do not')}>This is title component</h1>
    )
  }
}

export default Title;