import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class Picture extends Component {
	// console.log(props.picture)

	render () {
		return (
			<div>
				<img className="picture" src={this.props.picture.img_url} alt="Camera"/>
				<p>{this.props.picture.user_id}</p>
			</div>
		)
	}

}

export default Picture;