import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Comment from './Comment'

export default class comments extends Component{
  state = {
      apiDataLoaded: false,
      apiData: [],
    }

  componentDidMount() {
  const picture_id = localStorage.getItem('picture_id')

  axios.get(`/comments/${picture_id}`)
    .then((res) => {
      console.log('this is res: ', res.data.data);
      console.log('this is state: ', this.state)
      const data = res.data.data;
      this.setState({
        apiData: data,
        apiDataLoaded:true
      })
    })
      .catch(err => console.log(err));
      console.log(this.props.match.params.id)
      console.log('this is state: ', this.state)
  }


renderComments() {
    console.log('this is state: ',this.state)
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(d => {
        return(
          <Comment key ={d.picture_id} comment={d} />
        )
      })
    } else return <p>Loading...</p>
  }

  render(){
    return(
      <div>
        {this.renderComments()}
      </div>
    )
  }
}
