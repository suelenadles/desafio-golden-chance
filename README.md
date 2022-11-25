# desafio-golden-chance
Abrir a IDE de sua preferencia
Prepare a IDE e o seu computador para o JavaScript (instalação e atualização de programas)
Instalação de framework para rodar o código
O código é sobre a resolução do problema: 
Você estava acampando com seus amigos nos EUA, mas quando chega a hora de voltar, você percebe que o combustível está acabando e a bomba mais próxima fica a 130 km de distância! Você sabe que, em média, seu carro roda cerca de 10 km por litro de gasolina quando está fazendo sol e apenas 7 km quando está chovendo. Restam 4 galões de gasolina.

Considerando esses fatores, escreva uma função que diga se é possível chegar à bomba ou não, considere apenas uma função para dizer se é possível em dias de sol ou em dias de chuva.

A função deve retornar verdadeiro se for possível e falso se não.

Para isso vamos:
1-	Digitar a função do código (function desafio (litros, galao, diaDeChuva, diaDeSol, distancia))
2-	Abra as chaves ({)
3-	Defina sua variável (var resultado = false)
4-	Defina suas condições (if (litros*galao*diaDeChuva >= distancia) {
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
    })
5-	Retorne o resultado (return resultado)
6-	Feche as chaves (})
7-	Defina os valores da sua função (desafio(3.7,4,7,10,130))
8-	Finalize o código e teste.

