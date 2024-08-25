let tg = windows.Telegram.WebApp;

tg.expand()

tg.MainButton.textColot = "#FFFFFF";
tg.MainButton.colot = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1")
document.getElementById("btn2")
document.getElementById("btn3")
document.getElementById("btn4")
document.getElementById("btn5")
document.getElementById("btn6")

btn1.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  esle {
    tg.MainButton.setText("Вы выбрали товар 1!");
    item = "1";
    tg.MainButton.show();
  }
}):

btn2.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  esle {
    tg.MainButton.setText("Вы выбрали товар 1!");
    item = "1";
    tg.MainButton.show();
  }
}):

btn3.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  esle {
    tg.MainButton.setText("Вы выбрали товар 1!");
    item = "1";
    tg.MainButton.show();
  }
}):

btn4.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  esle {
    tg.MainButton.setText("Вы выбрали товар 1!");
    item = "1";
    tg.MainButton.show();
  }
}):

btn5.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  esle {
    tg.MainButton.setText("Вы выбрали товар 1!");
    item = "1";
    tg.MainButton.show();
  }
}):

btn6.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  esle {
    tg.MainButton.setText("Вы выбрали товар 1!");
    item = "1";
    tg.MainButton.show();
  }
}):


Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item)
});

let usercard = document.getElementById("usercard");

let p = document.creatElement("p");

p.innerText = '${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}';

usercard.appendChild(p);
