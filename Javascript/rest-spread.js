// Rest and Spread Operator
let array = [5, 10, 20, 25, 30];

// Spread -> ...
console.log(...array);

// Rest -> ...
let maxOfNums = (...numbers) => {
    let max = Number.MIN_VALUE;
    for (let number of numbers) {
        max = Math.max(max, number)
    }
    return max;

}

console.log(maxOfNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// For Objects

let object = {
    name: "John",
    age: 25,
    city: "New York",
    address: {
        city: "New York",
        state: "NY",
        country: "USA" 
    }
}

let object2 = {...object}
object2.address.city = "New Jersey"
console.log(object2);