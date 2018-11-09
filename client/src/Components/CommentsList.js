import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Comment from './Comment'

export default class comments extends Component{
  state = {
      user_id:'',
      comment:'',
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
      console.log('this is state: ', this.state)
  }

   async handleInputChange(e){
    const name = e.target.name
    const value = e.target.value
    await this.setState(prevState => ({
       [name]: value
    }));
    // console.log("this is state: ", this.state)
  }

  handleFormSubmit(e){
    e.preventDefault()
    // console.log('STATE', this.state)
    const picture_id = localStorage.getItem('picture_id')
    const user_id = localStorage.getItem('user_id')
    axios.post(`http://localhost:3001/finsta/comments/${picture_id}`, {
       picture_id: picture_id,
       user_id: user_id,
       comment: this.state.comment,
    })
    // .catch(err => console.log(err));
    // e.target.reset();
}

  renderComments() {
      console.log('this is state: ',this.state)
      if(this.state.apiDataLoaded) {
        return this.state.apiData.map(d => {
          return(
            <Comment key ={d.id} comment={d} />
          )
        })
      } else return <p>Loading...</p>
    }

  render(){
    return(
      <div>
        <div>
          {this.renderComments()}
        </div>
        <input
        type="text"
              placeholder="Add a comment..."
              name="comment"
              value={this.state.comment}
              onChange={(e) => this.handleInputChange(e)}
        />
        <input type="submit" value="Post" onClick={(e) => this.handleFormSubmit(e)} />
      </div>
    )
  }
}