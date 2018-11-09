import React, { Component } from 'react';
import axios from 'axios';

class AddPhoto extends Component {
  state = {
    user_id: '',
    img_url: ''
  }

  handleInputChange(e){
    const value = e.target.value
   this.setState(prevState => ({
       img_url: value
    }));
    // console.log("this is state: ", this.state)
  }


 uploadHandler(){
  let user_id = localStorage.getItem('user_id')
      axios.post('http://localhost:3001/pictures', {
        user_id: user_id,
        img_url: this.state.img_url
      })
    }


    render() {

        return (
          <div>
              <h1> Add Photo Page</h1>
              <label>
            Add Photo with URL
            <input
              type="text"
              placeholder="URL HERE"
              value={this.state.img_url}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input type="submit" value="Submit!" onClick = {() => this.uploadHandler()}/>

          </div>
        )
      }
    }

    export default AddPhoto;
