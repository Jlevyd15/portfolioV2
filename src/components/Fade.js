import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

class Fade extends Component {
	constructor(props) {
		super()
		this.state = { show: false }
		setTimeout(() => (
			this.setState({ show: true })
		), props.duration || 1000)
	}
	
	render() {
		const defaultStyle = {
		  transition: `opacity ${this.props.duration}ms ease-in-out`,
		  opacity: 0,
		}

		const transitionStyles = {
			entering: { opacity: 0 },
			entered:  { opacity: 1 },
			exiting:  { opacity: 1 },
			exited: { opacity: 0 }
		};
		return (
			<Transition in={this.state.show} timeout={this.props.duration || 1000} className="fade">
	            {(state) => (
	            	<div style={{
			        ...defaultStyle,
			        ...transitionStyles[state]
		      	}}>
						{this.props.children}
		      		</div>
	      		)}
			</Transition>
		);
	}
};

export default Fade;