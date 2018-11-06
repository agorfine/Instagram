import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class UsernameCaption extends Component {

	render () {
		console.log(this.props.username)
		return (
			<div>
				<p>{this.props.username.username}</p>
			</div>
		)
	}

}

export default UsernameCaption;