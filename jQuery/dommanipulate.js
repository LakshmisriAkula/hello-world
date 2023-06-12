
$(function () {

    $('#div1').after('<div style="background-color:yellow"> After div  </div>')
    $('#div2').before('<div style = "background-color:green"> before div </div>')

    $('#div1').append('Appened Text!')

    $('#div2').remove()

    $('<span>This is a span</span>').replaceAll('p')

    $('span').wrap('p')

})

