function saveToLocalStorage(event){
    event.preventDefault();

    const name=event.target.name.value;
    const email=event.target.email.value;
    const number=event.target.number.value;
    const date=event.target.date.value;
    const time=event.target.time.value;
   
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('number',number);
    // localStorage.setItem('date',date);
    // localStorage.setItem('time',time);

   let obj ={
       name,
       email,
       number,
      date,
      time,
}
    localStorage.setItem('userdetails' , JSON.stringify(obj))
}
    // const obj_strngify = JSON.stringify(obj)
    // console.log(obj.stringify);
    // localStorage.setItem(obj.email, obj_strngify);
    // showUserOnScreen(obj);




//localStorage.setItem('name','appu')
//localStorage.removeItem('name')

//sessionStorage.setItem('name','jack')
//console.log(sessionStorage.getItem('name'))
//sessionStorage.removeItem('name')

//document.cookie ='name=kyle; expires' + new Date(2022,0,1).toUTCString()
//document.cookie ='lastName=smith; expires' + new Date(2022,0,1).toUTCString()

//console.log(document.cookie)


 
 
