import * as tfjs from '@tensorflow/tfjs'
import React from 'react'

let model;
const Main = () => {
	model = tfjs.loadLayersModel(
		'https: //drive.google.com/open?id=1XJk68dpwsFKnOU5rCUkr9AYKxjZFlzGK');
	console.log('model loaded');
	return null;
}

export default Main;