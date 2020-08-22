document.getElementById('enviar').onclick = function(){
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  var imc = peso/(altura*altura);

if (imc < 18.5){
    document.getElementById('abaixoPeso').src ="img/abaixoPeso.png";
    document.getElementById('idealPeso').src ="";
    document.getElementById('sobrePeso').src ="";
    document.getElementById('grau1Peso').src ="";
    document.getElementById('grau2Peso').src ="";
    document.getElementById('grau3Peso').src ="";
    document.querySelector('.resposta').style.left = "23%";

  resposta = "Abaixo do Peso Ideal"
}
else if (imc >= 18.5 && imc <= 24.9){
  document.getElementById('abaixoPeso').src ="";
  document.getElementById('idealPeso').src ="img/idealPeso.png";
  document.getElementById('sobrePeso').src ="";
  document.getElementById('grau1Peso').src ="";
  document.getElementById('grau2Peso').src ="";
  document.getElementById('grau3Peso').src ="";
  document.querySelector('.resposta').style.left = "28%";
  resposta = "Peso Ideal"
}
else if (imc >= 25 && imc <=29.9){
  document.getElementById('abaixoPeso').src ="";
  document.getElementById('idealPeso').src ="";
  document.getElementById('sobrePeso').src ="img/sobrePeso.png";
  document.getElementById('grau1Peso').src ="";
  document.getElementById('grau2Peso').src ="";
  document.getElementById('grau3Peso').src ="";
  document.querySelector('.resposta').style.left = "36%";
  resposta = "Sobrepreso"
}
else if (imc >=30 && imc <= 34.9){
  document.getElementById('abaixoPeso').src ="";
  document.getElementById('idealPeso').src ="";
  document.getElementById('sobrePeso').src ="";
  document.getElementById('grau1Peso').src ="img/grau1Peso.png";
  document.getElementById('grau2Peso').src ="";
  document.getElementById('grau3Peso').src ="";
  document.querySelector('.resposta').style.left = "44%";
  resposta = "Obesidade grau I"
}
else if (imc >=30 && imc<= 39.9){
  document.getElementById('abaixoPeso').src ="";
  document.getElementById('idealPeso').src ="";
  document.getElementById('sobrePeso').src ="";
  document.getElementById('grau1Peso').src ="";
  document.getElementById('grau2Peso').src ="img/grau2Peso.png";
  document.getElementById('grau3Peso').src ="";
  document.querySelector('.resposta').style.left = "53%";
  resposta = "Obesidade grau II"

}
else if(imc>40){
  document.getElementById('abaixoPeso').src ="";
  document.getElementById('idealPeso').src ="";
  document.getElementById('sobrePeso').src ="";
  document.getElementById('grau1Peso').src ="";
  document.getElementById('grau2Peso').src ="";
  document.getElementById('grau3Peso').src ="img/grau3Peso.png";
  document.querySelector('.resposta').style.left = "63%";

  resposta = "Obesidade grau III (Obesidade mórbida)"
}

document.getElementById('textoResposta1').innerHTML = ("O valor do seu IMC é "+ imc.toFixed(2) + "kg/m²")
document.getElementById('textoResposta2').innerHTML = (resposta)
}


document.getElementById('apagar').onclick = function(){
  document.getElementById('textoResposta1').innerHTML = " "
  document.getElementById('textoResposta2').innerHTML = " "
  document.querySelector('.resposta').style.left = "23%";
  document.getElementById('abaixoPeso').src ="img/abaixoPeso.png";
  document.getElementById('idealPeso').src ="img/idealPeso.png";
  document.getElementById('sobrePeso').src ="img/sobrePeso.png";
  document.getElementById('grau1Peso').src ="img/grau1Peso.png";
  document.getElementById('grau2Peso').src ="img/grau2Peso.png";
  document.getElementById('grau3Peso').src ="img/grau3Peso.png";


}
