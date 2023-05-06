import 'phaser';
import './styles.css';
import OnboardingScene from './scenes/OnboardingScene';
import GameScene from './scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  scene: [OnboardingScene, GameScene],
};

const game = new Phaser.Game(config);
