import React from 'react';
import logo from './logo.svg';
import {Canvas} from './components/DrawCanvas'
import {PlotChart} from './components/PlotChart'
import './components/style.css'

class App extends React.Component {
	render() {
		return (<div className="App">

			<Canvas/>
			<PlotChart/>
		</div>);
	}

}

export default App;
