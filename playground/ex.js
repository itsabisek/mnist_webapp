window.addEventListener('load', () => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');

    // height_offset = window.innerHeight-250;
    // width_offset = window.innerWidth-500;
    //canvas.height = window.innerHeight-height_offset;
    // canvas.width = window.innerWidth-width_offset;

    canvas.height = "250";
    canvas.height = "250";

    // canvas.style.marginTop = "50%";
    // canvas.style.marginRight = "50%";
    // canvas.style.marginLeft = "50%";
    // canvas.style.marginBottom = "50%";

    ctx.fillText(window.innerHeight,500,500);
  

   let penDown = false;

   function startDrawing(){
        penDown = true;
   }

   function endDrawing(){
        penDown = false;
        ctx.beginPath();
   }

   function draw(e){
       if(!penDown) return;

       ctx.lineWidth = 5;
       ctx.lineCap = 'round';
       
       ctx.lineTo(e.clientX,e.clientY);
       ctx.stroke();
    
   }

   canvas.addEventListener('mousedown',startDrawing);
   canvas.addEventListener('mouseup',endDrawing);
   canvas.addEventListener('mousemove',draw);


});

function clearContents(){
    var canvas = document.getElementById('draw');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

