var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var Uppercasefirstchar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowerCase();
var CapitalizedName = Uppercasefirstchar + restOfName;
alert("Hello,"  + CapitalizedName);
                