let listCart = JSON.parse(localStorage.getItem("listCart")) || [];
addCartToHTML();

function addCartToHTML() {
  let listCartHTML = document.querySelector(".returnCart .list");
  listCartHTML.innerHTML = "";

  let totalQuantityHTML = document.querySelector(".totalQuantity");
  let totalPriceHTML = document.querySelector(".totalPrice");
  let totalQuantity = 0;
  let totalPrice = 0;

  listCart.forEach((product) => {
    if (product) {
      let newCart = document.createElement("div");
      newCart.classList.add("item");
      newCart.innerHTML = `
        <img src="${product.image}">
        <div class="info">
          <div class="name">${product.name}</div>
          <div class="price">Rs.${product.price}/1 product</div>
        </div>
        <div class="quantity">${product.quantity}</div>
        <div class="returnPrice">Rs.${product.price * product.quantity}</div>`;
      listCartHTML.appendChild(newCart);
      totalQuantity += product.quantity;
      totalPrice += product.price * product.quantity;
    }
  });

  totalQuantityHTML.innerText = totalQuantity;
  totalPriceHTML.innerText = "Rs." + totalPrice;
}

// Form validation
document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let country = document.getElementById("country");
    let city = document.getElementById("city");

    if (!name.value) {
      isValid = false;
      alert("Full Name is required.");
    }
    if (!phone.value || !/^[0-9]{10}$/.test(phone.value)) {
      isValid = false;
      alert("Phone Number is required and must be 10 digits.");
    }
    if (!address.value) {
      isValid = false;
      alert("Address is required.");
    }
    if (!country.value) {
      isValid = false;
      alert("Country is required.");
    }
    if (!city.value) {
      isValid = false;
      alert("City is required.");
    }

    if (isValid) {
      alert("Order Placed Successfully!");
    }
  });
