import React from 'react'
import {PlotChart} from './PlotChart'
var tf = require('@tensorflow/tfjs/dist/index')

let model = null
let uri = window.location.href + 'modelJS/model.json'

export class Canvas extends React.Component {

	async loadModel(){
		try{
			model =  await tf.loadLayersModel(uri)
			console.log(model);
		}catch(e){
			console.log(e)
		}
	}

	componentDidMount() {

		this.loadModel()
		this.setupCanvas()
	}

	componentDidUpdate() {

		this.setupCanvas()
	}

	setupCanvas() {
		const canvas = this.refs.canvas
		const ctx = canvas.getContext('2d')

		let penDown = false

		let startDrawing = () => {
			penDown = true
		}

		let endDrawing = () => {
			penDown = false
			ctx.beginPath()
			ctx.drawImage(canvas,0,0,28,28)

			let data = ctx.getImageData(0,0,28,28)
			this.predict(model,data)
		}

		let draw = e => {
			if (!penDown)
				return

			ctx.strokeStyle = '#111111'
			ctx.lineWidth = 15
			ctx.lineCap = 'round'
			ctx.shadowBlur = 2;
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 3;
			ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
			ctx.stroke()

		}

		canvas.addEventListener('mousedown', startDrawing)
		canvas.addEventListener('mouseup', endDrawing)
		canvas.addEventListener('mousemove', draw)

	}

	async predict (model,imageData){

		let predictions = null

		const pred = await tf.tidy(() => {
			let data = tf.browser.fromPixels(imageData,1)
			data = tf.expandDims(data)
			data = tf.cast(data,"float32")

			predictions = model.predict(data)
			return Array.from(predictions.dataSync())

		})
		PlotChart.updateChart(pred)
	}

	clearCanvas = () => {
		const ctx = this.refs.canvas.getContext('2d')
		ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height)
		PlotChart.updateChart([0,0,0,0,0,0,0,0,0,0])
	}

	render() {
		return (<div>
			<canvas id="drawCanvas" width="500" height="500" ref="canvas">
				Sorry your browser does not support canvas
			</canvas>
			<button id="clearButton" onClick={this.clearCanvas}>Clear</button>
		</div>)
	}

}
