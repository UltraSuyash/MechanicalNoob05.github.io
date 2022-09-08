var view = document.getElementById('view');
var left = document.createElement('div');
left.classList.add('left')
var right = document.createElement('div');
right.classList.add('right')
var image = document.createElement('img');
left.id = 'image'
var header = document.createElement('h2');
header.id = 'title'
header.classList.add('title')
var para = document.createElement('p');
para.id = 'description'
para.classList.add('para')
var link = document.createElement('a')
link.id = 'link'
link.classList.add('link')
link.innerText = 'Link to Project'


var project = [
  ["Typing Test","Testing if this works","room.jpg","Extras/Typing_Test/type.html"],
  ["some other project", "Hello where are u","room.jpg","Extras/Typing_Test/type.html"],
  ["some other project", "Hello where are u","room.jpg"],
  ["some other project", "Hello where are u","room.jpg"],
]

function load(){
   while(view.firstChild){
    view.removeChild(view.lastChild)
  }
 view.appendChild(left)
  view.appendChild(right)
  left.appendChild(image)
  left.appendChild(link)
  right.appendChild(header)
  right.appendChild(para)
  image.src = project[1][2]
  title.innerText = project[1][0]
  para.innerText = project[1][1]
  link.setAttribute('href',project[1][3])

}
function recent(){
  while(view.firstChild){
    view.removeChild(view.lastChild)
  }
  view.appendChild(left)
  view.appendChild(right)
  left.appendChild(image)
  left.appendChild(link)
  right.appendChild(header)
  right.appendChild(para)

  image.src = project[1][2]
  title.innerText = project[1][0]
  para.innerText = project[1][1]
  link.setAttribute('href',project[1][3])
}
function current(){
  while(view.firstChild){
    view.removeChild(view.lastChild)
  }
  view.appendChild(left)
  view.appendChild(right)
  left.appendChild(image)
  left.appendChild(link)
  right.appendChild(header)
  right.appendChild(para)
  image.src = project[0][2]
  title.innerText = project[0][0]
  para.innerText = project[0][1]
  link.setAttribute('href',project[0][3])
}
function archive(number){
  while(view.firstChild){
    view.removeChild(view.lastChild)
  }
  var list = document.createElement('ul')
  list.classList.add('list-group')
  view.appendChild(list)
  for( let i = 1; i<number; i++){
    var listItem= document.createElement('li')
    listItem.id = 'listItem'+i
    listItem.classList.add('list-group-item')
    list.appendChild(listItem)
  }
  for( let i = 1; i<number; i++){
    var listItem = document.getElementById('listItem'+i)
    listItem.innerText = project[i][0]
  }
}
