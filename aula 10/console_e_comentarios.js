 COMANDOS 


[] = Array
.pop = colocar em ordem alfabética


/array*****************************************************************************

 let times = [];

 times.push("Corinthians");
 console.log(times);

 times[1] = "Palmeiras";
 console.log(times)
 console.log(times.length);

 times[2] = "Vasco";
 console.log(times)
 times[3] = times[1];
 times[1] = times[2];
 times[2] = times[3];
 times.pop();
 console.log(times);
************************************************************************************




/reverse*********************************************************************

console.log("bom dia!");

let numero = [];
numero[0] = parseInt(prompt("digite numero 1:"));
numero[1] = parseInt(prompt("digite numero 2:"));
numero[2] = parseInt(prompt("digite numero 3:"));
 

let numeroR = [numero[0], numero[1], numero[2]];
numeroR.reverse();
console.log(numeroR);
***********************************************************************