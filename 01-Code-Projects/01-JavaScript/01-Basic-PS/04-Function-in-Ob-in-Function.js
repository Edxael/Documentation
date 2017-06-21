// Executing a function that is inside of an Object whic is inside of a function

function sayHello(){
    console.log("HEllo");
    // console.log(this);s

    var obj = {
        make: "acura",
        model: "integra",
        year: 1997,
        transmission: "manual",
        act1: function(){console.log(this);},
        ainfo: function(){
            console.log("Executing:");
            for(x in obj){
                console.log(x, " ", obj[x]);
            }
        }
    }


    obj.act1();
    console.log("");

    obj.ainfo();

}



sayHello()
