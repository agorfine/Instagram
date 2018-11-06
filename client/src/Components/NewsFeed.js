import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Picture from './Picture';
import axios from 'axios';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


class NewsFeed extends Component {
	state = {
	    apiDataLoaded: false,
	    apiData: null
	  }

  	componentDidMount() {
    	axios.get('/finsta/pictures')
     	.then( res => {
        this.setState(prevState => ({
          apiDataLoaded: true,
          apiData: res.data.data
        }))
      })
     	axios.get('/finsta/user')
     	.then( res => {
        this.setState(prevState => ({
          apiDataLoaded: true,
          apiData: res.data.data
        }))
      })
     	// this.targetElement= document.querySelector('scroll')
	}

	renderPictures() {
		if(this.state.apiDataLoaded) {
			return this.state.apiData.map(d => {
				return(
					<Picture key ={d.id} picture={d} />
				)
			})
		} else return <p>Loading...</p>
	}

	enableScroll() {
		enableBodyScroll(this.targetElement)
	}

	render(){
		return (
			<div className = 'newsFeed'>
				<NavBar/>
				
			
				<div>
					{this.renderPictures()}
				</div>
				<Footer/>
			</div>
		)
	}	
}
	


export default NewsFeed;