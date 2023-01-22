let obj1 = {name: "Manjot"};
let obj2 = {name: "Manjot"};

let areEqual = (obj1, obj2) => {

    if(obj1 === obj2){
        return true
    }
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false
    }
    for(let key of Object.keys(obj1)){
        if(typeof obj2[key] == "undefined"){
            return false
        }
        if(obj2[key] != obj1[key]){
            return false
        }
    }
    return true
}

console.log(areEqual(obj1, obj2));