import React, { Component } from 'react';
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
				
			</div>
		)
	}

}

export default Picture;