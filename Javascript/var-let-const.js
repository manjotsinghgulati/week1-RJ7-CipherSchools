const constName = "Manjot";
console.log(constName);
constName = "Ajay"  
// The above line won't work as Const can't be reassigned

let letName = "Manjot";
console.log(letName);
letName = "Ajay"  
// The above line will work as let can be reassigned

let letName = "Abhay";
// The above line won't work as let can't be redeclared

var varName = "Abhay";
console.log(varName);
varName = "Ajay"
// The above line will work as var can be reassigned

var varName = "Mohit";
// The above line will work as let can be redeclared

