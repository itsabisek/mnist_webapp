import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import JustForFun from './components/JustForFun'
import {Canvas} from './components/DrawCanvas'
import {PlotChart} from './components/PlotChart'
import './components/style.css'

class App extends React.Component {
	render() {
		return (<div className="App">

			{/*<Greet name='Abisek' desc='fuck you'>
				<p>Badhia Badhia</p>
			</Greet>

			<br/>

			<JustForFun/>

			<br/>

			<Welcome name="Soumya" desc="chutiya"/>

			<Main/>
		</div>*/
			}

			<Canvas/>
			<PlotChart/>
		</div>);
	}

}

export default App;
