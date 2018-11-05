import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class LogInPage extends Component {
  state = {
    name: '',
    password:'',

  }

  // this handles onChange ev
  handleInputChange(e){
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]:value
    }))
  }

  // the event for a form is...onSubmit
  handleFormSubmit(e){
    // stop form from refreshing the page
    e.preventDefault()
    axios.post('/users',  {
       username: this.state.name,
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
    <div className="add">
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            Username
            <input
              type="text"
              placeholder="User Name"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Password
            <input
              type="text"
              placeholder="Password"
              name="password"
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
