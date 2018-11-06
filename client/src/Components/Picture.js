import React, { Component } from 'react';

class Picture extends Component {

	render () {
		return (
			<div>
				<img className="picture" src={this.props.picture.img_url} alt="Camera"/>
				<div>
					<div className="username">{this.props.picture.username}</div>
					<div>{this.props.picture.caption}</div>
				</div>
			</div>
		)
	}

}

export default Picture;