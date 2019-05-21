var tf = require('@tensorflow/tfjs')

// let uri = window.location.href + 'modelJS/model.json'

// export const loadModel = async () => {
// 	try{
// 		return await tf.loadLayersModel(uri)
// 	}catch(e){
// 		console.log(e)
// 	}
// 	// console.log(model)
// }


export const predict = (model,imageData) => {
	let data = tf.browser.fromPixels(imageData,1)
	data = tf.image.resizeNearestNeighbor(data,[28,28])
	data = tf.expandDims(data)
	const predictions = model.predict(data)
	return Array.from(predictions.dataSync())
}
