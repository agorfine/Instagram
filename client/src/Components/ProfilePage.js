import React, { Component } from 'react';
import axios from 'axios';
import Picture from './Picture'

class ProfilePage extends Component {
  state = {
    apiDataLoaded: false,
    apiData: null
  }

	componentDidMount() {
	    axios.get(`/${this.props.match.params.id}`)
     	.then( res => {
        this.setState(prevState => ({
          apiDataLoaded: true,
          apiData: res.data.data
        }))
      })

  }

  renderPictures() {
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(d => {
        return(
          <Picture key={d.id} picture={d} />
        )
      })
    } else return <p>Loading...</p>
  }

	render () {
		return (
			<div>
			{this.renderPictures()}
			</div>
		)
	}

}

export default ProfilePage;
