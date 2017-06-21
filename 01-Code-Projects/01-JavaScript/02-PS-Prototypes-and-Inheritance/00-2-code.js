console.log("What is a prototype");

function Car(make, year){
  this.make = make
  this.year = year
}

Car.prototype.color = 'white';

var mundo = new Car('Cevy', 2001);
var alice = new Car('Ford', 2000);

console.log(mundo);
console.log(mundo.color);
