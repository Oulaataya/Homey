"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const loginform = document.getElementById("info");
  if (loginform) {
    loginform.addEventListener("submit", function (e) {
      e.preventDefault();
      localStorage.setItem("isloggedin", "true");
      window.location.href = "index.html";
    });
  }
  const log = document.getElementById("log");
  if (log) {
    const isloggedin = localStorage.getItem("isloggedin");
    if (isloggedin == "true") {
      log.innerHTML = `<h3>
      <a href="#" id="logout-btn" onClick="logout()">
        Sign out
      </a>
    </h3><div class="logout">
    <a href="cart.html"> <img src="image/grocery.png" alt="car"  width="30px" heigth="2px"/></a>
      </div>
   `;
      document
        .getElementById("logout-btn")
        .addEventListener("click", function (e) {
          e.preventDefault();
          localStorage.removeItem("isloggedin");
          location.reload();
        });
    }
  }

  const product = [
    //bath-----------------------------------------
    {
      id: 1,
      type: "b1",
      name: "Classic Bathroom ",
      category: "bath",
      price: 200,
      image: " image/bath1.jpg",
    },
    {
      id: 1,
      type: "b2",
      name: "Gray bathroom ",
      category: "bath",
      price: 100,
      image: " image/bath2.jpg",
    },
    {
      id: 1,
      type: "b3",
      name: "Wooden bathroom ",
      category: "bath",
      price: 500,
      image: " image/bath3.jpg",
    },
    {
      id: 1,
      type: "b4",
      name: "Green bathroom ",
      category: "bath",
      price: 100,
      image: " image/bath4.jpg",
    },
    {
      id: 1,
      type: "b5",
      name: "Modern bathroom",
      category: "bath",
      price: 800,
      image: " image/bath5.jpg",
    },
    {
      id: 1,
      type: "b6",
      name: "Simple bath ",
      category: "bath",
      price: 100,
      image: " image/bath6.jpg",
    },

    //living--------------------------------------------------
    {
      id: 2,
      type: "l1",
      name: "B&G room ",
      category: "living",
      price: 800,
      image: " image/liv1.jpg",
    },
    {
      id: 2,
      type: "l2",
      name: "Classic room ",
      category: "living",
      price: 700,
      image: " image/liv2.jpg",
    },
    {
      id: 2,
      type: "l3",
      name: "Wooden room ",
      category: "living",
      price: 200,
      image: " image/liv3.jpg",
    },
    {
      id: 2,
      type: "l4",
      name: "Classic room ",
      category: "living",
      price: 800,
      image: " image/liv4.jpg",
    },
    {
      id: 2,
      type: "l5",
      name: "White room ",
      category: "living",
      price: 200,
      image: " image/liv5.jpg",
    },
    {
      id: 2,
      type: "l6",
      name: "Old room ",
      category: "living",
      price: 100,
      image: " image/liv6.jpg",
    },
    //bedroom------------------------------------------------
    {
      id: 3,
      type: "be1",
      name: "Pink room ",
      category: "bed",
      price: 300,
      image: " image/bed1.jpg",
    },
    {
      id: 3,
      type: "be2",
      name: "Modern room ",
      category: "bed",
      price: 800,
      image: " image/bed2.jpg",
    },
    {
      id: 3,
      type: "be3",
      name: "Black room ",
      category: "bed",
      price: 300,
      image: " image/bed3.jpg",
    },
    {
      id: 3,
      type: "be4",
      name: "White room ",
      category: "bed",
      price: 900,
      image: " image/bed4.jpg",
    },
    {
      id: 3,
      type: "be5",
      name: "Classic room ",
      category: "bed",
      price: 300,
      image: " image/bed5.jpg",
    },
    {
      id: 3,
      type: "be6",
      name: "Simple room ",
      category: "bed",
      price: 200,
      image: " image/bed6.jpg",
    },
    //garden--------------------------------------------------------
    {
      id: 4,
      type: "g1",
      name: "Modern  ",
      category: "garden",
      price: 800,
      image: " image/g1.jpg",
    },
    {
      id: 4,
      type: "g2",
      name: "Wooden  ",
      category: "garden",
      price: 500,
      image: " image/g2.jpg",
    },
    {
      id: 4,
      type: "g3",
      name: "Classic  ",
      category: "garden",
      price: 400,
      image: " image/g3.jpg",
    },
    {
      id: 4,
      type: "g4",
      name: "Circle  ",
      category: "garden",
      price: 700,
      image: " image/g4.jpg",
    },
    {
      id: 4,
      type: "g5",
      name: "simple ",
      category: "garden",
      price: 200,
      image: " image/g5.jpg",
    },
    {
      id: 4,
      type: "g6",
      name: "Pink ",
      category: "garden",
      price: 350,
      image: " image/g6.jpg",
    },
    //kitchen---------------------------------------------------
    {
      id: 5,
      type: "k1",
      name: "Blue classic ",
      category: "kitchen",
      price: 350,
      image: " image/k1.jpg",
    },
    {
      id: 5,
      type: "k2",
      name: " classic ",
      category: "kitchen",
      price: 400,
      image: " image/k2.jpg",
    },
    {
      id: 5,
      type: "k3",
      name: "Wooden ",
      category: "kitchen",
      price: 200,
      image: " image/k3.jpg",
    },
    {
      id: 5,
      type: "k4",
      name: "Black modern ",
      category: "kitchen",
      price: 500,
      image: " image/k4.jpg",
    },
    {
      id: 5,
      type: "k5",
      name: "White&Green",
      category: "kitchen",
      price: 550,
      image: " image/k5.jpg",
    },
    {
      id: 5,
      type: "k6",
      name: "Old Kitchen",
      category: "kitchen",
      price: 500,
      image: " image/k6.jpg",
    },
    //dining---------------------------------------------------
    {
      id: 6,
      type: "d1",
      name: "Coffee table",
      category: "dining",
      price: 550,
      image: " image/din1.jpg",
    },
    {
      id: 6,
      type: "d2",
      name: "White Room ",
      category: "dining",
      price: 950,
      image: " image/din2.jpg",
    },
    {
      id: 6,
      type: "d3",
      name: "Simple room",
      category: "dining",
      price: 350,
      image: " image/din3.jpg",
    },
    {
      id: 6,
      type: "d4",
      name: "Modern table",
      category: "dining",
      price: 500,
      image: " image/din4.jpg",
    },
    {
      id: 6,
      type: "d5",
      name: "Black room",
      category: "dining",
      price: 550,
      image: " image/din5.jpg",
    },
    {
      id: 6,
      type: "d6",
      name: "G&M room",
      category: "dining",
      price: 1000,
      image: " image/din6.jpg",
    },
  ];

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const filterproduct = product.filter((product) => {
    return product.category === category;
  });

  const container = document.getElementById("box");
  filterproduct.forEach((product) => {
    container.innerHTML += `<div id="dining" class="card">
        <img src=${product.image} alt=${product.name} />
        <h3>${product.name}</h3>
        <h2><b>Price: $${product.price} </b></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio et,
          illo
        </p>
        <a href="prodetails.html?type=${product.type}" >
          <button>View Product</button>
        </a>
      </div> `;
  });

  const prams = new URLSearchParams(window.location.search);
  const depro = prams.get("type");
  const filter = product.filter((product) => {
    return product.type == depro;
  });

  const con = document.getElementById("deProbox");
  filter.forEach((product) => {
    con.innerHTML += `<div class="decard">
        <img src=${product.image} alt=${product.name} />
        <div class="details">
          <h3>${product.name}</h3>
          <h2>Price:${product.price}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            explicabo expedita eveniet placea dolor sit amet<br> consectetur adipisicing elit. Sit,
            explicabo expedita eveniet placea 
          </p>
          <a  onClick="addToCart('${product.type}')">
            <button>Add To Cart</button>
          </a>
        </div>
      </div>`;
  });
  const cartBox = document.getElementById("cartbox");
  const totalel = document.getElementById("total");
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (cart.length == 0) {
    cartBox.innerHTML += `<h2>Cart is Empty 🛒</h2>`;
    totalel.innerHTML += `<h3>Total: $0</h3>`;
  } else {
    let total = 0;

    cart.forEach((item) => {
      let productData = product.find((p) => p.type === item.type);
      total += productData.price * item.qty;

      cartBox.innerHTML += `
    <div class="cart-item">
        <img src="${productData.image}" alt="${productData.name}" />
      <h3>${productData.name}</h3>
       <p>Price: $${productData.price}</p>

    <div class="btnqty">
    <button onClick="increaseqty('${item.type}')">+</button>
    <span>${item.qty}</span>
      <button onClick="decreaseqty('${item.type}')">-</button>
      </div>
    <button id="delete" onClick="removeitem('${item.type}')">Del</button>
      </div>`;
    });
    totalel.innerHTML += `Total :$${total}`;
  }
});
function addToCart(type) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  let item = cart.find((i) => i.type === type);
  if (item) {
    item.qty++;
  } else {
    cart.push({ type: type, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added To Cart 🤩");
}
function increaseqty(type) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  let item = cart.find((p) => p.type === type);
  if (item) {
    item.qty++;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
function decreaseqty(type) {
  let cart = JSON.parse(localStorage.getItem("cart") || []);

  let item = cart.find((p) => p.type === type);
  if (item) {
    item.qty--;
  }
  if (item.qty <= 0) {
    cart = cart.filter((p) => p.type !== type);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function removeitem(type) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  cart = cart.filter((p) => p.type !== type);

  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
