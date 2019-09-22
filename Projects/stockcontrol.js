
var tableStock = JSON.parse(window.localStorage.getItem('tableStock3'));

if (tableStock == null) {
  var tableStock = {};

  tableStock = {
        items : []

  }
};

var beautyContainer = document.getElementById("tableBody");

var htmlString = "";

for (i = 0; i < tableStock.items.length; i++) {

  htmlString += "<tr><td>" + tableStock.items[i].product_name + "</td><td>" + tableStock.items[i].sFu + "</td><td>" + tableStock.items[i].sRu +"</td><td>" + tableStock.items[i].totalStock +"</td><td><button class='addToCart' onclick='removeitem("+i+", 1)'>I do not want it</button>"+"<button class='addToCart' onclick='additem("+i+", 1)'>I want it</button></td></tr>";

}

beautyContainer.insertAdjacentHTML("beforeend", htmlString);


function getFormData(event) {
  event.preventDefault();
  var productName = document.getElementById('productName').value;
  var sFu = parseInt(document.getElementById('sFu').value);
  var sRu = parseInt(document.getElementById('sRu').value);
  var totalStock = sFu + sRu;

  var item = {
      product_name : productName,
      sFu : sFu,
      sRu : sRu,
      totalStock : totalStock
  };

  tableStock.items.push(item);
  console.log(tableStock);
  window.localStorage.setItem("tableStock3", JSON.stringify(tableStock));

  htmlString = "<tr><td>" + item.product_name + "</td><td>" + item.sFu + "</td><td>" + item.sRu +"</td><td>" + item.totalStock +"</td><td><button class='addToCart' onclick='removeitem("+i+", 1)'>I do not want it</button>"+"<button class='addToCart' onclick='additem("+i+", 1)'>I want it</button></td></tr>";

  beautyContainer.insertAdjacentHTML("beforeend", htmlString);

};


console.log(tableStock);

var sayPa = function() {
  console.log("Pa");

}
sayPa();
