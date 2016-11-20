function init()
{
	var stage = new createjs.Stage("gameCanvas");

	var giorgio = new createjs.Bitmap("../Sprites/Giorgio.png");
	giorgio.x = 935;
	giorgio.y = 465;

	stage.addChild(giorgio);
	stage.update();

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);
}

/*
function init()
{
	var stage = new createjs.Stage("gameCanvas");

	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);

	stage.update();
}
*/