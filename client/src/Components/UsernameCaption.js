import React, { Component } from 'react';


class UsernameCaption extends Component {

	render () {

		return (
			<div>
				<p>{this.props.username.username}</p>
			</div>
		)
	}

}

export default UsernameCaption;