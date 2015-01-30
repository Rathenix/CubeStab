//Create unique namespace
var CubeStab = CubeStab || {};

//Set up game and load preload assets
CubeStab.Boot = function(){};
CubeStab.Boot.prototype = {
	preload: function() {
		//assets for preload screen
		this.load.image('logo', 'assets/images/logo.png');
		this.load.image('preloadBar', 'assets/images/preloader-bar.png');
	},
	create: function() {
		//Background
		this.game.stage.backGroundColor = '#fff';
		
		//Scaling options
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 800;
		this.scale.minHeight = 600;
		this.scale.maxWidth = 800;
		this.scale.maxHeight = 600;
		this.scale.pageAlignHorizontally = true; //center game horizontally
		this.scale.setScreenSize(true); //set screen size automatically
		
		//Physics system
		this.game.physics.startSystem(Phaser.Physics.ARCADE)
		
		//Start the next state
		this.state.start('Preload');
	}
};