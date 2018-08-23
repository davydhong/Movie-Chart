// var App = () => <div>Hello</div>;
// import React, { Component } from 'react'
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="App">
				<div className="NavBar">
					<NavBar />
				</div>
				<div className="MovieList">
					<MovieList movies={this.props.movies} />
				</div>
			</div>
		);
	}
}
