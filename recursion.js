

function decrement(n){
    console.log(n)
    if(n>1){
        decrement(n-1)
    }
}

decrement(10)