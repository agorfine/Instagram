import React, { Component } from 'react';
import axios from 'axios';
import '../css/login.css'

export default class LogInPage extends Component {
  state = {
    username: '',
    password:'',
    availableUser: [],
    fireRedirect:false,
  }

componentDidMount() {
    axios.get('http://localhost:3001/finsta/userauth')
      .then( res => {
          this.setState(prevState => ({
          availableUser: res.data.data
            })
         )
      console.log(res.data.data)
    })
   }

  // checkForUser(){
  //     if(this.state.username == this.state.availableUser){
  //     alert('route to the newsfeed')
  //    } else {
  //     console.log('no match go to create')
  //    }
  //   }


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
    axios.post('http://localhost:3001/finsta/userauth',  {
       username: this.state.username,
       password: this.state.password,
    }).then(res => {
      this.setState({
        fireRedirect:true
      })
    })
    console.log(this.state.username)
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
      </div>
    )
  }
}
