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
      picture: this.img,
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

  render() {
    return (
      <div className ='container'>
        <Camera
          className ='preview'
          ref={(cam) => {
            this.camera = cam;
          }}
        >
          <div className ='captureContainer' onClick={() => this.takePicture()}>
            <div className ='captureButton' />
          </div>
        </Camera>
        <img
          className ='captureImage'
          ref={(img) => {this.img = img;}}
        />
        <button onClick ={() => this.uploadHandler()}> SEND TO PSQL </button>
      </div>
    );
  }
}
