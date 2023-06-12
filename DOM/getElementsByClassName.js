let menu = document.getElementById('Menu')
let items = menu.getElementsByClassName('item')

let data = [].map.call(items,item=>item.textContent)
console.log(data)