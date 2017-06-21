console.log("Defining an Array.prototype PROPERTY");
console.log("");

var arr1 = ['red', 'blue', 'green'];
var arr2 = ['car', 'home', 'truck'];
console.log( arr1 );
console.log( arr2 );
console.log("");

console.log("**Before Property is created:");
console.log(arr1.last);
console.log(arr2.last);
console.log("");


Object.defineProperty(arr1, 'last', {get: function(){
  return this[this.length-1];
}});


console.log("**After property is created for arr1:");
console.log(arr1.last);
console.log(arr2.last);
console.log("");


Object.defineProperty(Array.prototype, 'last', {get: function(){
  return this[this.length-1];
}});


console.log("**After property is created for Array.prototype:");
console.log(arr1.last);
console.log(arr2.last);
