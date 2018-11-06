import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../css/login.css'

export default class NewAccount extends Component {
  state = {
    username: '',
    password:'',
    passwordConfirmed:''
  }

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
    e.preventDefault()
    axios.post('http://localhost:3001/finsta', {
       username: this.state.username,
       password: this.state.password,
    }).then(res => {
      if(res.data.data === 'good pass'){
      this.setState({
        fireRedirect:true,
      })} else {
       this.setState({
        fireCreateAccount:true,
      })
      }
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
          ? <Redirect push to={`/newsfeed`} />
          : ''}
      </div>
    )
  }
}
