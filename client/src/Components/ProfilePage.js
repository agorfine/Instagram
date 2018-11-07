import React, { Component } from 'react';
import axios from 'axios';

class ProfilePage extends Component {

	componentDidMount() {
	    axios.get('/profilepage/:id')
     	.then( res => {
        this.setState(prevState => ({
          apiDataLoaded: true,
          apiData: res.data.data
        }))
        console.log(res.data)
      })
	     
  }

	render () {

		return (
			<div>
				hi
			</div>
		)
	}

}

export default ProfilePage;
