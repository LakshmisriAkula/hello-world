let btn = document.getElementById('btnCount')
btn.addEventListener('click',()=>{
    let headings = document.getElementsByTagName('h2')
    alert(`The no. of h2 tags:${headings.length}`)
})
