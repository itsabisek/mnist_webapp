import React from 'react'
var Chart = require('chart.js')

export class PlotChart extends React.Component {

	componentDidMount() {
		// let canvas = this.refs.chart
		// canvas.style.marginBottom = "7.8%"
		// canvas.parentNode.style.height = "500px"
		// canvas.parentNode.style.widht = "20px"

		this.plot()
	}

	plot() {
		const ctx = this.refs.chart.getContext('2d')
		const myChart = new Chart(ctx, {
			type: 'horizontalBar',
			data: {
				labels: [
					'Red',
					'Blue',
					'Yellow',
					'Green',
					'Purple',
					'Orange'
				],
				datasets: [
					{
						label: '# of Votes',
						data: [
							12,
							19,
							3,
							5,
							2,
							3
						],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}
				]
			},
			options: {
				maintainAspectRatio: false
			}
		})
	}

	render() {
		return (<div id="chartContainer">
			<canvas id="chartCanvas" ref="chart">
				Sorry your browser does not support plotting this chart
			</canvas>
		</div>)
	}

}
