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
        else if(i == cart.length-2){
          message += ", and ";
        }
        else{
          message += ", ";
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
  var price = 0;
  
  if(cart.length > 0){
    for (var i = 0; i < cart.length; i++) {
        price += cart[i].itemPrice;
    }
  }
  return price;
}

function removeFromCart(item) {
  // write your code here
  var indexOf = 0;
  var found = false;
  if(cart.length > 0){
    for (var i = 0; i < cart.length; i++) {
        if(cart[i].itemName == item)
        {
          indexOf = i;
          found = true;
        }
    }
    if(found){
      cart.sp
    }
    else{
      
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
