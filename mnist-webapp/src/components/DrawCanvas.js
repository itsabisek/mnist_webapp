import React from 'react'
import {predict} from './Main'
import {PlotChart} from './PlotChart'
var tf = require('@tensorflow/tfjs')

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

		// const {canvasHeight, canvasWidth} = this.state.canvasDims
		// this.refs.canvas.height = canvasHeight
		// this.refs.canvas.width = canvasWidth


		this.setupCanvas()
		this.loadModel()


	}

	componentDidUpdate() {
		// const {canvasHeight, canvasWidth} = this.state.canvasDims
		// this.refs.canvas.height = canvasHeight
		// this.refs.canvas.width = canvasWidth

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

			let imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
			let predictions = predict(model,imageData)

			PlotChart.updateChart(predictions)

		}

		let draw = e => {
			if (!penDown)
				return

			ctx.lineWidth = 15
			ctx.lineCap = 'round'
			ctx.shadowBlur = 2;
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 3;
			ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
			ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
			ctx.stroke()

		}

		canvas.addEventListener('mousedown', startDrawing)
		canvas.addEventListener('mouseup', endDrawing)
		canvas.addEventListener('mousemove', draw)

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
