import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../css/login.css'

export default class LogInPage extends Component {
  state = {
    username: '',
    password:'',
    fireRedirect:false,
    availableUser: null
  }

componentDidMount() {
    axios.get('http://localhost:3001/finsta/userauth')
      .then( res => {
        this.setState(prevState => ({
          availableUser: res.data.data
        }))
      })
  }

  // checkForUser(){
  //   this.state.availableUser.map((d, i) => {
  //     if(d.username = this.state.username){
  //       if(d.password = this.state.password){

  //       }
  //     }
  //   })
  // }
  // this handles onChange ev


  handleInputChangeUsername(e){
    console.log(e.target.value)
    const value= e.target.value
    this.setState(prevState => ({
        username: value,
    }))
  }

  handleInputChange(e){
    console.log(e.target.value)
    const value= e.target.value
    this.setState(prevState => ({
        password: value
    }))
  }


  // the event for a form is...onSubmit
  handleFormSubmit(e){
    // stop form from refreshing the page
    e.preventDefault()
    axios.post('http://localhost:3001/finsta/userauth',  {
       username: this.state.username,
       password: this.state.password,
    }).then(res => {
      this.setState({
        fireRedirect:true
      })

    console.log(this.state.username)
    console.log(this.state.password)
    console.log(this.state.availableUser)
    console.log(this.state.availablePassword)
    })
  }

  render() {
  return(
    <div classusername="login">
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            Username
            <input
              type="text"
              placeholder="User username"
              username="username"
              value={this.state.username}
              onChange={(e) => this.handleInputChangeUsername(e)}
            />
          </label>
          <label>
            Password
            <input
              type="text"
              placeholder="Password"
              username="password"
              value={this.state.password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/`} />
          : ''}
      </div>
    )
  }
}
