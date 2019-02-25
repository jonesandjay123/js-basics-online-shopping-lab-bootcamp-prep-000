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
  var message = "";
  if(cart.length > 0){
    message = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
        var itemName = cart[i].itemName;
        var itemPrice = cart[i].itemPrice;
        message += itemName + " at $"+itemPrice;
        if(i == cart.length-1){
          message += ".";
        }
        else{
          message += ", and";
        }
    }
    
  }
  else{
    message = "Your shopping cart is empty.";
  }
  return message;
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
