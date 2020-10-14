console.log("its fine upto here")

var names = new Array();
var l = prompt("Enter site you want to block");
names.push(l);

localStorage.setItem("names", JSON.stringify(names));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
storedNames.forEach(element => {
    console.log(element);
});