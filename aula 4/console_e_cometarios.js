// definição de varíaveis 
// const p1 = 3.1415;
// console.log(p1)

// {
  // var copo = "tequila";
  // console.log(copo);
// }
// {let copo2 = "gelo"; 
// console.log(copo2)
// }

// laços de pesquisas
// let idade = 15;
// console.log(idade);
// idade = idade + 1;
// console.log(idade)

// let passo;

// for (passo = 0; passo < 1000; passo++) {
  // console.log("opa bao");
// }
// let passo1;

// for (lepoLepo = 10; lepoLepo > 0; lepoLepo--){
//   console.log("lepo lepo pooo");
//   console.log("faltam " + lepoLepo + " lepo lepo para terminar a dança")
// }
// { 
//   prompt("bota a mão na cabeça que vai começar") 
//   console.log("o reboleixom xom xom o reboleixom")
// }

// for (let numero = 10000; numero > 0; numero--) {
//   var respostaUsuario = prompt("qual o dobro de " + numero + " ?")
// }

// let nota1 = parseInt(prompt("nota 1"));
//  let nota2 = parseInt(prompt("nota 2"));
//  let nota3 = parseInt(prompt("nota 3"));
//  let nota4 = parseInt(prompt("nota 4"));
// let media = (nota1 + nota2 + nota3 + nota4)/4
// console.log(media)
// if (media >= 60){
//   console.log("você atingiu a nota");
// } else {
// console.log("você não atingiu a nota");
// }

// let peso = parseInt(prompt("há quantos quilos de peixe"));
// if (peso > 50){
//   console.log(prompt("Há uma taxa de multa para você, aperte enter para ver a taxa"))
//   let pesoExcesso = peso - 50
//   console.log(" multa a pagar pelo peso excedente: " + pesoExcesso*4)
//   console.log("pague no boleto ou cartão em até 12x sem juros!")
//  prompt("forma de pagamento: ")
// console.log("seu pagamento foi recebido com sucesso")
// } else {
//   console.log("Não há multa para você, tenha um bom dia")



let nomeUsuario = prompt("bom dia, qual seu nome?")
let nota1 = parsefloat(prompt( nomeUsuario + " qual sua nota do primeiro trimestre?"));
let nota2 = parsefloat(prompt("qual sua nota do segundo trimestre?"));
let nota3 = parsefloat(prompt("qual sua nota do terceiro trimestre?"));

if ( nota1 > nota2){
 if (valor1 > valor3)
  console.log ("a nota do primeiro trimestre é sua maior nota!")
} else {
  console.log ("a nota do terceiro trimestre é  sua maior nota!")
} else if (valor2 > valor3) {
  console.log ("a nota do segundo triemstre é sua maior nota!")
} else {
  console.log ("a nota do terceiro trimestre é sua maior nota!")
}