let x, y, z;
x = 5;
y = 7;
z = x + y;
console.log(z);

let A = "Hello ", B = "world!", C = A + B;
console.log(C);

function SumNPrint(x1, x2){
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z){
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"]

function findTheBanana(fruit, index, array){
    if (fruit == "Banana"){
        alert("found the Banana in " + index);
    }
}

// L1.forEach(findTheBanana);
// L2.forEach(findTheBanana);

function greetingFunc(){
    let d = new Date();
    let h = d.getHours();

    const e = document.getElementById("greeting");

    if (h < 12){
        e.innerHTML = "Good morning!" + e.innerHTML; 
    } else if (12 < h < 18){
        e.innerHTML = "Good afternoon!" + e.innerHTML;
    } else if (18 < h < 20){
        e.innerHTML = "Good evening!" + e.innerHTML;
    } else if (20 < h < 24 || 0 < h < 5){
        e.innerHTML = "Good night!" + e.innerHTML;
    }
    
}

href="./index.html"
if (window.location.pathname == "/index.html"){
    greetingFunc();
}