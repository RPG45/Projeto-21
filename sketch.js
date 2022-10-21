const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball, groundObj, leftSide, rightSide;
var radius = 40;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//crie o mecanismo da bola
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(260, 100, radius / 2,ball_options);
	World.add(world, ball);

	
	
	groundObj = new ground(width / 2, 670, width, 20);
	leftSide = new ground(1100, 600, 20, 120);
	rightSide = new ground(1350, 600, 20, 120);

	Engine.run(engine);

	rectMode(CENTER);
}


function draw() {
	background(0);

	ellipse(ball.position.x, ball.position.y, radius, radius);

	//Exibir os objetos criados com a classe ground
	groundObj.display();
	leftSide.display();
	rightSide.display();	
}

//Faça a bola de papel amassado pular e cair na cesta com a tecla de seta para cima
function keyPressed() {
	if (keyCode === UP_ARROW) {
		//Use o método Matter.Body.applyForce
		Matter.Body.applyForce(ball,ball.position,{x:90,y:-75});
	}
}
