var products = new Array();
products[0] = "products/product1.html";
products[1] = "products/product2.html";
products[2] = "products/product3.html";
products[3] = "products/product4.html";
products[4] = "products/product5.html";
products[5] = "products/product6.html";
products[6] = "products/product7.html";
products[7] = "products/product8.html";

function randomProduct() {
  var i = Math.floor(Math.random() * products.length);
  parent.location = products[i];
  return false;
}

function validateForm() {
  var fields = [
    "name",
    "email",
    "address",
    "city",
    "state",
    "zip",
    "card number",
    "cvv",
  ];

  var x,
    l = fields.length;
  var fieldname;
  for (x = 0; x < l; x++) {
    fieldname = fields[x];
    if (document.forms["myForm"][fieldname].value === "") {
      alert(fieldname + " can not be empty");
      return false;
    }
  }
  return true;
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
