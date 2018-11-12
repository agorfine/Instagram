import React, { Component } from 'react';
import axios from 'axios';

class AddPhoto extends Component {
  state = {
    user_id: '',
    img_url: '',
    caption: ''
  }

  handleInputChange(e){
    const value = e.target.value
   this.setState(prevState => ({
       img_url: value

    }));
    // console.log("this is state: ", this.state)
  }

  handleInputChangeCaption(e){
    const value = e.target.value
   this.setState(prevState => ({
       caption: value

    }));
    console.log("this is state: ", this.state)
  }


 uploadHandler(){
  const user_id = localStorage.getItem('user_id')
      axios.post('http://localhost:3001/finsta/pictures', {
        user_id: user_id,
        img_url: this.state.img_url,
        caption: this.state.caption
      })
      console.log('user_id img_url: ', user_id)
      console.log('imgurl: ', this.state.img_url)
    }


    render() {

        return (
          <div className= 'addphotoBox'>
            <h1 className= 'addphotoTitle'> Add Photo Page</h1>
            <label >
                <div className='field'>
                  <div>Add Photo with URL</div>
                  <input 
                    className= 'inputaddphoto'
                    type="text"
                    placeholder="URL Here"
                    value={this.state.img_url}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </div>
                <div className='field'>  
                  <div>Add a Caption</div>
                  <input
                    className= 'inputaddphoto'
                    type="text"
                    placeholder="Caption Here"
                    value={this.state.caption}
                    onChange={(e) => this.handleInputChangeCaption(e)}
                  />
                </div>  
            </label>
            <input className='submit2' type="submit" value="Submit!" onClick = {() => this.uploadHandler()}/>

          </div>
        )
      }
    }

    export default AddPhoto;
