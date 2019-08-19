Function.prototype.inherits = function(parent) {
  function Surrogate() { }
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function MovingObject(name, color) {
  this.name = name;
  this.color = color;
}

MovingObject.prototype.sayHello = function() {
  console.log(`Hi, my name is ${this.name}!`);
};

MovingObject.prototype.move = function () {
  console.log(`${this.name} zooms by!`);
};



function Ship(name, color) {
  this.color = color;
  this.name = name;
}

Ship.inherits(MovingObject);

//-------------------------------
function Ship(name, color) { 
  MovingObject.call(this, name, color);
}




// //-------------------------------
function Asteroid(name, color) {
  MovingObject.call(this, name, color);
}
Asteroid.inherits(MovingObject);