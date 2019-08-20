const CONSTANTS = {
  GRAVITY: 0.5,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30
};


export default class Bird {

  constructor(dimensions) {
    this.velocity = 0;
    this.width = dimensions.width;
    this.height = dimensions.height; 
    this.xposition = this.width / 3;
    this.yposition = this.height / 2;
  }

  drawbird(ctx) {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.xposition, this.yposition, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT); 
  }


  animate(ctx) {
    this.move();
    this.drawbird(ctx);
  }


  move() {
    this.yposition += this.velocity;
    this.velocity += CONSTANTS.GRAVITY;
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

}