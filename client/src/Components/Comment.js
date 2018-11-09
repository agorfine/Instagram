import React, { Component } from 'react';

export default class Comment extends Component{

  render(){

    return(
      <div className="usernameCaption">
        <div className = "username">{this.props.comment.username}</div>
        <div>{this.props.comment.comment}</div>
      </div>
    )

  }
}
