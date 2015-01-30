//Create unique namespace
var CubeStab = CubeStab || {};

CubeStab.MainMenu = function(){};
CubeStab.MainMenu.prototype = {
	init: function() {
	},
	create: function() {
		//Add background
		this.game.add.sprite(0, 0, 'background');
		
		//Add clouds and make them scroll
		this.clouds = this.game.add.tileSprite(0, 35, 800, 150, 'clouds');
		this.clouds.autoScroll(-25, 0);
		
		//Add title and make it animate
		this.title = this.game.add.sprite(150, 50, 'title');
		this.title.animations.add('scroll', [0, 3, 2, 1], 10, true);
		this.title.animations.play('scroll');
	},
	update: function() {
		//Once the screen is clicked/touched, start the next state
		if(this.game.input.activePointer.justPressed()) {
			//this.game.state.start('Game');
		}
	}
};