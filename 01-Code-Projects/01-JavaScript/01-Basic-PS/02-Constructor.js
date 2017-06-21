console.log("Hello Constructor");

  // If you need to create several objects wiht the same characteristics you can use
  // Constructors to build them. 

    // Example of the objects that the constructor will build.
var mark = {
    name: "Mark",
    tshirtColor: "blue"
};


    // this is a construction function
    // that will creat an object like the one Above.
function Friend(name, tColor){
    this.name = name;
    this.tshirtColor = tColor;
}


    // Creating new instances of the Constructor "Friend"
var denny = new Friend("Denny", "green");
var ayumi = new Friend("Ayumi", "pink")


    // Printing to the console.
console.log(denny.name);  // Denny
console.log(ayumi.name);  // Ayumi
