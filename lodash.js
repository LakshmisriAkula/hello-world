var _ = require("lodash");
var numbers = [1,2,3,4];
var sum = 0
_.each(numbers,function(x){
    sum+=x
})

console.log(sum)
