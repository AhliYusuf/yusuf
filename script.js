var myCanv = document.getElementById("myCanvas");
var ctx = myCanv.getContext('2d');
myCanv.width = myCanv.scrollWidth;
myCanv.height = myCanv.scrollHeight;

// kotak1
ctx.fillStyle = "blue";
ctx.fillRect(20, 150, 150, 150);
ctx.strokeStyle = "black";
ctx.strokeRect(20, 150, 150, 150);


ctx.fillStyle = "red";
ctx.strokeStyle= "black"
ctx.save();
ctx.translate(150,150);
ctx.rotate(Math.PI/2);
ctx.fillRect(-50, -20, 50, 150);
ctx.strokeRect(-50, -20, 50, 150);
ctx.restore();  


//kotak2
ctx.fillStyle = "blue";
ctx.fillRect(250, 150, 150, 150);
ctx.strokeStyle = "black";
ctx.strokeRect(250, 150, 150, 150);

ctx.fillStyle = "red";
ctx.save();
ctx.translate(342,56);
ctx.rotate(Math.PI/4);
ctx.fillRect(-50, -20, 50, 150);
ctx.restore();

 

ctx.strokeStyle = "gray";
ctx.save();
ctx.translate(380,150);
ctx.rotate(Math.PI/2);
ctx.strokeRect(-50, -20, 50, 150);
ctx.restore();

ctx.strokeStyle = "gray";
ctx.save();
ctx.translate(200,130);
ctx.rotate(Math.PI);
ctx.strokeRect(-50, -20, 50, 150);
ctx.restore();

ctx.fillStyle = "black";
ctx.fillRect(310, 120, 40, 30);





// kotak3
ctx.fillStyle = "blue";
ctx.fillRect(480, 150, 150, 150);
ctx.strokeStyle = "black";
ctx.strokeRect(480, 150, 150, 150);

ctx.fillStyle = "red";
ctx.strokeStyle = "black";
ctx.save();
ctx.translate(430,130);
ctx.rotate(Math.PI);
ctx.fillRect(-50, -20, 50, 150);
ctx.strokeRect(-50, -20, 50, 150);
ctx.restore();

ctx.fillStyle = "black";
ctx.fillRect(535, 120, 40, 30);

var imageObj = new Image();
imageObj.onload = function () {
    ctx.drawImage(imageObj, 485, 0, 140, 120);
}
imageObj.src = '1.jpg'

// ctx.fill();
// ctx.strokeStyle ='black';
// ctx.stroke();
