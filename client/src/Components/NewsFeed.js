import React, { Component } from 'react';
import Picture from './Picture';
import axios from 'axios';
import { disableBodyScroll } from 'body-scroll-lock';


class NewsFeed extends Component {
	state = {
	    apiDataLoaded: false,
	    apiData: [],
	  }

	componentDidMount() {
  	axios.get('/newsfeed')
   	.then( res => {
      this.setState(prevState => ({
        apiDataLoaded: true,
        apiData: res.data.data
      }))
      console.log('this is res.data.data:', res.data.data)
    })
   	this.targetElement = document.querySelector('.scroll')
   	disableBodyScroll(this.targetElement)
	}

// trying to
  // async componentDidMount() {
  //   await console.log('this is this.props.loation.state:', this.props.location.state)
  //     this.setState(prevState => ({
  //       apiDataLoaded: true,
  //       apiData: this.props.location.state
  //     }))
  //    this.targetElement = document.querySelector('.scroll')
  //    disableBodyScroll(this.targetElement)
  // }

	renderPictures() {
    console.log(this.props)
		if(this.state.apiDataLoaded) {
			return this.props.data.map(d => {
				return(
					<Picture key ={d.id} picture={d}/>
				)
			})
		} else return <p>Loading...</p>
	}

  // renderPictures() {
  //   console.log(this.state.apiData)
  //     this.state.apiData.map(d => {
  //       return(
  //         <Picture key ={d.id} picture={d}/>
  //       )
  //     })
  // }

	render(){
		return (
			<div className="newsFeed">
				<div className="scroll">
        {this.renderPictures()}
				</div>
			</div>
		)
	}
}



export default NewsFeed;
