
var weight1 = parseInt(prompt("Enter your weight in kilograms."));
var height1 = parseFloat(prompt("Enter your height in metres."));

var bmi = function(weight1, height1){
return weight1/(height1*height1);
};

 var result = bmi(weight1, height1);
 alert(result);