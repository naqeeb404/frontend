//TASK 1

/*function run (a1){
    var b1 =a1;
    return function (){
        b1 += 10;
        return b1;
    }
}

const fn = run (50);
fn();
console.log(fn());*/

//TASK 2
// var name = "Javascript Centric";

// function run(){
//     var name = "Ravi Sharma";
//     setTimeout(function(){
//         console.log(name);

//     },1000);
// }

// run();


//TASK 4
var a = 10;
function run(){
    var a =20;

    function fast(){
        console.log(a);
    }

    return fast;
}

var x = run();
x();