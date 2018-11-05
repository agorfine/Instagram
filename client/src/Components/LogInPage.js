import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class LogInPage extends Component {
  state = {
    username: '',
    password:''
  }

  // this handles onChange ev
  handleInputChange(e){
    console.log(e.target.value)
    const username = e.target.username
    const value = e.target.value
    this.setState(prevState => ({
      [username]:value
    }))
  }

  // the event for a form is...onSubmit
  handleFormSubmit(e){
    // stop form from refreshing the page
    e.preventDefault()
    axios.post('/users',  {
        username: this.state.username,
        password: this.state.desc,
        phonenumber:this.state.phonenumber,
        name:this.state.name,
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
            User Name
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Password
            <input
              type="text"
              placeholder="Password"
              name="desc"
              value={this.state.password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Phone Number
            <input
              type="number"
              placeholder="Phone Number"
              name="phonenumber"
              value={this.state.phonenumber}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Name
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
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


