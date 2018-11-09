import React, { Component } from 'react';
import Camera from 'react-camera';
import '../css/camera.css';
import axios from 'axios';

export default class CameraTest extends Component {
   state = {
    picture: null,
    username: ''
   }

  takePicture() {
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
    this.setState({
      picture: this.img.src,
      username: localStorage.getItem('username')
    })
    console.log(this.state.picture)
  }

  uploadHandler(){
      axios.post('/pictures', {
        user_id: this.state.username,
        img_file: this.state.picture
      })
    }
// <button onClick ={() => this.uploadHandler()}> SEND TO PSQL </button>
  render() {
    return (
      <div className ='container'>
        <Camera
          style={style.preview}
          className ='preview'
          ref={(cam) => {
            this.camera = cam;
          }}
        >
        </Camera>

          <div className ='captureContainer' onClick={() => this.takePicture()}>
            <button className ='captureButton'> CAPTURE </button>
        </div>
         <img
          className ='captureImage'
          onClick ={() => this.uploadHandler()}
          ref={(img) => {this.img = img;}}
        />
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'relative',
  }  
};
