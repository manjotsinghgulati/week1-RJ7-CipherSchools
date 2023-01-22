let array = [50, "40", 30, 20, 10, 111];

let newArray = array.sort((a, b) => {
    a = Number(a)
    b = Number(b) 
    return a - b;
})

console.log(newArray);