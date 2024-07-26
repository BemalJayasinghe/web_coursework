let iconCart = document.querySelector(".iconCart");
let cart = document.querySelector(".cart");
let container = document.querySelector(".container");
let close = document.querySelector(".close");

iconCart.addEventListener("click", function () {
  if (cart.style.right == "-100%") {
    cart.style.right = "0";
    container.style.transform = "translateX(-400px)";
  } else {
    cart.style.right = "-100%";
    container.style.transform = "translateX(0)";
  }
});

close.addEventListener("click", function () {
  cart.style.right = "-100%";
  container.style.transform = "translateX(0)";
});

let products = null;

// get data from localStorage
products = JSON.parse(localStorage.getItem("products"));
if (!products) {
  products = [
    {
      id: 1,
      name: "Forest Animal Hoodie",
      price: 5500,
      image: "images/1.webp",
    },
    {
      id: 2,
      name: "Pine Tree Sweatshirt",
      price: 4500,
      image: "images/2.webp",
    },
    {
      id: 3,
      name: "Flower Fox Sweatshirt",
      price: 3000,
      image: "images/3.webp",
    },
    {
      id: 4,
      name: "Save World Sweatshirt",
      price: 2200,
      image: "images/4.webp",
    },
    {
      id: 5,
      name: "Dopper - Coral Splash",
      price: 2500,
      image: "images/5.webp",
    },
    {
      id: 6,
      name: "Dopper OG - Tidal Teal",
      price: 2300,
      image: "images/6.webp",
    },
    {
      id: 7,
      name: "Dopper - Pacific Blue",
      price: 2500,
      image: "images/7.webp",
    },
    {
      id: 8,
      name: "Dopper LM - Dark Spring",
      price: 2300,
      image: "images/8.webp",
    },
    {
      id: 9,
      name: "Monarch of the Glen Art",
      price: 7000,
      image: "images/9.webp",
    },
    {
      id: 10,
      name: "King Of Jungle Art",
      price: 10200,
      image: "images/10.webp",
    },
    {
      id: 11,
      name: "Protect Panda's Art",
      price: 2500,
      image: "images/11.webp",
    },
    {
      id: 12,
      name: "Dance Of Longhorns Art",
      price: 7500,
      image: "images/12.webp",
    },
    {
     id: 13,
     name: "PlantX Tote Bag",
     price: 1500,
     image: "images/13.webp"
    },
    {
     id: 14,
     name: "Fox Tote Bag",
     price: 1750,
     image: "images/14.webp"
    }
    ,
    {
     id: 15,
     name: "Pola Tote Bag",
     price: 1750,
     image: "images/15.webp"
    }
    ,
    {
     id: 16,
     name: "Owl Statue",
     price: 1750,
     image: "images/16.webp"
    }
    ,
    {
     id: 17,
     name: "Giraffe Statue",
     price: 1750,
     image: "images/17.webp"
    }
  ];
  localStorage.setItem("products", JSON.stringify(products));
}
addDataToHTML();

// show products in list
function addDataToHTML() {
  let listProductHTML = document.querySelector(".listProduct");
  listProductHTML.innerHTML = "";

  if (products != null) {
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.innerHTML = `
        <img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="price">Rs.${product.price}</div>
        <button onclick="addCart(${product.id})">Add To Cart</button>`;
      listProductHTML.appendChild(newProduct);
    });
  }
}

let listCart = JSON.parse(localStorage.getItem("listCart")) || [];

function addCart($idProduct) {
  let productsCopy = JSON.parse(JSON.stringify(products));
  let product = productsCopy.find((product) => product.id === $idProduct);
  if (!product) return;

  let cartItem = listCart.find((item) => item.id === $idProduct);
  if (!cartItem) {
    product.quantity = 1;
    listCart.push(product);
  } else {
    cartItem.quantity++;
  }

  localStorage.setItem("listCart", JSON.stringify(listCart));
  addCartToHTML();
}

function addCartToHTML() {
  let listCartHTML = document.querySelector(".listCart");
  listCartHTML.innerHTML = "";

  let totalHTML = document.querySelector(".totalQuantity");
  let totalQuantity = 0;

  listCart.forEach((product) => {
    if (product) {
      let newCart = document.createElement("div");
      newCart.classList.add("item");
      newCart.innerHTML = `
        <img src="${product.image}">
        <div class="content">
          <div class="name">${product.name}</div>
          <div class="price">Rs.${product.price} / 1 product</div>
        </div>
        <div class="quantity">
          <button onclick="changeQuantity(${product.id}, '-')">-</button>
          <span class="value">${product.quantity}</span>
          <button onclick="changeQuantity(${product.id}, '+')">+</button>
        </div>`;
      listCartHTML.appendChild(newCart);
      totalQuantity += product.quantity;
    }
  });

  totalHTML.innerText = totalQuantity;
}

function changeQuantity($idProduct, $type) {
  let cartItem = listCart.find((item) => item.id === $idProduct);
  if (!cartItem) return;

  if ($type === "+") {
    cartItem.quantity++;
  } else if ($type === "-") {
    cartItem.quantity--;
    if (cartItem.quantity <= 0) {
      listCart = listCart.filter((item) => item.id !== $idProduct);
    }
  }

  localStorage.setItem("listCart", JSON.stringify(listCart));
  addCartToHTML();
}

addCartToHTML();

let checkoutLink = document.querySelector(".checkout a");

checkoutLink.addEventListener("click", function (event) {
  let totalQuantity = document.querySelector(".totalQuantity").innerText;
  if (parseInt(totalQuantity) === 0) {
    alert(
      "Your cart is empty. Please add items to the cart before checking out."
    );
    event.preventDefault();
  }
});
