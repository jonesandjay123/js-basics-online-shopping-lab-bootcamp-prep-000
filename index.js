var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName = item;
 var itemPrice = Math.floor(Math.random()*100);
 cart.push({itemName, itemPrice});
 return itemName + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  if(){
    
  }
  var message = "";
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
