import React, { Component } from 'react';
import axios from 'axios';
import Picture from './Picture'
import { disableBodyScroll } from 'body-scroll-lock';

class ProfilePage extends Component {
  state = {
    apiDataLoaded: false,
    apiData: null
  }

	componentDidMount() {
    // console.log('working')
	    axios.get(`/${this.props.match.params.id}`)
     	.then( res => {
        this.setState(prevState => ({
          apiDataLoaded: true,
          apiData: res.data.data
        }))
        // console.log(res.data.data)
      })
      this.targetElement = document.querySelector('.scroll')
      disableBodyScroll(this.targetElement)
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
			<div className="newsFeed">
        <div className="scroll">
			     {this.renderPictures()}
         </div>
			</div>
		)
	}

}

export default ProfilePage;
