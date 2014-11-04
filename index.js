function calcular()
 { 
 var altura = document.calculoIMC.altura.value;
 var peso = Number(document.calculoIMC.peso.value);
 if (altura.indexOf(',') > -1)
 { 
 altura.replace(',', '.'); 
 
 }
 altura = Number(altura);
 var resultadoIMC = peso / Math.pow(altura,2); 
 var resultado = 'Seu IMC é ' + resultadoIMC;
 resultado += '<br />'; /*Calculo do IMC*/ if (resultadoIMC < 18.5)
 { 
 resultado += 'Você está abaixo do peso ideal'; 
 } 
 else if (resultadoIMC < 25)
 { 
 resultado += 'Você está em seu peso normal!'; 
 } 
 else if (resultadoIMC < 30) 
 {
 resultado += 'Você está acima de seu peso (sobrepeso)'; 
 } 
 else if (resultadoIMC < 35) 
 { 
 resultado += 'Você está com Obesidade grau I';
 } 
 else if (resultadoIMC < 40) 
 {
 resultado += 'Você está com Obesidade grau II';
 } 
 else
 { resultado += 'Você está com Obesidade grau III'; 
 } 
 document.getElementById('resultado').innerHTML = resultado; }

