import React, { Component } from 'react';
import Fade from './Fade';

import logo from '../images/initials_logo.png';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.setScrollEvent = this.setScrollEvent.bind(this)
		this.getSectionPosition = this.getSectionPosition.bind(this)
		this.checkScrollToElem = this.checkScrollToElem.bind(this)
		this.state = {
			sectionOnescrolledTo: null,
			sectionTwoScrolledTo: null,
			sectionThreeScrolledTo: null,
			sectionFourScrolledTo: null
		}
	}
	componentWillMount() {
		this.setScrollEvent()
	}
	componentDidMount() {
		// console.log(document.getElementById('section-1').offsetLeft)
		const elems = [
			document.getElementById('section-1'),
			document.getElementById('section-2'), 
			document.getElementById('section-3'),
			document.getElementById('section-4')
		]
		this.setState(this.getSectionPosition(elems))
	}

	setScrollEvent() {
		window.addEventListener('scroll', (e) => {
			// this.setState({ scrollPos: window.scrollY })
			// console.log(window.scrollY)
			this.checkScrollToElem(window.scrollY)
		})
	}

	getSectionPosition(elemArray) {
		const result = []
		elemArray.forEach((elem, index) => {
			let obj = elem.getBoundingClientRect();
			return result.push({
				left: obj.left + document.body.scrollLeft,
				top: obj.top + document.body.scrollTop,
				width: obj.width,
				height: obj.height
			});
		})
		return result
	}

	checkScrollToElem(pos) {
		// this will check if the current scrolled position (pos) is >=  the section element positions on the page
		// console.log(pos, document.querySelector('body').clientHeight)
		const offset = 200
		if (pos >= this.state[0].top - 500) this.setState({sectionOnescrolledTo: true})
		if (pos >= this.state[1].top - 300) this.setState({sectionTwoScrolledTo: true})
		if (pos >= this.state[2].top - 300) this.setState({sectionThreeScrolledTo: true})
		if (pos >= (document.querySelector('body').clientHeight - window.innerHeight)) this.setState({sectionFourScrolledTo: true})
	}

	render() {
		return (
			<div className="App">
			<section className="App-header-section">
				<Fade duration={300}>
					<img src={logo} className="App-logo" alt="logo" />
				</Fade>
					<Fade duration={500}>
						<div className="App-header">
							<h1>Jeremy Levy</h1>
							<h4>web developer</h4>
						{/*<div className="arrow-down">></div>*/}
						</div>
					</Fade>
				</section>
				<section id="section-1" className={this.state.sectionOnescrolledTo ? "App-section scrolled-over" : "App-section" }>
				<div className="App-section-bar"></div><div><h3>About me</h3></div>
					<p>I'm based in <span className="highlight">SF</span>. I build with <span className="highlight">JS</span>, <span className="highlight">CSS</span> and <span className="highlight">HTML</span>.
					My framework of choice is <span className="highlight">ReactJS</span> and I use <span className="highlight">NodeJS</span> for server-side development.
					</p>
				</section>
				<section id="section-2" className={this.state.sectionTwoScrolledTo ? "App-section scrolled-over" : "App-section" }>
				<div className="App-section-bar"></div><div><h3>Where to find me</h3></div>
					<p>You can find my code on <a className="link-highlight" href='https://github.com/Jlevyd15'>GitHub</a>{'\n'}
					or more about me on <a className="link-highlight" href='https://www.linkedin.com/in/jeremy-levy-9a3b9058/'>Linkedin</a>.</p>
				</section>
				<section id="section-3" className={this.state.sectionThreeScrolledTo ? "App-section scrolled-over" : "App-section" }>
				<div className="App-section-bar"></div><div><h3>My projects</h3></div>
					<ul>
						<li><a href="https://github.com/Jlevyd15/cryptoDorado">cryptoDorado</a> - a crypto currency wallet aggregator</li>
						<li><a href="https://github.com/Jlevyd15/car-share-compare">car share compare</a> - a car share comparison website</li>
						<li><a href="https://github.com/Jlevyd15/tahoe-snow">tahoe snow</a> - an Amazon Alexa based voice app</li>
					</ul>
				</section>
				<section id="section-4" className={this.state.sectionFourScrolledTo ? "App-section App-section-last scrolled-over" : "App-section App-section-last" }>
				<div className="App-section-bar"></div><div><h3>Contact me</h3></div>
					<p>Feel free to <a className="link-highlight" href="mailto:jlevyd@gmail.com">email me</a></p>
				</section>
				<div className="footer-flex"><img src={logo} className="App-logo" alt="logo" /><div><div className="created-by">created by</div><div> Jeremy Levy</div></div></div>
			</div>
		);
	}
}

export default App;
