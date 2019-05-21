import React from 'react'
var Chart = require('chart.js')
let myChart = null

export class PlotChart extends React.Component {

	componentDidMount() {

		this.plot()
	}

	plot() {
		const ctx = this.refs.chart.getContext('2d')
		myChart = new Chart(ctx, {
			type: 'horizontalBar',
			data: {
				labels: [
					'0',
					'1',
					'2',
					'3',
					'4',
					'5',
					'6',
					'7',
					'8',
					'9'
				],
				datasets: [
					{
						label: 'Predicted Probability',
						data: [0,0,0,0,0,0,0,0,0,0],
						backgroundColor: [
							'grey',
							'grey',
							'grey',
							'grey',
							'grey',
							'grey',
							'grey',
							'grey',
							'grey',
							'grey'
						],
						borderColor: [],
						borderWidth: 1
					}
				]
			},
			options: {
				maintainAspectRatio: false,
				scales: {
					xAxes: [
						{
							display: false,
							gridLines: {
								display: false
							}
						}
					],

					yAxes: [
						{
							gridLines: {
								display: false
							},
							ticks: {
								beginAtZero: true,
								fontSize: 25,
								fontColor: 'black'
							}
						}
					]
				}
			}
		})
	}

	static updateChart(newDataset) {
			myChart.data.datasets[0].data = newDataset
			myChart.update()
	}


	render() {
		return (<div id="chartContainer">
			<canvas id="chartCanvas" ref="chart">
				Sorry your browser does not support plotting this chart
			</canvas>
		</div>)
	}

}
