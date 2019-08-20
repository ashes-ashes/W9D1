import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
const flaps = new FlappyBird(canvas);
flaps.restart();
flaps.play();