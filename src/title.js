import React, { Component } from 'react';

class Title extends Component {
  handleClickOnTitle(){
    console.log('Click on title.')
  }
  render () {
    return (
      <h1 onClick={this.handleClickOnTitle}>This is title component</h1>
    )
  }
}

export default Title;