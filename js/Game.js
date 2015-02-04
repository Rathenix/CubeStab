//Create unique namespace
var CubeStab = CubeStab || {};

CubeStab.Game = function(){};
CubeStab.Game.prototype = {
	create: function() {
		//Enable cursor controls
		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		//Add background
		this.game.add.sprite(0, 0, 'background');
		
		//Create floor
		this.floor = this.game.add.sprite(0, this.game.world.height - 50, 'floor');
		this.game.physics.arcade.enable(this.floor);
		this.floor.enableBody = true;
		this.floor.body.immovable = true;
		this.floor.visible = false;
		
		//Add clouds and make them scroll
		var clouds = this.game.add.tileSprite(0, 15, 800, 150, 'clouds');
		clouds.autoScroll(-25, 0);
		
		//Add players
		this.player = this.game.add.sprite(this.game.world.width/4, this.game.world.height - 100, 'red-p1');
		this.game.physics.arcade.enable(this.player);
		this.player.enableBody = true;
		this.player.body.collideWorldBounds = true;
		this.player.body.gravity.y = 500;
		this.player.body.drag.setTo(1000, 0);
		
		this.cpu = this.game.add.sprite(this.game.world.width * .75 - 50, this.game.world.height - 100, 'grey-cpu');
		this.game.physics.arcade.enable(this.cpu);
		this.cpu.enableBody = true;
		this.cpu.body.collideWorldBounds = true;
		this.cpu.body.gravity.y = 500;
		this.cpu.body.drag.setTo(1000, 0);
	},
	update: function() {
		this.game.physics.arcade.collide(this.player, this.cpu);
		this.game.physics.arcade.collide(this.player, this.floor);
		this.game.physics.arcade.collide(this.cpu, this.floor);
		this.player.body.velocity.x = 0;
		if (this.cursors.left.isDown)
		{
			this.player.body.velocity.x = -150;
		}
		else if (this.cursors.right.isDown)
		{
			this.player.body.velocity.x = 150;
		}
		if (this.cursors.up.isDown && this.player.body.touching.down)
		{
			this.player.body.velocity.y = -250;
		}
	}
}