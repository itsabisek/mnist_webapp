import React from 'react'

export class Canvas extends React.Component {

	componentDidMount() {

		// const {canvasHeight, canvasWidth} = this.state.canvasDims
		// this.refs.canvas.height = canvasHeight
		// this.refs.canvas.width = canvasWidth
		this.setupCanvas()
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
	}

	render() {

		// var canvasStyle = {
		// 	"border": "2px solid black",
		// 	"position": "relative",
		// 	"marginTop": "10%",
		// 	"marginLeft": "10%",
		// 	"marginRight": "90%"
		// }
		//
		// var buttonStyle = {
		// 	"box-shadow": "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);" "position": "relative",
		// 	"marginTop": "2%",
		// 	"marginLeft": "10%",
		// 	"marginRight": "90%"
		// }

		return (<div>
			<canvas id="drawCanvas" width="500" height="500" ref="canvas">
				Sorry your browser does not support canvas
			</canvas>
			<button id="clearButton" onClick={this.clearCanvas}>Clear</button>
		</div>)
	}

}
