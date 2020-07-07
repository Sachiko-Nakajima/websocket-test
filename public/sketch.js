var socket;
var time = 0;

function setup() {
  createCanvas(400, 400);
  background(51);
  socket = io.connect('https://heroku-websocket-test3.herokuapp.com/');
}

function newDrawing(data){
  noStroke();
  fill(200,0,100);
  ellipse(data.x, data.y, 10,10);
}



function mouseDragged(){
  console.log('Sending:' + mouseX + ',' + mouseY);
  var data = {
   x: mouseX,
   y: mouseY  
  }
  socket.emit('mouse', data); 

  noStroke();
  fill(200);
  ellipse(mouseX, mouseY, 10,10);
}


function draw() {
  socket.on('mouse', newDrawing);
  if(time%10==0){
  background(51);
}
time++;
}

