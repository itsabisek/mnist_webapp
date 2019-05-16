window.addEventListener('load', () => {
	const canvas = document.getElementById('draw');
	// canvas.setAttribute('width', "200");
	// canvas.setAttribute('height', "200");
	const ctx = canvas.getContext('2d');
	// var mypic = new Image();
	// mypic.src = "mypic.jpg";
	// ctx.drawImage(mypic, 0, 0)
	// height_offset = window.innerHeight-250;
	// width_offset = window.innerWidth-500;
	//canvas.height = window.innerHeight-height_offset;
	// canvas.width = window.innerWidth-width_offset;

	// canvas.height = "250";
	// canvas.height = "250";
	//
	// canvas.position(100, 100);
	// canvas.width = 250;
	// canvas.height = 250;
	// canvas.style.left = "100px";
	// canvas.style.top = "100px";
	// canvas.style.position = "fixed";

	// canvas.style.top = "100px";
	// canvas.style.left = "100px";
	// canvas.style.right = "100px";
	// canvas.style.bottom = "100px";

	canvas.style.marginTop = "100px";
	// canvas.style.marginRight = "50%";
	// canvas.style.marginLeft = "50%";
	// canvas.style.marginBottom = "50%";

	// ctx.fillText(window.innerHeight, 500, 500);

	// canvas.width = window.innerWidth / 2;
	// canvas.height = (window.innerHeight / 2);

	let penDown = false;

	function startDrawing() {

		penDown = true;
	}

	function endDrawing() {
		penDown = false;
		ctx.beginPath();
	}

	function draw(e) {
		console.log(canvas.offsetLeft);
		if (!penDown) return;

		// ctx.fillRect(150, 150, 20, 20);
		ctx.lineWidth = 5;
		ctx.lineCap = 'round';

		// ctx.beginPath();
		// ctx.moveTo(e.clientX, e.clientY);
		// ctx.moveTo(0, 0);
		ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
		ctx.stroke();

		// ctx.beginPath();
		// ctx.lineTo(e.clientX, e.clientY);

	}

	canvas.addEventListener('mousedown', startDrawing);
	canvas.addEventListener('mouseup', endDrawing);
	canvas.addEventListener('mousemove', draw);


});

function clearContents() {
	var canvas = document.getElementById('draw');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height)
}