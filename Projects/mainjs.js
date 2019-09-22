
// GETTING DATA FROM API
var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "http://demo3927264.mockable.io/");
ourRequest.onload = function(ourData) {
  ourData = JSON.parse(ourRequest.responseText);
  createShoppingCart(ourData);
  renderHTML();
};
ourRequest.send();


// CREATE GLOBAL VARIABLES

var shoppingCart = {};

// PUSH DATA INTO SHOPPING CART

function createShoppingCart(data) {

  shoppingCart = {
    total: 0,
    totalquantity: 0,
    taxtotal: 0,
    totalaftertax: 0,
    items : []
  }

  for (i = 0; i < data.length; i++) {
    var element = {};
    element.id = i;
    element.name = data[i].name;
    element.type = data[i].type;
    element.price = data[i]["CP"].price;
    element.colours = data[i]["CP"].colours;
    element.quantity = 0;
    element.totalprice = 0;
    shoppingCart.items.push(element);
  }
  console.log(shoppingCart);
};

// SHOWING INITIAL DATA IN HTML WHEN PAGE LOADS
var beautyContainer = document.getElementById("bBox");

function renderHTML() {

  var htmlString = "";

  for (i = 0; i < shoppingCart.items.length; i++) {

    htmlString += "<p>" + shoppingCart.items[i].name + " is a " + shoppingCart.items[i].type + "." +"<br>"+"£" + shoppingCart.items[i].price +"<br>"+"<button class='addToCart' onclick='removeitem("+i+", 1)'>I do not want it</button>"+"<button class='addToCart' onclick='additem("+i+", 1)'>I want it</button>"+ "</p>";

  }

  beautyContainer.insertAdjacentHTML("beforeend", htmlString);

};

// CLICKING ADD ITEM BUTTON
function additem(item, quantity) {

    shoppingCart.total = shoppingCart.total + shoppingCart.items[item].price;
    shoppingCart.totalquantity = shoppingCart.totalquantity + 1;
    shoppingCart.items[item].totalprice = shoppingCart.items[item].totalprice + shoppingCart.items[item].price;
    shoppingCart.items[item].quantity = shoppingCart.items[item].quantity + 1;
    shoppingCart.taxtotal = shoppingCart.taxtotal + shoppingCart.items[item].price * 0.2;
    shoppingCart.totalaftertax = shoppingCart.total + shoppingCart.taxtotal;
    console.log(shoppingCart);

};

// CLICKING REMOVE ITEM BUTTON
function removeitem(item, quantity) {

  if (shoppingCart.items[item].quantity > 0) {

        shoppingCart.total = shoppingCart.total - shoppingCart.items[item].price;
        shoppingCart.totalquantity = shoppingCart.totalquantity - 1;
        shoppingCart.items[item].totalprice = shoppingCart.items[item].totalprice - shoppingCart.items[item].price;
        shoppingCart.items[item].quantity = shoppingCart.items[item].quantity - 1;
        shoppingCart.taxtotal = shoppingCart.taxtotal - shoppingCart.items[item].price * 0.2;
        shoppingCart.totalaftertax = shoppingCart.total + shoppingCart.taxtotal;


        console.log(shoppingCart);

  };




};
