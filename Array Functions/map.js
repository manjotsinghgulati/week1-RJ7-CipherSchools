
let array = [5, 10, 15, 20, 25];

let newArray = array.map((element, index) => {
    console.log(index)
    return element * element;
})

console.log(newArray);
