import React, { Component } from 'react';

export default class Comment extends Component{

  render(){

    return(
      <div>
        <div>{this.props.comment.username}</div>
        <div>{this.props.comment.comment}</div>
      </div>
    )

  }
}
