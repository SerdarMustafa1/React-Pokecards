import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Pokegame from './Pokegame/Pokegame';
import './App.css'

class App extends Component {
	render() {
		return (
		<div className="App"> 
		<Pokegame />
		</div>
		);
	}
}

export default App;