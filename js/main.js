var CubeStab = CubeStab || {};

CubeStab.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

CubeStab.game.state.add('Boot', CubeStab.Boot);
CubeStab.game.state.add('Preload', CubeStab.Preload);
CubeStab.game.state.add('MainMenu', CubeStab.MainMenu);
CubeStab.game.state.add('Game', CubeStab.Game);

CubeStab.game.state.start('Boot');
