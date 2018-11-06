import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../css/login.css'

export default class NewAccount extends Component {
  state = {
    username: '',
    password:'',
    full_name: '',
    phone: '',
    fireRedirect: false
  }


  handleInputChange(e){
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
       [name]: value
    }))
  }


  // the event for a form is...onSubmit
  handleFormSubmit(e){
    e.preventDefault()
    axios.post('/', {
       username: this.state.username,
       password: this.state.password,
    }).then(res => {
      this.setState({
        newId: res.data.data.id,
        fireRedirect:true
      })
  })
}


  render() {
  return(
    <div classusername="login">
       <h1>Create Account Page</h1>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              username="username"
              value={this.state.username}
              onChange={(e) => this.handleInputChange(e)}
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
          <label>
            Full Name
            <input
              type="text"
              placeholder="Full Name"
              username="username"
              value={this.state.username}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              placeholder="Phone"
              username="username"
              value={this.state.username}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/newsfeed`} />
          : ''}
      </div>
    )
  }
}
