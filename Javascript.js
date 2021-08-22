function showMenu() {
  const burger = document.getElementById("burger");
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-link-active");
    burger.classList.toggle("toggle");
  });
}
showMenu();

function showSearch() {
  const searchBtn = document.getElementById("searchBar");

  searchBtn.addEventListener("click", () => {
    document.getElementById("SB").classList.toggle("SearchBarShow");
    searchBtn.classList.toggle("search-active");
    document
      .getElementsByClassName("triangle")[0]
      .classList.toggle("triangle-active");
  });
}
showSearch();

function showFilterList() {
  const filterBtn = document.getElementById("filterBar");

  filterBtn.addEventListener("click", () => {
    document.getElementById("FL").classList.toggle("FilterListShow");
    filterBtn.classList.toggle("search-active");
    document
      .getElementsByClassName("triangle2")[0]
      .classList.toggle("triangle2-active");
  });
}
showFilterList();

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const list = document.querySelector(".ProductsRol");

function animateSort() {
  const list2 = document
    .querySelector(".ProductsRol")
    .animate([{ transform: "scale(0)" }, { transform: "scale(1)" }], {
      duration: 500,
    });
}

let list_items = [
  {
    name: "Esprit Ruffle Shirt",
    img: "imgsModel/product-01.jpg",
    price: "16.64",
    categorie: "Women",
  },
  {
    name: "Herschel supply",
    img: "imgsModel/product-02.jpg",
    price: "35.31",
    categorie: "Women",
  },
  {
    name: "Only Check Trouser",
    img: "imgsModel/product-03.jpg",
    price: "25.50",
    categorie: "Men",
  },
  {
    name: "Classic Trench Coat",
    img: "imgsModel/product-04.jpg",
    price: "75.00",
    categorie: "Women",
  },
  {
    name: "Front Pocket Jumper",
    img: "imgsModel/product-05.jpg",
    price: "34.75",
    categorie: "Watch",
  },
  {
    name: "Vintage Inspired Classic",
    img: "imgsModel/product-06.jpg",
    price: "93.20",
    categorie: "Women",
  },
  {
    name: "Shirt in Streched Cotton",
    img: "imgsModel/product-07.jpg",
    price: "52.66",
    categorie: "Women",
  },
  {
    name: "Pieces Metallic Printed",
    img: "imgsModel/product-08.jpg",
    price: "18.96",
    categorie: "Women",
  },
  {
    name: "Converse All Star Hil Plimsolls",
    img: "imgsModel/product-09.jpg",
    price: "75.00",
    categorie: "Shoes",
  },
  {
    name: "Femme T-Shirt in Stripe",
    img: "imgsModel/product-10.jpg",
    price: "25.85",
    categorie: "Women",
  },
  {
    name: "Herschel supply",
    img: "imgsModel/product-11.jpg",
    price: "63.16",
    categorie: "Men",
  },
  {
    name: "Herschel supply",
    img: "imgsModel/product-12.jpg",
    price: "63.15",
    categorie: "Belt",
  },
  {
    name: "T-Shirt with Sleeve",
    img: "imgsModel/product-13.jpg",
    price: "18.49",
    categorie: "Women",
  },
  {
    name: "Pretty Little Thing",
    img: "imgsModel/product-14.jpg",
    price: "54.79",
    categorie: "Women",
  },
  {
    name: "Mini Silver Mesh Watch",
    img: "imgsModel/product-15.jpg",
    price: "86.85",
    categorie: "Watch",
  },
  {
    name: "Square Neck Back",
    img: "imgsModel/product-16.jpg",
    price: "29.64",
    categorie: "Women",
  },
];

let newArr = [];
function copyArr() {
  for (var i = 0; i < list_items.length; i++) {
    newArr.push(list_items[i]);
  }
}
copyArr();

function defaultSort() {
  animateSort();
  newArr = [];
  for (var j = 0; j < list_items.length; j++) {
    newArr.push(list_items[j]);
  }
}

function WomenSort() {
  animateSort();
  newArr = [];
  for (var j = 0; j < list_items.length; j++) {
    if (list_items[j].categorie === "Women") {
      newArr.push(list_items[j]);
    }
  }
}
function MenSort() {
  animateSort();
  newArr = [];
  for (var j = 0; j < list_items.length; j++) {
    if (
      list_items[j].categorie === "Men" ||
      list_items[j].categorie === "Belt"
    ) {
      newArr.push(list_items[j]);
    }
  }
}
function WatchSort() {
  animateSort();
  newArr = [];
  for (var j = 0; j < list_items.length; j++) {
    if (list_items[j].categorie === "Watch") {
      newArr.push(list_items[j]);
    }
  }
}
function ShoeSort() {
  animateSort();
  newArr = [];
  for (var j = 0; j < list_items.length; j++) {
    if (list_items[j].categorie === "Shoes") {
      newArr.push(list_items[j]);
    }
  }
}
function BagSort() {
  animateSort();
  newArr = [];
}

let sortBtns = document.querySelectorAll(".SortBtn");

function showSort() {
  sortBtns[0].classList.add("SortBtn-active");
  for (var i = 0; i < sortBtns.length; i++) {
    sortBtns[i].addEventListener("click", function (e) {
      var $button = $("#Btns button");
      $button.removeClass("SortBtn-active");
      $(this).addClass("SortBtn-active");

      if (e.target.innerHTML === "All Products") {
        defaultSort();
        displayItems(newArr);
        ImageHover();
      }
      if (e.target.innerHTML === "Women") {
        WomenSort();
        displayItems(newArr);
        ImageHover();
      }
      if (e.target.innerHTML === "Men") {
        MenSort();
        displayItems(newArr);
        ImageHover();
      }
      if (e.target.innerHTML === "Watches") {
        WatchSort();
        displayItems(newArr);
        ImageHover();
      }
      if (e.target.innerHTML === "Shoes") {
        ShoeSort();
        displayItems(newArr);
        ImageHover();
      }
      if (e.target.innerHTML === "Bag") {
        BagSort();
        displayItems(newArr);
      }
      viewProdct();
    });
  }
}
showSort();

function displayItems(arr = []) {
  const container = document.querySelector(".ProductsRol");

  const productHTML = arr
    .map((product) => {
      const { name, img, price } = product;
      return (
        `<div class="col-12 col-lg-3 Product">
         <div class="ProductTop">
           <img class="ProductImage" width="270" height="334" src="` +
        img +
        `">
           <a class="HoverImg" href="javascript:void(0);">Quick View</a>
         </div>
          <br>
          <div class="ProductDesc">
          <i class="far fa-heart"></i>
          <i class="fas fa-heart activeHeart"></i>
            <a class="ProName">` +
        name +
        `</a>
            <p>$` +
        price +
        `</p>
          </div>
        </div>`
      );
    })
    .join("");
  container.innerHTML = productHTML;
  return container;
}
displayItems(newArr);

function ImageHover() {
  let getItems = document.querySelectorAll(".Product");

  for (var i = 0; i < getItems.length; i++) {
    getItems[i].addEventListener("mouseenter", function (e) {
      var productBtn = e.target;
      const hoverImg = productBtn.getElementsByClassName("HoverImg")[0];
      const image = productBtn.getElementsByClassName("ProductImage")[0];

      hoverImg.classList.toggle("HoverImg-active");
      image.classList.toggle("ProductImage-active");
    });

    getItems[i].addEventListener("mouseleave", function (e) {
      var productBtn = e.target;
      const hoverImg = productBtn.getElementsByClassName("HoverImg")[0];
      const image = productBtn.getElementsByClassName("ProductImage")[0];
      hoverImg.classList.toggle("HoverImg-active");
      image.classList.toggle("ProductImage-active");
    });
  }
}
ImageHover();

function searchBar() {
  const searchInput = document.getElementById("SearchB");
  newArr = [];
  let filteredResult = [];
  searchInput.addEventListener("keyup", (e) => {
    let searchResult = e.target.value.toLowerCase();
    filteredResult = list_items.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchResult) ||
        product.categorie.toLowerCase().includes(searchResult)
      );
    });
    displayItems(filteredResult);
    ImageHover();
    viewProdct();
  });
}
searchBar();

function LowToHighP() {
  const button = document.getElementById("LtoH");
  var temp = 0;
  copyArr();
  button.addEventListener("click", () => {
    for (var i = 0; i < newArr.length; i++) {
      for (var j = i + 1; j < newArr.length; j++) {
        if (newArr[i].price > newArr[j].price) {
          temp = newArr[i];
          newArr[i] = newArr[j];
          newArr[j] = temp;
        }
      }
    }
    displayItems(newArr);
    ImageHover();
    viewProdct();
  });
}
LowToHighP();

function HighToLowP() {
  const button = document.getElementById("HtoL");
  var temp = 0;
  button.addEventListener("click", () => {
    for (var i = 0; i < newArr.length; i++) {
      for (var j = i + 1; j < newArr.length; j++) {
        if (newArr[i].price < newArr[j].price) {
          temp = newArr[i];
          newArr[i] = newArr[j];
          newArr[j] = temp;
        }
      }
    }
    displayItems(newArr);
    ImageHover();
    viewProdct();
  });
}
HighToLowP();

function viewProdct() {
  const products = document.getElementById("ViewProduct");
  let viewBtns = document.querySelectorAll(".HoverImg");
  const exitBtn = document.getElementById("Exit");

  viewBtns.forEach((product) => {
    product.addEventListener("click", () => {
      products.classList.toggle("ViewPro-active");
      document
        .getElementsByClassName("darkness")[0]
        .classList.toggle("darkness-active");
      document.body.classList.toggle("stopscrolling");
      $(document).ready(function () {
        new Glide(".slider", {
          type: "slider",
          startAt: 0,
          perView: 1,
          animationDuration: 1000,
          animationTimingFunc: "ease-in-out",
        }).mount();
      });
    });
  });
  exitBtn.addEventListener("click", () => {
    if (products.classList.contains("ViewPro-active")) {
      products.classList.toggle("ViewPro-active");
      document
        .getElementsByClassName("darkness")[0]
        .classList.toggle("darkness-active");
      document.body.classList.toggle("stopscrolling");
    }
  });
}
viewProdct();

function changeHeart() {
  let heartBtns = document.querySelectorAll(".ProductDesc");

  for (var i = 0; i < heartBtns.length; i++) {
    heartBtns[i].addEventListener("click", function (e) {
      let button = e.target.parentElement;

      button.getElementsByClassName("far fa-heart")[0].style.display = "none";
      button.getElementsByClassName("fas fa-heart")[0].style.opacity = "1";

      let getName = button.getElementsByClassName("ProName")[0].innerText;
      if (!e.target.classList.contains("added")) {
        Swal.fire(getName, "is added to wishlist!", "success");
      }
      e.target.classList.add("added");
    });
  }
}
changeHeart();

function dropdown() {
  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");

  const optionsList = document.querySelectorAll(".option");
  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
}
dropdown();

function dropdown2() {
  const selected2 = document.querySelector(".selected2");
  const optionsContainer2 = document.querySelector(".options-container2");

  const optionsList2 = document.querySelectorAll(".option2");
  selected2.addEventListener("click", () => {
    optionsContainer2.classList.toggle("active");
  });

  optionsList2.forEach((o) => {
    o.addEventListener("click", () => {
      selected2.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer2.classList.remove("active");
    });
  });
}
dropdown2();

function ProductQuantity() {
  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");

  decreaseBtn.addEventListener("click", () => {
    if (document.getElementById("Quantity").innerText > 1) {
      document.getElementById("Quantity").innerText--;
    }
  });

  increaseBtn.addEventListener("click", () => {
    document.getElementById("Quantity").innerText++;
  });
}
ProductQuantity();

function showCart() {
  const cartBtn = document.getElementById("cartBtn");
  const cart = document.getElementById("shopping");
  const exitBtn = document.getElementById("exitCart");

  cartBtn.addEventListener("click", () => {
    cart.classList.toggle("cart-active");
    document
      .getElementsByClassName("darkness")[0]
      .classList.toggle("darkness-active");
    document.body.classList.toggle("stopscrolling");
  });

  exitBtn.addEventListener("click", () => {
    cart.classList.toggle("cart-active");
    document
      .getElementsByClassName("darkness")[0]
      .classList.toggle("darkness-active");
    document.body.classList.toggle("stopscrolling");
  });
}
showCart();

function LocalStoragePush() {
  const addToCart = document.getElementsByClassName("addCart")[0];
  let products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

  addToCart.addEventListener("click", (e) => {
    const button = e.target.parentElement.parentElement;
    let productName = button.getElementsByClassName("ProductName")[0].innerText;
    let productPrice =
      button.getElementsByClassName("ProductPrice")[0].innerText;
    let productSize = button.getElementsByClassName("selected")[0].innerText;
    let productColor = button.getElementsByClassName("selected2")[0].innerText;
    let productQuantity =
      button.getElementsByClassName("ProQuantity")[0].innerText;
    productPrice = parseFloat(productPrice);
    productQuantity = parseInt(productQuantity);

    const newProduct = {
      name: productName,
      price: productPrice,
      size: productSize,
      color: productColor,
      inCart: productQuantity,
    };

    let GetIn = true;
    products.forEach((product) => {
      if (product.name === newProduct.name) {
        GetIn = false;
        product.inCart += productQuantity;
      } else {
        GetIn = true;
      }
    });
    if (GetIn) {
      products.push(newProduct);
    }
    localStorage.setItem("products", JSON.stringify(products));
    setInCart(productQuantity);
  });
}
LocalStoragePush();

function setInCart(add) {
  LoadCart();
  totalCash();
  deleteProduct();
  let CartQuantity = document.getElementsByClassName("InCart")[0].innerText;
  let getItems = localStorage.getItem("cartItems");
  getItems = parseInt(getItems);

  if (getItems) {
    localStorage.setItem("cartItems", getItems + add);
    document.querySelector(".cartQuantity").textContent = getItems + add;
  } else {
    localStorage.setItem("cartItems", add);
    document.querySelector(".cartQuantity").textContent = add;
  }
  CartQuantity = add;
}

function LoadCart() {
  let products = JSON.parse(localStorage.getItem("products"));
  const productsHTML = products.map((product) => {
    const { price, inCart, name, size, color } = product;
    return (
      `<div class="ProductCol">
         <div class="CartImage">
         <span><i class="fas fa-times DeleteProduct"></i>&ensp;</span>
             <img class="CartImg" src="subshirts/viewpro1.jpg">
             <div class="CartProduct">
                 <span">` +
      name +
      `</span>
                 <br>
                 <br>
                    <span class="InCart">` +
      inCart +
      `</span><span>&ensp;x</span><span>&ensp;$` +
      price +
      `</span>
                    <p><span>` +
      size +
      `</span><span>&ensp;` +
      color +
      `</span></p>
                 </div>
             </div>
         </div>`
    );
  });
  document.querySelector(".CartContainer").innerHTML = productsHTML;
}

function totalCash() {
  let products = JSON.parse(localStorage.getItem("products"));
  let productPrice = products.map((product) => {
    const { price, inCart } = product;
    return price * inCart;
  });
  productPrice = parseFloat(productPrice);
  document.querySelector(".SpanPrice").innerText =
    "$" + Math.round(productPrice * 100) / 100;
}
if (localStorage.getItem("products")) {
  LoadCart();
  let getinCart = JSON.parse(localStorage.getItem("cartItems"));
  getinCart = parseInt(getinCart);
  document.querySelector(".cartQuantity").textContent = getinCart;
  totalCash();
  deleteProduct();
}

function deleteProduct() {
  const deleteBtn = document.getElementsByClassName("DeleteProduct")[0];
  let products = JSON.parse(localStorage.getItem("products"));
  deleteBtn.addEventListener("click", () => {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("products");
    document.querySelector(".CartContainer").innerHTML = "";
    document.querySelector(".SpanPrice").innerText = "$" + 0;
    document.querySelector(".cartQuantity").textContent = 0;
    window.location.reload();
  });
}
