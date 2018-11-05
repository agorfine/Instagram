import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class LogInPage extends Component {
  state = {
    name: '',
    password:''
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
        username: this.state.flavor,
       password: this.state.desc,
        rating:this.state.rating,
        brand:this.state.brand,
        url:this.state.url,
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
            Flavor
            <input
              type="text"
              placeholder="User Name"
              name="flavor"
              value={this.state.flavor}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              placeholder="Password"
              name="desc"
              value={this.state.desc}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Rating
            <input
              type="number"
              placeholder="Rating"
              name="rating"
              value={this.state.description}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Brand
            <input
              type="text"
              placeholder="Brand"
              name="brand"
              value={this.state.brand}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            URL
            <input
              type="text"
              placeholder="URL"
              name="url"
              value={this.state.url}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/ice-cream/${this.state.newId}`} />
          : ''}
      </div>
    )
  }
}


