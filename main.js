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
  ["some other project", "Hello where are u","room.jpg","Extras/Typing_Test/type.html"],
  ["Typing Test","It is a simple web application that renders a random quote, there is an input field which is used to take user input, the value entered from the user is checked against the actual quote, there is a couter which resets as soon as you finish the task.There are various measures of performance are displayed below as soon as they are completed.","room.jpg","Extras/Typing_Test/type.html"],
  ["Typing Test","It is a simple web application that renders a random quote, there is an input field which is used to take user input, the value entered from the user is checked against the actual quote, there is a couter which resets as soon as you finish the task.There are various measures of performance are displayed below as soon as they are completed.","#"],
]
var number = project.length

function load(){
   while(view.firstChild){
    view.removeChild(view.lastChild)
  }
  while(right.firstChild){
    right.removeChild(right.lastChild)
  }
  while(left.firstChild){
    left.removeChild(left.lastChild)
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
  while(right.firstChild){
    right.removeChild(right.lastChild)
  }
  while(left.firstChild){
    left.removeChild(left.lastChild)
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
  while(right.firstChild){
    right.removeChild(right.lastChild)
  }
  while(left.firstChild){
    left.removeChild(left.lastChild)
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
function archive(){
  while(view.firstChild){
    view.removeChild(view.lastChild)
  }
  while(right.firstChild){
    right.removeChild(right.lastChild)
  }
  while(left.firstChild){
    left.removeChild(left.lastChild)
  }
  var list = document.createElement('ul')
  list.classList.add('list-group')
  view.appendChild(left)
  view.appendChild(right)
  left.appendChild(image)
  left.appendChild(link)
  right.appendChild(list)
  for( let i = 1; i<number; i++){
    var listItem= document.createElement('li')
    listItem.id = 'listItem'+i
    listItem.classList.add('list-group-item')
    listItem.setAttribute('onclick','random('+i+')')
    list.appendChild(listItem)
  }
  for( let i = 1; i<number; i++){
    var listItem = document.getElementById('listItem'+i)
    listItem.innerText = project[i][0]
  }

}
function random(input){
  link.setAttribute('href',project[0][3])
}

document.addEventListener("keydown", e =>{
  if (
    e.key.toLowerCase() === "u"
      && e.ctrlKey
     ){
    alert("Thank you, This is one of the easter eggs I thought to include in.")
  }
})
