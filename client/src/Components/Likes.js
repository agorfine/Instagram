import React, { Component } from 'react';

export default class Likes extends Component{
  render(){
    console.log("this.props.like: ",this.props.like)
    return(
      <div className="commentContainer">
        <img className='likesUserImg' src={this.props.like.profpic_url} alt="UserImg"/>
        <div className="likesCaptionContainer">
          <div className = "userameFullNameContainer">
            <span className = "usernameComment">{this.props.like.username}</span>
            <div className = "likesFullName">
              {this.props.like.full_name}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
