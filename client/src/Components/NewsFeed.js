import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';


class NewsFeed extends Component {
	state = {
	    apiDataLoaded: false,
	    apiData: null
	  }

  	componentDidMount() {
    	axios.get('/pictures')
     	.then( res => {
        this.setState(prevState => ({
          apiDataLoaded: true,
          apiData: res.data.data
        }))
      })
	}

	render(){
		return (
			<div className = 'epcot'>
				<NavBar/>
				<Footer/>
				
			</div>
		)
	}	
}
	


export default NewsFeed;