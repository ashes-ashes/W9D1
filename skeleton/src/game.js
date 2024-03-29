import Level from './level.js';
import Bird from './bird.js';


export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate();
  }

  animate() {
    this.level.drawBackground(this.ctx);
    this.bird.animate(this.ctx);
    if (this.running) {
      requestAnimationFrame(this.animate);
    }
  }

  play() {
    this.running = true;
    this.animate();
  }
}