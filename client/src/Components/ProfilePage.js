import React, { Component } from 'react';
import axios from 'axios';
import ProfilePicture from './ProfilePicture'
import { disableBodyScroll } from 'body-scroll-lock';
import { Link } from 'react-router-dom';

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
      this.targetElement = document.querySelector('.scroll')
      disableBodyScroll(this.targetElement)
  }

  renderPictures() {
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(d => {
        return(
          <ProfilePicture key={d.id} picture={d} />
        )
      })
    } else return <p>Loading...</p>
  }

	render () {

  let username = localStorage.getItem('username')

		return (
			<div className="newsFeed">
        <div className="scroll">
          <div>user img</div>
          <Link to = {`/editprofile/${username}`}><div> edit profile </div></Link>
          <div className='profilePicGrid'>{this.renderPictures()}</div>
         </div>
			</div>
		)
	}

}

export default ProfilePage;
