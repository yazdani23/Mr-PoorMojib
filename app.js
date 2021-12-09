let productBtns = document.querySelectorAll(".add");

productBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    increasNumber(".num-product", 1);

    let product = e.target.parentElement.parentElement;
    const cartItem = getProduct(product);
    document.querySelector("#check-out-block").style.display = "block";

    creatCartItem(cartItem);
    addToLocalStorage(cartItem);
  });
});

function increasNumber(selector, number) {
  let num = Number(document.querySelector(selector).innerText);
  document.querySelector(selector).innerText = num + number;
}

function getProduct(product) {
  const id = product.id;
  const title = product.querySelector(".title").innerText;
  const price = product.querySelector(".price").innerText;
  const image = product.querySelector(".item img").src;
  return {
    id,
    title,
    price,
    image,
  };
}

function creatCartItem(product) {
  // const cartItem=`
  // <li class="cart-item" id="${product.id}">
  // <img src="images/watch.jpeg" alt="">
  // <div>
  //   <div class="cart-section">
  //     <span class="t-cart-item">${product.title}</span>
  //     <i class="delete-item">x</i>
  //   </div>
  //   <div class="cart-section">
  //     <span class="p-cart-item">${product.price}</span>
  //     <span class="n-cart-item">1</span>
  //   </div>
  // </div>
  // </li>`

  let itemId = product.id.replace("product", "itemC");
  if (!document.getElementById(itemId)) {
    let li = document.createElement("li");
    li.id = itemId;
    li.className = "cart-item";

    let img = document.createElement("img");
    img.src = product.image;

    let div1 = document.createElement("div");

    let div2 = document.createElement("div");
    div2.className = "cart-section";

    let titleSpan = document.createElement("span");
    titleSpan.className = "t-cart-item";
    titleSpan.innerText = product.title;

    let deleteSpan = document.createElement("span");
    deleteSpan.className = "delete-item";
    deleteSpan.innerText = "x";

    let div3 = document.createElement("div");
    div3.className = "cart-section";

    let priceSpan = document.createElement("span");
    priceSpan.className = "p-cart-item";
    priceSpan.innerText = product.price;

    let counterSpan = document.createElement("span");
    counterSpan.className = "n-cart-item";
    counterSpan.innerText = 1;

    div2.appendChild(titleSpan);
    div2.appendChild(deleteSpan);
    div3.appendChild(priceSpan);
    div3.appendChild(counterSpan);
    div1.appendChild(div2);
    div1.appendChild(div3);
    li.appendChild(img);
    li.appendChild(div1);

    document.getElementById("list-ul").appendChild(li);

    deleteSpan.addEventListener("click", () => {
      deleteItem(itemId);
    });
  } else {
    increasNumber(`#${itemId} .n-cart-item`, 1);
  }
}
function deleteItem(id) {
  console.log(document.getElementById(id));
}

function addToLocalStorage(item) {
  localStorage.setItem("numberCart", JSON.stringify(item));
}

function deleteFromLocalStorage(id) {}
