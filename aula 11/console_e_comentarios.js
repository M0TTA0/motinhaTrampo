// invertendo itens

function inverte(vetor) {
  let vetorInvertido = []
  for (let i = 1; i <= vetor.length; i++){
    vetorInvertido.push(vetor[vetor.length - i])
  }
  return vetorInvertido
}

let test = ["Maria", "Joana", "Lúcia"];
let a = inverte(test)

test = ["Maria", "Joana", "Lúcia", "Marcia"];
inverte(test)

test = ["Maria"]


// meu exercicio
function inverte(lista){
  let listaInvertida = []
  for (let i = 1; i <= lista.length; i++){
    listaInvertida.push(lista[lista.length - i])
  }
  return listaInvertida
}

let itens = []
itens[0] = [prompt("liste aqui seu primeiro iten")];
itens[1] = [prompt("liste aqui seu segundo iten;")];
itens[2] =[prompt("liste aqui seu terceiro iten")];
console.log(inverte(itens))


