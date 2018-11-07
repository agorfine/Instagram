import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class Footer extends Component {
	state = {
		fireRedirect: false,
		homeRedirect: false
	}

	handleClick(e) {
		e.stopPropagation()
		console.log('inside handleClick')

		this.setState(prevState => ({
			fireRedirect: true,
		}))
	}

	handleClickHome(e) {
		e.stopPropagation()
		console.log('inside handleClick')

		this.setState(prevState => ({
			homeRedirect: true,
		}))
	}

	render() {

		return (
			<div className = 'footer'>
				<div className='button homeButtonHome' onClick={(e) => this.handleClickHome(e)}>
					{this.state.homeRedirect
						? <Redirect push to={`/newsfeed`} />
						: ''}
				</div>
				<img className="button" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541516078/Screen_Shot_2018-11-06_at_9.48.07_AM.png" alt="Logo"/>
				<img className="button addPhoto" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541515748/Screen_Shot_2018-11-06_at_9.47.42_AM.png" alt="Camera"/>
				<img className="button notification" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541516172/Screen_Shot_2018-11-06_at_9.53.27_AM.png" alt="Camera"/>
				<div className="button userProfileHome" onClick={(e) => this.handleClick(e)}>
					{this.state.fireRedirect
						? <Redirect push to={`/profilepage/${this.props.username}`} />
						: ''}
				</div>
			</div>
		)
	}
}

export default Footer;