<!--variables-->

var dogeCount = 0;
var autoClick = 0;
var shiny = 0;
var coin = 0;

<!--functions-->

function update() {
  document.getElementById('text').value = dogeCount;
  document.title = dogeCount + "Dogecoins";
  document.getElementById('ammountAutoClick').innerHTML = "You own " + autoClick
  "autoClickers";
  document.getElementById('costAutoClick').innerHTML = ((autoClick + 1) * 10)
  + " Dogecoins";

  document.getElementById('ammountShiny').innerHTML = "You own " + shiny + " Such Shiny Tools";
  document.getElementById('costShiny').innerHTML = ((shiny + 1) * 20) + " Dogecoins";

  document.getElementById('ammountCoin').innerHTML = "You own " + coin + " Many Coins Tool";
  document.getElementById('costCoin').innerHTML = ((coin + 1) * 50) + " Dogecoins";
}


function timer(){
  dogeCount = dogeCount + autoClick;
  dogeCount = dogeCount + shiny * 20;
  dogeCount = dogeCount + coin * 50;
  update();
}
setInterval(timer, 1000)


function add() {
  dogeCount = dogeCount + 1;
  update()
}

function buyAutoClick() {
  if (dogeCount >= ((autoClick + 1) * 10)) {
    dogeCount = dogeCount - ((autoClick + 1) * 10);
    autoClick = autoClick + 1;
    update()
  }
}

function buyShiny() {
  if (dogeCount >= ((shiny + 1) * 20)) {
    dogeCount = dogeCount - ((shiny + 1) * 20);
    shiny = shiny + 1;
    update()
  }
}
function manyCoin() {
  if (dogeCount >= ((coin + 1) * 50)) {
    dogeCount = dogeCount - ((coin + 1) * 50);
    shiny = coin + 1;
    update()
  }
}
