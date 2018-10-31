var pontos = 0;
var autoclique = 0;
var upgrades = [false, false, false];

function inicioJogo(){
  setInterval(printaPontos, 100);
  document.getElementById('homer').src = "img/homer_001.jpg"
}

function printaPontos() {
  document.getElementById("pontos").innerHTML = "Seus Donuts: "+pontos;
  if (pontos >= 20 && upgrades[0] === false) {
      document.getElementById('upgrade1').src = "img/donuts_upgrade_001.jpg"
  }else{
    document.getElementById('upgrade1').src = "img/donuts_upgrade_000.jpg"}
  if(pontos >= 250 && upgrades[1] === false){
  document.getElementById('upgrade2').src = "img/donuts_upgrade_002.jpg"
}else {
  document.getElementById('upgrade2').src = "img/donuts_upgrade_000.jpg"
}
  if(pontos >= 500 && upgrades[2] === false){
  document.getElementById('upgrade3').src = "img/donuts_upgrade_003.jpg"
}else {
  document.getElementById('upgrade3').src = "img/donuts_upgrade_000.jpg"
}
}
function placarPontos(){
    document.getElementById("pontos").innerHTML = "Seus Donuts: "+pontos;
    pontos += 1;
    document.getElementById('homer').src = "img/homer_000.jpg"
}
function upgradeTempo(){
	pontos += autoclique;
  document.getElementById("pontos").innerHTML = "Seus Donuts: "+pontos;
}
  function upgradeum(){
    if (pontos >= 20 && upgrades[0] === false){
      upgrades[0] = true;
   		pontos -= 20;
   		autoclique += 1;
      setInterval (upgradeTempo, 20000);
      document.getElementById('upgrade1').src = "img/donuts_upgrade_000.jpg"
   	}
   }
function upgradedois(){
  if(pontos >= 250 && upgrades[1] === false){
    upgrades[1] = true;
    pontos -= 250;
    autoclique += 1;
    setInterval (upgradeTempo, 1000);
    document.getElementById('upgrade2').src = "img/donuts_upgrade_000.jpg"
  }
}
function upgradetres() {
  if (pontos >= 500 && upgrades[2] === false) {
    upgrades[2] = true;
    pontos -= 500;
    autoclique += 5;
    setInterval (upgradeTempo, 10000);
    document.getElementById('upgrade3').src = "img/donuts_upgrade_000.jpg"
  }
}
