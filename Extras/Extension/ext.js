var List = document.getElementById('pad')

for (let i = 0;i<4;i++){
  var listElement = document.createElement('li')
  listElement.classList.add('listElement'+i)
  listElement.id = 'listElement'+i
  List.appendChild(listElement)
}

let content = prompt("new note")
if(content != null){
  listElement1.innerText=content
}
