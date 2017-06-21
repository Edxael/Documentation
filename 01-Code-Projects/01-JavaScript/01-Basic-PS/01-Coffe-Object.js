
console.log("Hello Coffe ");

function slowIt(secs) {
    secs *= 1000;
    setTimeout(function(){
        myCoffe.reheat();
    }, secs);
}


var myCoffe = {
    flavor: "Frapushino",
    temperature: "piping hot",
    ounces: 100,
    milk: true,

    reheat: function(){
        if(myCoffe.termperature !== "piping hot"){
            myCoffe.temperature = "piping hot";
            alert("Your coffe has been reheated!");
        }
    }
}

myCoffe.temperature = "cold";
console.log("The coffe temp: ", myCoffe.temperature);


slowIt(2);
