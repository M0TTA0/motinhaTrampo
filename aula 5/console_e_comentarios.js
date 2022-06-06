let valor1 = parseFloat(prompt("qual valor 1?"))
let valor2 = parseFloat(prompt("qual valor 2"))
let valor3 = parseFloat(prompt("qual o valor 3?"))
let valor4 = parseFloat(prompt("qual o valor 4?"))
let valor5 = parseFloat(prompt("qual o valor 5?"))

if (valor1 < valor2 && valor1 < valor4 && valor1 < valor3&& valor1 < valor5){
console.log("valor 1 é menor") 
} else if (valor2 < valor3 && valor2 < valor4 && valor2 < valor5){
console.log("valor 2 é menor")
} else if (valor3 < valor4 && valor3 < valor5){
  console.log("valor 3 é o menor")
} else if (valor4 < valor5){
  console.log("valor 4 é o menor")
} else {
  console.log("valor 5 é o menor")
}

// let nomeUsuario = prompt("Qual o seu nome?")

// while(nomeUsuario.length < 3){
//   console.log("Seu nome não é válido. Tente novamente!")
//   nomeUsuario = prompt("Qual o seu nome?")
// }

// let idade = prompt("Qual a sua idade?")

// while(idade > 150 || idade < 0){
//   console.log("Idade válida.")
//   idade = prompt("Qual a sua idade?")
// }

// let salário = prompt("Qual é o seu salário?")

// while(salário < 0){
//   console.log("Salário inválido.")
//   salário = prompt("Qual é o seu salário?")
// }

// let sexo = prompt("Qual o seu sexo?")

// while(
//   (sexo != "masculino" && sexo != "M" )
//   && (sexo != "feminino" && sexo != "F")
// ){
// console.log
//   sexo=prompt("Qual o seu sexo?")
// }

// let estadoCivil = prompt("qual seu estado civil?")
