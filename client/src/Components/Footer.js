import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class Footer extends Component {
	componentDidMount() {
		this.targetElement= document.querySelector('pic')
	}

	// disableScroll() {
	// 	disableBodyScroll(this.targetElement)
	// }

	render() {
		return (
			<div className = 'footer'>
				<img className="button" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541516047/Screen_Shot_2018-11-06_at_9.48.13_AM.png" alt="Camera"/>
				<img className="button" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541516078/Screen_Shot_2018-11-06_at_9.48.07_AM.png" alt="Logo"/>
				<img className="button" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541515748/Screen_Shot_2018-11-06_at_9.47.42_AM.png" alt="Camera"/>
				<img className="button notification" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541516172/Screen_Shot_2018-11-06_at_9.53.27_AM.png" alt="Camera"/>
				<img className="button" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541516024/Screen_Shot_2018-11-06_at_9.47.52_AM.png" alt="Camera"/>
			</div>
		)
	}
}

export default Footer;