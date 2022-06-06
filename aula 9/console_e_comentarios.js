// /exercicio


// em uma eleição para vereadores , existem quatro candidatos. os votos sao informados por meio de código. os codigos utilizados são:

// 1, 2,3,4 - votos para os respectivos candidatos
// voce deve montar a tabela ex: 1 - Jose/ 2 - joao/etc)
// 5 - voto nulo
// 6 - voto em branco

// faça um programa que calcule e mostre:
// 0 total de votos para casa candidato;
// 0 total de votos nulos;
// 0 total de votos em branco;
// a porcentagem de votos nulos sobre o total de votos;
// a porcentagem de votos em branco sobre o total de votos.
//   quem venceu a eleição

console.log("VOTAÇÃO INICIADA!!!!")

console.log("bom dia! qual é o seu candidato? vote neles na sequencia!")
console.log(" 1 - marin")
console.log(" 2 - jao")
console.log(" 3 - zé")
console.log(" 4 - tião")
console.log(" 5 - nulo")
console.log(" 6 - branco")
console.log(" 7 - encerrar")

for (let eleitores = 1; eleitores <= 5; eleitores++)
  

 let eleicao = true
while (eleicao) {
  let votoUsuario = prompt("qual seu voto?")
  let marin = 0
  let jao = 0
  let ze = 0
  let tiao = 0
  let nulo = 0
  let branco = 0
  let encerrar = 0
  if (votoUsuario == 1) {
    console.log("você votou em marin ")
    marin++
  } else if (votoUsuario == 2) {
    console.log("você votou em jao")
    jao++
  } else if (votoUsuario == 3) {
    console.log("você votou em zé")
    ze++
  } else if (votoUsuario == 4) {
    console.log("você votou em tião")
    tiao++
  } else if (votoUsuario == 5) {
    console.log("seu voto foi nulo")
    nulo++
  } else if (votoUsuario == 6) {
    console.log("você votou em branco")
    branco++
  } else {
    console.log("você encerrou o programa!")
    break
  }
}
console.log("resultados da votação!")
console.log("votos Marin " + marin)
console.log("votos Jao " + jao)
console.log("votos Ze " + ze)
console.log("votos Tiao " + tiao)
console.log("votos nulo " + nulo)
console.log("votos em branco " + branco)
