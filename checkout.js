let prices = document.querySelectorAll("product-line-price");
const minusButtons = document.querySelectorAll(".fa-minus");
const plusButtons = document.querySelectorAll(".fa-plus");
let quantities = document.querySelectorAll(".product-quantity");
let removeButtons = document.querySelectorAll(".remove-product");
let subtotal = document.getElementById("cart-subtotal").children[1];
let tax = document.getElementById("cart-tax").children[1];
let shipping = document.getElementById("cart-shipping").children[1];
let total = document.getElementById("cart-total").children[1];

for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", (e) => {
    let allChilds = e.target.parentElement.parentElement.parentElement.children;
    console.log(allChilds);

    allChilds[2].children[1].innerText =
      +allChilds[2].children[1].innerText + 1;
    let price = +allChilds[1].firstElementChild.firstElementChild.innerText;
    subtotal.innerText = (+subtotal.innerText + price).toFixed(2);
    tax.innerText = (+subtotal.innerText * 0.18).toFixed(2);
    console.log(allChilds[2].children[1].innerText);
    total.innerText = (
      +tax.innerText +
      +subtotal.innerText +
      +shipping.innerText
    ).toFixed(2);
    if (+subtotal.innerText == 0) {
      shipping.innerText = "0";
    } else {
      shipping.innerText = "15.00";
    }
  });
}

for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", (e) => {
    let allChilds = e.target.parentElement.parentElement.parentElement.children;
    console.log(allChilds);
    if (+allChilds[2].children[1].innerText > 1) {
      allChilds[2].children[1].innerText =
        +allChilds[2].children[1].innerText - 1;
      let price = +allChilds[1].firstElementChild.firstElementChild.innerText;
      subtotal.innerText = (+subtotal.innerText - price).toFixed(2);
      tax.innerText = (+subtotal.innerText * 0.18).toFixed(2);
      console.log(allChilds[2].children[1].innerText);
      total.innerText = (
        +tax.innerText +
        +subtotal.innerText +
        +shipping.innerText
      ).toFixed(2);
    } else return;
    if (+subtotal.innerText == 0) {
      shipping.innerText = "0";
    } else {
      shipping.innerText = "15.00";
    }
  });
}

for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener("click", (e) => {
    productDiv = e.target.parentElement.parentElement.parentElement;
    remPrice = e.target.parentElement.parentElement.children[4].innerText;
    proQuantity = e.target.parentElement.parentElement.children[2].innerText;
    console.log(proQuantity);
    // console.log(productDiv.children[1].children[4].innerText);
    productDiv.parentElement.removeChild(productDiv);
    subtotal.innerText = (
      +subtotal.innerText -
      +remPrice * +proQuantity
    ).toFixed(2);
    tax.innerText = (+subtotal.innerText * 0.18).toFixed(2);
    total.innerText = (
      +tax.innerText +
      +subtotal.innerText +
      +shipping.innerText
    ).toFixed(2);
  });
}
