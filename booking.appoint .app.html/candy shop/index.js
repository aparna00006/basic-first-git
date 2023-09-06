async function saveToLocalStorage(event) {
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
  try {
    const postData = await axios.post("https://crudcrud.com/api/6c01f7c4d8634e4fba9a5e9bf864e584/CandyShop",obj);
    showUserOnScreen(postData.data);
  } catch (err) {
    alert(err.message);
  }
}
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const windowData = await axios.get("https://crudcrud.com/api/6c01f7c4d8634e4fba9a5e9bf864e584/CandyShop");
    for (let i = 0; i < windowData.data.length; i++) {
      showUserOnScreen(windowData.data[i]);
    }
  } catch (err) {
    console.log(err);
  }
});

function showUserOnScreen(obj) {
  const parentEl = document.querySelector("#formElements");
  const childEl = document.createElement("li");
  childEl.textContent = `${obj.candy} - ${obj.description} - ${obj.price} - ${obj.quantity}`;
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
  btn1.onclick = async () => {
    if (obj.quantity >= 1) {
      try {
        const dataChange = await axios.put(
          `https://crudcrud.com/api/6c01f7c4d8634e4fba9a5e9bf864e584/CandyShop/${obj._id}`,
          {
            candy: `${obj.candy}`,
            description: `${obj.description}`,
            price: `${obj.price}`,
            quantity: `${obj.quantity - 1}`,
          }
        );
        const getData = await axios.get(
          `https://crudcrud.com/api/6c01f7c4d8634e4fba9a5e9bf864e584/CandyShop/${obj._id}`
        );
        showUserOnScreen(getData.data);
        parentEl.removeChild(childEl);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("quantity is not available");
    }
  };
  btn2.onclick = async () => {
    if (obj.quantity >= 2) {
      try {
        const dataChange2 = await axios.put(
          `https://crudcrud.com/api/6c01f7c4d8634e4fba9a5e9bf864e584/CandyShop/${obj._id}`,
          {
            candy: `${obj.candy}`,
            description: `${obj.description}`,
            price: `${obj.price}`,
            quantity: `${obj.quantity - 2}`,
          }
        );
        const getData2 = await axios.get(
          `https://crudcrud.com/api/6c01f7c4d8634e4fba9a5e9bf864e584/CandyShop/${obj._id}`
        );
        showUserOnScreen(getData2.data);
        parentEl.removeChild(childEl);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("quantity is not available");
    }
  };
  btn3.onclick = async () => {
    if (obj.quantity >= 3) {
      try {
        const dataChange3 = await axios.put(
          `https://crudcrud.com/api/6c01f7c4d8634e4fba9a5e9bf864e584/CandyShop/${obj._id}`,
          {
            candy: `${obj.candy}`,
            description: `${obj.description}`,
            price: `${obj.price}`,
            quantity: `${obj.quantity - 3}`,
          }
        );
        const getData3 = await axios.get(
          `https://crudcrud.com/api/6c01f7c4d8634e4fba9a5e9bf864e584/CandyShop/${obj._id}`
        );
        showUserOnScreen(getData3.data);
        parentEl.removeChild(childEl);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("quantity is not available");
    }
  };
}
