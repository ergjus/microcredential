var addCounter = document.querySelectorAll(".buy-now");

if (addCounter.length !== 0) {
  for (var i = 0; i < addCounter.length; i++) {
    addCounter[i].addEventListener("click", (e) => {
      document.getElementById("shopping-number").innerHTML = count();
    });
  }
}

counter = 0;
var count = function () {
  return (counter += 1);
};

let topDiv = document.querySelector(".shopping");

window.addEventListener("scroll", function () {
  let pxWin = window.pageYOffset;
  if (pxWin > 350) {
    topDiv.style.display = "block";
  } else {
    topDiv.style.display = "none";
  }
});

function passvalue() {
  let item_name = document.getElementById("shoeName").innerText;
  let item_price = document.getElementById("shoePrice").innerText;
  localStorage.setItem("shoe", item_name);
  localStorage.setItem("price", item_price);
  return false;
}
function passvalue2() {
  let item_name2 = document.getElementById("shoeName2").innerText;
  let item_price2 = document.getElementById("shoePrice2").innerText;
  localStorage.setItem("shoe2", item_name2);
  localStorage.setItem("price2", item_price2);
  return false;
}
function passvalue3() {
  let item_name3 = document.getElementById("shoeName3").innerText;
  let item_price3 = document.getElementById("shoePrice3").innerText;
  localStorage.setItem("shoe3", item_name3);
  localStorage.setItem("price3", item_price3);
  return false;
}
function passvalue4() {
  let item_name4 = document.getElementById("shoeName4").innerText;
  let item_price4 = document.getElementById("shoePrice4").innerText;
  localStorage.setItem("shoe4", item_name4);
  localStorage.setItem("price4", item_price4);
  return false;
}
function passvalue5() {
  let item_name5 = document.getElementById("shoeName5").innerText;
  let item_price5 = document.getElementById("shoePrice5").innerText;
  localStorage.setItem("shoe5", item_name5);
  localStorage.setItem("price5", item_price5);
  return false;
}
function passvalue6() {
  let item_name6 = document.getElementById("shoeName6").innerText;
  let item_price6 = document.getElementById("shoePrice6").innerText;
  localStorage.setItem("shoe6", item_name6);
  localStorage.setItem("price6", item_price6);
  return false;
}
