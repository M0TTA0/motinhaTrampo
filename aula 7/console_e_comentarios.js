let usuario;
console.log(usuario, typeof(usuario));

usuario = "513516";
console.log(usuario, typeof(usuario));

usuario = parseFloat(usuario);
console.log(isNaN(usuario));
console.log(usuario, typeof(usuario));


let resposta = prompt("qual sua idade?")

if (resposta > 18){
  console.log("parabens, você ja pode ser preso")
} else if (resposta == 18) {
  console.log("quase que você é de menor em!")
} else {
  console.log("você é de menor, xixi nas calças!")
}




// exercicio 1 = receber 3 valores e validar
// ******************************************************
console.log("Apenas valores de 0 a 100 sao validos!")

let v1 = parseFloat(prompt("qual é o valor um?"));
let v2 = parseFloat(prompt("qual é o valor dois?"));
let v3 = parseFloat(prompt("qual é o valor tres?"));

if ((v1>0 && v2 >0 && v3>0) && (v1<100 && v2<100 && v3<100)){
  if (v1 > v2 && v1 > v3) {
  console.log("valor um é o maior!")
} else if (v2 > v3) {
  console.log("valor dois é o maior!")
} else {
  console.log("valor tres é o maior!")
}

if (v1 > v2 &&  v1 < v3 || v1 < v2 && v1 > v3) {
  console.log("valor um é o valor mediano!")
} else if (v2 > v1 && v2 < v3 || v2 < v1 && v2 > v3) {
  console.log("valor dois é o valor mediano!")
} else {
  console.log("valor tres é o valor mediano!")
}

if (v1 < v2 && v1 < v3) {
  console.log("valor um é o menor!")
} else if (v2 < v3) {
  console.log("valor dois é o menor!")
} else {
  console.log("valor tres é o menor!")
}
} else {
console.log("esse numero nao é valido")
}

// receber dois valores e falar que são iguais ou não
// *****************************************************
let v1 = parseFloat(prompt("qual é o valor 1?"));
let v2 = parseFloat(prompt("qual é o valor 2?"));

if (v1 == v2) {
console.log( "valores " + v1 , v2 + " os valores são iguais!")
} else {
  console.log("valores " + v1 , v2 + " não são iguais!")
}
