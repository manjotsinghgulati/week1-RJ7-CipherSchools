let myPromise = new Promise((fulfilled, notFulfilled) =>{
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    if(sum > 24){
        fulfilled(sum);
    }else{
        notFulfilled(new Error("Promise Not Fulfilled"));
    } 
});

myPromise
    .then({
        fulfilled: (sum) => {
            console.log(sum);
        }
    })
    .catch({
        notFulfilled: (error) => {
            console.log(error);
        }
    });