import React, { Component } from 'react';
import axios from 'axios';

class AddPhoto extends Component {
    state = {
      username: '',
      selectedFile: null
    }

    fileChangedHandler = (event) => {
      this.setState({
        selectedFile: event.target.files[0],
        username: localStorage.getItem('username')
      })
    }

   // HOW TO AMKE THE UPLOAD HANDLER FUNCTION POST THE IMAGE TO THE IMAGES TABLE
   // WITH BOTH NEW ID AND MATCHING USER ID.
    uploadHandler = () => {
      console.log(this.state.selectedFile)
      // axios.post('/', {
      //   id:???
      //   user_id:???
      //   img_url: this.state.selectedFile
      // })
    }



//IF YOU CHANGE INPUT TYPE TO FILE YOU CAN SELET A FILE ON YOUR COMPUTER
// I ALSO ADDED PLACEHOLDER AS A URL SO THAT MAY NEED TO BE REMOVED
    render() {


        return (
          <div>
              <div className = 'addphoto'>
                 <h4>Add a photo here</h4>
                 <input type="file" onChange={this.fileChangedHandler} />
                 <button onClick={this.uploadHandler}>Upload!</button>
                  <div>
                    <img src ={this.state.selectedFile} alt = 'pic'/>
                  </div>
              </div>
          </div>
        )
      }
    }

    export default AddPhoto;
