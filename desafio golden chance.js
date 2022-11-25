const express = require ('express');
function desafio (litros, galao, diaDeChuva, diaDeSol, distancia) {
    
    var resultado = false
  
    if (litros*galao*diaDeChuva >= distancia) {
       console.log ("Dia de chuva: verdadeiro")
       resultado = true
    } else {
       console.log ("Dia de chuva: falso")
    }
    if (litros*galao*diaDeSol >= distancia) {
       console.log ("Dia de sol: verdadeiro")
       resultado = true
    } else {
       console.log ("Dia de sol: falso")
    }
    return resultado
  }
  desafio(3.7,4,7,10,130)