import React, { Component } from 'react';
import axios from 'axios';

export default class EditProfile extends Component {
  state = {
    newId: '',
    username: '',
    password:'',
    full_name: '',
    phone: '',
    bio: '',
    profpic: '',
    fireRedirect: false
  }

  componentDidMount() {
  axios.get(`/${this.props.match.params.id}`)
    .then((res) => {
      console.log(res);
      const obj = res.data.data;
      this.setState({
        username: obj.username,
        password: obj.password,
        full_name: obj.full_name,
        phone: obj.phone,
        bio: obj.bio,
        profpic: obj.profpic,
      })
    }).catch(err => console.log(err));
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
    axios.put('/', {
       username: this.state.username,
       password: this.state.password,
       full_name: this.state.full_name,
       phone: this.state.phone,
       bio: this.state.bio,
       profpic: this.state.profpic
    }).then(res => {
      this.setState({
        newId: res.data.data.id,
        fireRedirect:true
      })
  })
}


  render() {
  return(
    <div className="login">
       <h1>Create Account Page</h1>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Full Name
            <input
              type="text"
              placeholder="Full Name"
              name="full_name"
              value={this.state.full_name}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={this.state.phone}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Bio
            <input
              type="text"
              placeholder="Bio"
              name="bio"
              value={this.state.bio}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Profile Picture URL
            <input
              type="text"
              placeholder="Profile Pic URL"
              name="profpic"
              value={this.state.profpic}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={{
              pathname: '/Newsfeed',
              state: {referrer: this.state.username}
            }} />
          : ''}
      </div>
    )
  }
}
