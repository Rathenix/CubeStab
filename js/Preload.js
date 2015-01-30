//Create unique namespace
var CubeStab = CubeStab || {};

//Load all game assets
CubeStab.Preload = function(){};
CubeStab.Preload.prototype = {
	preload: function() {
		//Show logo
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.splash.anchor.setTo(0.5);
		
		//Show loading bar
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 250, 'preloadBar');
		this.preloadBar.scale.setTo(2, 10);
		this.preloadBar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.preloadBar); //This takes an image sprite and make it into a loading bar auto-magically
		
		//Load game images
		this.load.image('background', 'assets/images/background.png');
		this.load.image('clouds', 'assets/images/clouds.png');
		
		//Load game sprites
		this.load.spritesheet('title', 'assets/images/title.png', 500, 200);
		
		//Load game audio
		//this.load.audio('collect', 'assets/audio/collect.ogg');
	},
	create: function() {
		//Start the next state
		this.state.start('MainMenu');
	}
};