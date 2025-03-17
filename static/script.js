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

if (window.location.pathname.includes("/index.html") || window.location.pathname == "/WebDevLabs/"){
    greetingFunc();
}

function addYear(){
    let d = new Date();
    let y = d.getFullYear();
    
    const e = document.getElementById("copyyear");

    e.innerHTML += y;
}

function showList(element){
    const ui_element = document.getElementById("fun_list");

    ui_element.style.display = "block";
    element.style.display = "none";
}

function showMore(element){
    $(element).hide();
    $("#intro_more").show();
    $("#intro_less_button").show();
}

function showLess(element){
    $(element).hide();
    $("#intro_more").hide();
    $("#intro_more_button").show();
}

function submitForm(){
    const input1 = document.getElementById("name");
    const input2 = document.getElementById("email");
    const input3 = document.getElementById("comment");
    if (!input1.checkValidity() || !input2.checkValidity() || !input3.checkValidity()){
        document.getElementById("form_error").style.display = "block";
    }
}