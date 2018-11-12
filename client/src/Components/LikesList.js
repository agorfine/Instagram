import React, { Component } from 'react';
import Likes from './Likes';

export default class LikesList extends Component{
  state = {
      user_id:'',
      picture_id:'',
      apiDataLoaded: true,
      apiData: this.props.location.state.likesData,
    }

  renderLikes() {
      console.log('this is props.location.state: ',this.state.apiData)
      if(this.state.apiDataLoaded) {
        return this.state.apiData.map(d => {
          return(
            <Likes key={d.id} like={d}/>
          )
        })
      } else return <p>Loading...</p>
    }

  render(){
    return(
      <div className="commentsList">
          {this.renderLikes()}
      </div>
    )
  }
}
