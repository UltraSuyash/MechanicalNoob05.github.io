var one = document.getElementById('first')
var two = document.getElementById('second')
var three = document.getElementById('third')

var divmain = document.createElement('div')
divmain.classList.add('container')
var divleft = document.createElement('div')
divleft.classList.add('left')
var divright = document.createElement('div')
divright.classList.add('right')

divmain.appendChild(divleft)
divmain.appendChild(divright)

function recent(number) {
  divleft.innerText= 'left' + number
  divright.innerText= 'right'+ number
  one.appendChild(divmain)
}
