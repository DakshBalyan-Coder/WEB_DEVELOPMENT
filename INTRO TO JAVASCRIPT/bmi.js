function bmicalculator(height,weight) {
    var bmi = weight/(height* height);
    return bmi;
}
var bmi = bmicalculator(70, 80.5);
console.log(bmi);