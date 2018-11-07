import React, { Component } from 'react';
import axios from 'axios';

class ProfilePage extends Component {

	componentDidMount() {
	    console.log('this is props from iceCreamSingle: ', this.props.match.params.id)
	    axios.get(`/finsta/${this.props.match.params.id}`)
	      .then(res => {
	        this.setState({
	          apiDataLoaded:true,
	          iceCream: res.data.data
	        })
	      }).catch(err => console.log(err))
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
