import React from 'react';
import logo from './logo.svg';
import {Canvas} from './components/DrawCanvas'
import {PlotChart} from './components/PlotChart'
import './components/style.css'

class App extends React.Component {
	render() {
		return (<div className="App">
			<h1>Enter any digit from 0-9 below.</h1>
			<Canvas/>
			<PlotChart/>
		</div>);
	}

}

export default App;
