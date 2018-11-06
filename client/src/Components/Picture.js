import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import UsernameCaption from './UsernameCaption'
import axios from 'axios';

class Picture extends Component {
	state = {
	    apiDataLoaded: false,
	    apiData: null,
	  }

	componentDidMount() {
    	axios.get('/finsta/users')
     	.then( res => {
        this.setState(prevState => ({
          apiDataLoaded: true,
          apiData: res.data.data
        }))
      })
     	this.targetElement= document.querySelector('scroll')
	}

	renderUserName() {
		if(this.state.apiDataLoaded) {
			return this.state.apiData.map(d => {
				return(
					<UsernameCaption key ={d.id} username={d} />
				)
			})
		} else return <p>Loading...</p>
	}

	render () {
		return (
			<div>
				<img className="picture" src={this.props.picture.img_url} alt="Camera"/>
				<p>{this.props.picture.user_id}</p>
				<p>{this.renderUserName()}</p>
			</div>
		)
	}

}

export default Picture;