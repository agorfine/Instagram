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
			<div className = 'navBar'>
		
			</div>
		)
	}
}

export default Footer;