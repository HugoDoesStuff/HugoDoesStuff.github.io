function myFunction() {
   document.getElementById("demo").innerHTML = "Haha Just Kidding.";
}

window.alert("I don't know who you are. I don't know what you want. If you are looking for a ransom, I can tell you, I don't have money. But what I do have are a very particular set of skills. Skills I've acquired over a very long career. Skills that make me a nightmare for people like you. If you let my daughter go now, that'll be the end of it. I will not look for you. I will not pursue you. But if you don't, I will look for you. I will find you......and I will kill you.")

var btnContainer = document.getElementById("myDIV");

var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.getElementById("demo").innerHTML =
 Math.floor(Math.random() * 101);

 throw "Obama";

 function myFunktion() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementByIsis("demon").innerHTML = fruits;

function myFunctions() {
    fruits.sort();
    document.getElementByIsis("demon").innerHTML = fruits;
}