// Default Params

// function addNums(num1, num2){
//     return num1 + num2;
// }

const addNums = (num1, num2 = 5) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}

console.log(addNums(5, 4));