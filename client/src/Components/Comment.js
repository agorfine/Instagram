import React, { Component } from 'react';

export default class Comment extends Component{

  render(){

    return(

      <div className="commentContainer">
        <img className='userImg' src={this.props.comment.profpic_url} alt="UserImg"/>
        <div className="likesCaptionContainer">
          <div className = "username">{this.props.comment.username}</div>
          <div>{this.props.comment.comment}</div>
        </div>
      </div>
    )

  }
}
