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
//let header = document.getElementById('main-header');
//header.style.borderBottom ='2px solid black'
//GETSELEMENTSBYCLASSNAME//
//let items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'hello 2';
//items[0].style.fontWeight = 'bold';
//items[1].style.fontWeight = 'bold';
//items[2].style.backgroundColor = 'green';
//items[2].style.fontWeight = 'bold';
//items[3].style.fontWeight = 'bold';

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

//let li= document.getElementsByTagName('li');
//console.log(li);
//li[0].style.fontWeight = 'bold'
//li[1].style.fontWeight = 'bold';
//li[2].style.backgroundColor = 'green';
//li[2].style.fontWeight = 'bold';
//li[3].style.fontWeight = 'bold';
//li[4].style.fontWeight = 'bold';

//QUERYSELECTOR//
//let item = document.querySelector('.list-group-item');
//item.style.backgroundColor = 'green';

//let secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor = 'green';

// thirditem = document.querySelector('.list-group-item:nth-child(3)');
//thirditem.style.color = 'white';

//AllQUERYSELECTOR//
//let li = document.querySelectorAll('li');
//console.log(li);
//console.log(li[1]);
//li[1].style.color = 'green';
//li[1].style.fontColor = 'red';

//TRAVERSING THE DOM//
//let itemlist = document.querySelector('#items');
// parentNode
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemlist.parentNode.parentNode.parentNode);

//parentElement
//console.log(itemlist.parentElement);
//itemlist.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemlist.parentElement.parentElement.parentElement);

//childNode
//console.log(itemlist.children);
//console.log(itemlist.children[1]);
//itemlist.children[1].style.backgroundColor = 'yellow'

//FirstChild
//console.log(itemlist.firstChild);
//firstelementchild
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent = 'hello 1';

//lastChild
//console.log(itemlist.lastChild);
//lastelementchild
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent = 'hello 4';

//nextsibling
//console.log(itemlist.nextSibling);
//nextelementsibling
//console.log(itemlist.nextElementSibling);

//previoussibling
//console.log(itemlist.previousSibling);
//itemlist.previousSibling.textContent = 'HEllo word';
//previousElementSibling
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color = 'green';


//createElement

//create a div
//let newDiv = document.createElement('div');

// Add class
//newDiv.className='hello';

// add id
//newDiv.id = 'hello1';

// add atrribute
//newDiv.setAttribute('title','Hello Div');

// create text node
//let newDivText = document.createTextNode('HEllo word');

// add text to div
//newDiv.appendChild(newDivText);

//let container = document.querySelector('header .container');
//let h1 = document.querySelector('header h1');

//console.log(newDiv);

//let newDiv1 = document.createElement('div');
//newDiv1.className="list-group-item";
//newDiv1.id = "hello 1";
//console.log(newDiv1);
// set attribute
//newDiv1.setAttribute("title","HEllo");

//createTextNode
//let newDiv1Text = document.createTextNode("HEllo word");
//add text to div (appendchild)
//newDiv1.appendChild(newDiv1Text);

//const uiContainer =document.querySelector("div ul");
//console.log(uiContainer);
//const liCon =document.querySelector("div li");
//console.log(liCon);
//uiContainer.insertBefore(newDiv1,liCon);

//container.insertBefore(newDiv, h1);

let form = document.getElementById('addForm');
let itemlist= document.getElementById('items');
let filter = document.getElementById('filter');

//Form submit event
 form.addEventListener('submit', addItem);
 // delete event
 itemlist.addEventListener('click', removeItem);
 // filter event
 filter.addEventListener('keyup',filterItems);

 //Add item
 function addItem(e){
   e.preventDefault();

   //Get input value
   let newItem = document.getElementById('item').value;

 //create new li element
  let li = document.createElement('li');
  //Add class
  li.className = 'list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create del button element
  let deleteBtn = document.createElement('button');
  //create edit button element
  let EditBtn = document.createElement('button')

  //Add classes to del button
  deleteBtn.className ='btn btn-danger btn-sm float-right delete'
  //add class to edit
   EditBtn.className = "btn btn-success btn-sm float-right edit"

  //append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  EditBtn.appendChild(document.createTextNode('Edit'))

  // Append button to li
  li.appendChild(deleteBtn);
  //append button to li
  li.appendChild(EditBtn)

  // append li to list
  itemlist.appendChild(li);
 }

 // remove item
 function removeItem(e){
      if(e.target.classList.contains('delete')){
         if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemlist.removeChild(li);
         }
      }
 }

//filter items
//function filterItems(e){
  //convert text to lowerCase
  //let text = e.target.value.toLowerCase();
  // get lis
  //let items = itemlist.getElementsByTagName('li');
  //convert to an array
 // Array.from(items).forEach(function(item){
   //let itemName = item.firstChild.textContent;
   //if(itemName.toLowerCase().indexOf(text) !=-1){
     // item.style.display = 'block';
 // } else {
   //item.style.display ='none';
 // }
//});
//}