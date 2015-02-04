//Create unique namespace
var CubeStab = CubeStab || {};

//Timer for blinking text
var startTextTimer = 0;

CubeStab.MainMenu = function(){};
CubeStab.MainMenu.prototype = {
	create: function() {
		//Add background
		this.game.add.sprite(0, 0, 'background');
		
		//Add clouds and make them scroll
		var clouds = this.game.add.tileSprite(0, 15, 800, 150, 'clouds');
		clouds.autoScroll(-25, 0);
		
		//Add title and make it animate
		this.title = this.game.add.sprite(150, 50, 'title');
		this.title.animations.add('scroll', [0, 3, 2, 1], 10, true);
		this.title.animations.play('scroll');
		
		//Start text
		var text = 'PRESS START';
		var style = { font: "30px Lucida Console", fill: "#000", align: "center" };
		this.startText = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
		this.startText.anchor.set(0.5);
	},
	update: function() {
		//Blink start text
		startTextTimer += this.game.time.elapsed;
		if (startTextTimer >= 500) {
			startTextTimer = 0;
			this.startText.visible = !this.startText.visible;
		}
		
		//On click or spacebar, start the next state
		if(this.game.input.activePointer.justPressed() || this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			this.game.state.start('Game');
		}
	}
};