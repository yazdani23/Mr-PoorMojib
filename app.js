let productBtns = document.querySelectorAll(".add");

let number = document.getElementById("num-product").innerText;

productBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.getElementById("num-product").innerText = ++number;
    let product=e.target.parentElement.parentElement
    const cartItem=getProduct(product)
    creatCartItem(cartItem)
  });
});

function getProduct(product) {
    const id=product.id
    const title=product.querySelector(".title").innerText
    const price=product.querySelector(".price").innerText
    return {
        id,
        title,
        price
    }
}

function creatCartItem(product) {
    const cartItem=`
    <li class="cart-item" id="${product.id}">
    <img src="images/watch.jpeg" alt="">
    <div>
      <div class="cart-section">
        <span class="t-cart-item">${product.title}</span>
        <i class="delete-item">x</i>
      </div>
      <div class="cart-section">
        <span class="p-cart-item">${product.price}</span>
        <span class="n-cart-item">1</span>
      </div>
    </div>
    </li>`
    document.getElementById("list-ul").innerHTML +=cartItem

}


{/* <li class="cart-item">
<img src="images/watch.jpeg" alt="">
<div>
  <div class="cart-section">
    <span class="t-cart-item">title</span>
    <i class="delete-item">x</i>
  </div>
  <div class="cart-section">
    <span class="p-cart-item">150$</span>
    <span class="n-cart-item">1</span>
  </div>
</div>
</li> */}
// let divTest= document.createElement("div")
// divTest.innerText="sdfsfsfsdfsdfs"
// divTest.id="test"
// divTest.className="test"
// document.getElementById("footer").appendChild(divTest)

// const section=`<div class="cart-section">
//                 <span class="p-cart-item">${150}</span>
//                 <span class="n-cart-item">${2}</span>
//                 </div> `;

// document.getElementById("footer").innerHTML=
