function saveToLocalStorage(event) {
    event.preventDefault();
    const candy = event.target.CandyName.value;
    const description = event.target.description.value;
    const price = event.target.Price.value;
    let quantity = event.target.Quantity.value;
  
    let obj = {
      candy,
      description,
      price,
      quantity,
    };
    axios.post("https://crudcrud.com/api/c80ffa353cc24a40a5c0884eb8274354/CandyShop",obj)
    .then((res)=>{
        showUserOnScreen(res.data);
       })
       .catch((err)=>{
          console.log(err);
       });
}
   window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/c80ffa353cc24a40a5c0884eb8274354/CandyShop")
    .then((res)=>{
      for (let i = 0; i < res.data.length; i++) {
        showUserOnScreen(res.data[i]);
      };
    }) 
    .catch ((err)=>{
      showUserOnScreen(err);
    })
  });
  
   function showUserOnScreen(obj) {
    const parentEl = document.querySelector("#formElements");
    const childEl = document.createElement("li");
    childEl.textContent = `${obj.candy} - ${obj.description} - ${obj.price} - ${obj.quantity}`
    childEl.classList = "candy-details";
    parentEl.appendChild(childEl);
    const btn1 = document.createElement("input");
    btn1.type = "button";
    btn1.value = "Buy1";
    childEl.appendChild(btn1);
    const btn2 = document.createElement("input");
    btn2.type = "button";
    btn2.value = "Buy2";
    childEl.appendChild(btn2);
    const btn3 = document.createElement("input");
    btn3.type = "button";
    btn3.value = "Buy3";
    childEl.appendChild(btn3);
  
    // button click
    btn1.onclick =  () => {
        axios.put(`https://crudcrud.com/api/c80ffa353cc24a40a5c0884eb8274354/CandyShop/${obj._id}`,
          {
            candy: `${obj.candy}`,
            description: `${obj.description}`,
            price: `${obj.price}`,
            quantity: `${obj.quantity - 1}`,
          }
        );
  
        axios.get(`https://crudcrud.com/api/c80ffa353cc24a40a5c0884eb8274354/CandyShop/${obj._id}`)
        .then((res)=>{
        showUserOnScreen(res.data);
        parentEl.removeChild(childEl);
      }) .catch ((err)=> console.log(err))
      }
    btn2.onclick =  () => {
    axios.put(`https://crudcrud.com/api/c80ffa353cc24a40a5c0884eb8274354/CandyShop/${obj._id}`,
          {
            candy: `${obj.candy}`,
            description: `${obj.description}`,
            price: `${obj.price}`,
            quantity: `${obj.quantity - 2}`,
          }
        );
  
        axios.get(`https://crudcrud.com/api/c80ffa353cc24a40a5c0884eb8274354/CandyShop/${obj._id}`)
        .then((res)=>{
            showUserOnScreen(res.data);
            parentEl.removeChild(childEl);
          }) .catch ((err)=> console.log(err))
          }
    btn3.onclick = () => {
      axios.put(`https://crudcrud.com/api/c80ffa353cc24a40a5c0884eb8274354/CandyShop/${obj._id}`,
          {
            candy: `${obj.candy}`,
            description: `${obj.description}`,
            price: `${obj.price}`,
            quantity: `${obj.quantity - 3}`,
          }
        );
        axios.get(`https://crudcrud.com/api/c80ffa353cc24a40a5c0884eb8274354/CandyShop/${obj._id}`)
        .then((res)=>{
            showUserOnScreen(res.data);
            parentEl.removeChild(childEl);
          }) .catch ((err)=> console.log(err))
            
          }
        
   } ; 