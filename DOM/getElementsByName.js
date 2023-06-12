let btn = document.getElementById('btnRate')
let outPut = document.getElementById('output')

btn.addEventListener('click',()=>{
    let rates = document.getElementsByName('rate')
    rates.forEach((rate)=>{
        if(rate.checked){
            outPut.innerText = `you selected: ${rate.value}`
        }

    });

});