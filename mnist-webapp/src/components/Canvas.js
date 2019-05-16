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

			ctx.lineWidth = 5
			ctx.lineCap = 'round'
			ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
			ctx.stroke()

		}

		canvas.addEventListener('mousedown', startDrawing)
		canvas.addEventListener('mouseup', endDrawing)
		canvas.addEventListener('mousemove', draw)

	}

	render() {

		var canvasStyle = {
			"border": "2px solid black",
			"marginTop": "10%",
			"marginLeft": "20%",
			"marginRight": "80%",
			"marginBottom": "90%"
		}

		return (<div width="400">
			<canvas width="500" height="200" ref="canvas" style={canvasStyle}>
				Sorry your browser does not support canvas
			</canvas>
		</div>)
	}

}
