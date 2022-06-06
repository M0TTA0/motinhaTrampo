function Soma(a, b){
  let soma = a + b;
  return soma
}

let resultado = Soma(5, 30)
console.log(resultado)


// criar função para checar se o usuario é maior de idade
// maior de idade: true
// menor de idade: false
function ChecaMaiorIdade(a){
  if (a>=18){
    return true
  } else {
    return false
  }
}



let idade =  prompt("idade")
idade = parseInt(idade);

console.log(ChecaMaiorIdade(idade))