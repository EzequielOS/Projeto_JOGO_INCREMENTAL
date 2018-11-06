var pontos = 0;
var autoclique = 1;
var autoclique3 = 0;
var upgrades = [false, false, false];
var segundos = 0;  var minutos = 0;

function inicioJogo(){
  setInterval(printaPontos, 100);
  setInterval(cronometro, 1000);
  setInterval(upgradeum, 100);
}

function printaPontos() {
    document.getElementById("pontos").innerHTML = "Seus Donuts: "+pontos;
    if (pontos >= 20 && upgrades[0] === false) {
    document.getElementById('upgrade1').src = "img/donuts_upgrade_001.jpg"
}
  if(pontos >= 50 && upgrades[1] === false){
  document.getElementById('upgrade2').src = "img/donuts_upgrade_002.jpg"
}
  if(pontos >= 70 && upgrades[2] === false){
  document.getElementById('upgrade3').src = "img/donuts_upgrade_003.jpg"
}
}
function placarPontos(){
    document.getElementById("pontos").innerHTML = "Seus Donuts: "+pontos;
    pontos += 1;
    document.getElementById('homer').src = "img/homer_000.jpg";
    setTimeout(function(){  document.getElementById('homer').src = "img/homer_001.jpg"; }, 100);
    var som = document.getElementById("somHomer");
    som.play();
}

function upgradeTempo3(){
  pontos += autoclique3;
}

function upgradeTempo(){
    pontos += autoclique;
}

function upgradeum(){
    if (pontos >= 20 && upgrades[0] === false){
      upgrades[0] = true;
      setInterval (upgradeTempo, 20000);
   	}else if(pontos >= 50 && upgrades[1] === false) {
      upgrades[1] = true;
      setInterval (upgradeTempo, 1000);
   }else if (pontos >= 70 && upgrades[2] === false) {
     upgrades[2] = true;
     autoclique3 += 5;
     setInterval (upgradeTempo3, 10000);
  }
}

function cronometro() {
    segundos += 1;
    if (segundos >= 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos >=60) {
      minutos = 0;
    }
    document.getElementById("tempo").innerHTML = (minutos<10?"0"+minutos:minutos)+":"+(segundos<10?"0"+segundos:segundos);
}
