let num1 = parseInt(25);
let num2 = parseInt(65);
const n1 = Promise.resolve(num1);
const n2 = Promise.resolve(num2);
test([n1,n2])

function test(arr){
arr.forEach(function(element){
  element.then(function(value){
    if(value>42){
      console.log(value +" is resolved")
    }else{
      console.log(value +" is rejected")
    }
  })
})

}