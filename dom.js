//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document)
//console.log(document.images);
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye'
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3'
//header.style.borderBottom = 'solid 3px #000';
//GETSELEMENTBYID//
let header = document.getElementById('main-header');
header.style.borderBottom ='2px solid black'
//GETSELEMENTSBYCLASSNAME//
let items = document.getElementsByClassName('list-group-item');
console.log(items);
//console.log(items[1]);
//items[1].textContent = 'hello 2';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';

//for(let i=0;i<items.length;i++){
   //items[i].style.backgroundColor ='#f4f4f4;'
//}

//gives error
//items.style.bacground= '#f4f4f4';
//for(let i=0;i<items.length;i++){
 //   items[i].style.backgroundColor= '#f4f4f4';
//}
//let item = document.getElementsByClassName('title');
//console.log(item);
//for(let i=0;i<item.length;i++){
   // item[i].style.fontWeight = 'bold';
   // item[i].style.color = 'green';
//}
//item[0].style.fontWeight='bold';
//item[0].style.color='green';

let li= document.getElementsByTagName('li');
console.log(li);
li[0].style.fontWeight = 'bold'
li[1].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'green';
li[2].style.fontWeight = 'bold';
li[3].style.fontWeight = 'bold';
li[4].style.fontWeight = 'bold'


//QUERYSELECTOR//
//let item = document.querySelector('.list-group-item');
//item.style.color = 'red';
