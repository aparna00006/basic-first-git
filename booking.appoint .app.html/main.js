function saveToLocalStorage(event){
    event.preventDefault();

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let number=document.getElementById('number').value;
    let date=document.getElementById('date').value;
    let time=document.getElementById('time').value;

    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    localStorage.setItem('Contact Number',number);
    localStorage.setItem('Date for Appointment',date);
    localStorage.setItem('Time',time);


}





//localStorage.setItem('name','appu')
//localStorage.removeItem('name')

//sessionStorage.setItem('name','jack')
//console.log(sessionStorage.getItem('name'))
//sessionStorage.removeItem('name')

//document.cookie ='name=kyle; expires' + new Date(2022,0,1).toUTCString()
//document.cookie ='lastName=smith; expires' + new Date(2022,0,1).toUTCString()

//console.log(document.cookie)

// ELEMENT SELECTORS

// Single Element Selectors
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));
// Multiple Element Selectors
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByTagName('li'));
//console.log(document.getElementsByClassName('item'));

//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

//const form = document.querySelector('#saveToLocalStorage(event)');

//const nameInput = document.querySelector('#name')
//const emailInput = document.querySelector('#email');
//const number=document.querySelector('#Contact Number');
//const date=document.querySelector('#Date for Appointment')
//const Time=document.querySelector('#time')

//storing data
//const name=localStorage.setitem(`${nameInput}`);
//const email= localStorage.setItem(`${emailInput}`);
//const Number=localStorage.setItem(`${numberInput}`);
//const Date=localStorage.setItem(`${dateInput}`);
//const time=localStorage.setItem(`${timeInput}`);
 
 
