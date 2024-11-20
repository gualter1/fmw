const fs = require("fs")
const tcartela = fs.readFileSync("cartela.txt","utf-8")
const tResult = fs.readFileSync("resultado.txt","utf-8")
//limpa emoji
const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const resLimpEmoji = tcartela.replace(regexEmoji, '')
//limpa espaço duplo e transforma em linha
const espaco = /\s{1,56}/g
const limpFinal = resLimpEmoji.replaceAll(espaco,' ')
console.log(limpFinal)
//encontra o nome e palpite
const rgxNomePalpite =/[A-Za-zÀ-ÿ]+\s(\d-\d\/)+(\d-\d)/g
//const resRgxnomePalpite = limpFinal.match(rgxNomePalpite)
//encontra palpite 
const rgxPalpite = /(\d-\d\/)+(\d-\d)/g
const palpites = resRgxnomePalpite.match(rgxPalpite)
//const rgxPalpite = /[(\d\-\d)\/]{10,50}/gm
const rgxhifen = /-/g
const rgxbarra = /\//g
//console.log(palpites)
//console.log(resRgxnomePalpite.toString())

//nome e palpite = resRgxnomePalpite
//so palpite = 


//alert('Os palpites encontrados foram \n', palpites)
console.log ('Os palpites encontrados foram \n', palpites)
const resultados = tResult.match(rgxPalpite).toString()
console.log ('O resultado encontrados foi \n', resultados)

// console.log(palpites)
// console.log(resultados)

if (palpites.length <= 7) {
  //alert('deu ruim, foi wo na fmw')
  console.log ('deu ruim, foi wo na fmw')
}
const palpiteFake = '9-7/9-7/9-7/9-7/9-7/9-7/9-7/9-7/9-7/9-7/9-7/9-7'
//console.log (palpiteFake)

//numero de jogadores e possivel wo
let jog1 = palpites[0]
let jog2 = palpites[1]
let jog3 = palpites[2]
let jog4 = palpites[3]
let jog5 = palpites[4]
let jog6 = palpites[5]
let jog7 = palpites[6]
let jog8 = palpites[7]
if (palpites[7] == undefined) {
  jog8 = palpiteFake
} 
let jog9 = palpites[8]
if (palpites[8] == undefined) {
  jog9 = palpiteFake
} 
let jog10 = palpites[9]
if (palpites[9] == undefined) {
  jog10 = palpiteFake
} 

let limpResult = resultados.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
if(limpResult.length == 8 ) {
  limpResult.push('98', '98', '98', '98')
  //console.log(limpResult, 'teste 8')
} if (limpResult.length == 9 ) {
  limpResult.push('98', '98', '98')
} //console.log(limpResult, 'teste 9')
  if(limpResult.length == 10 ) {
  limpResult.push('98', '98')
  //console.log(limpResult, 'teste 10')
} if (limpResult.length == 11 ) {
  limpResult.push('98')
} //console.log(limpResult, 'teste 11')
// == 10 add 2 placares
// == 9 add 3 placares

const limpjog1 = jog1.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
const limpjog2 = jog2.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
const limpjog3 = jog3.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
const limpjog4 = jog4.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
const limpjog5 = jog5.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
const limpjog6 = jog6.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
const limpjog7 = jog7.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
const limpjog8 = jog8.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
const limpjog9 = jog9.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
const limpjog10 = jog10.replace(rgxhifen,'').replace(rgxbarra,',').split(',')

//Comparação 
let jogador1 = [limpResult[0] == limpjog1[0],limpResult[1] == limpjog1[1], limpResult[2] == limpjog1[2], limpResult[3] == limpjog1[3], limpResult[4] == limpjog1[4], limpResult[5] == limpjog1[5], limpResult[6] == limpjog1[6], limpResult[7] == limpjog1[7], limpResult[8] == limpjog1[8], limpResult[9] == limpjog1[9], limpResult[10] == limpjog1[10], limpResult[11] == limpjog1[11]]
let jogador2 = [limpResult[0] == limpjog2[0],limpResult[1] == limpjog2[1], limpResult[2] == limpjog2[2], limpResult[3] == limpjog2[3], limpResult[4] == limpjog2[4], limpResult[5] == limpjog2[5], limpResult[6] == limpjog2[6], limpResult[7] == limpjog2[7], limpResult[8] == limpjog2[8], limpResult[9] == limpjog2[9], limpResult[10] == limpjog2[10], limpResult[11] == limpjog2[11]] 
let jogador3 = [limpResult[0] == limpjog3[0],limpResult[1] == limpjog3[1], limpResult[2] == limpjog3[2], limpResult[3] == limpjog3[3], limpResult[4] == limpjog3[4], limpResult[5] == limpjog3[5], limpResult[6] == limpjog3[6], limpResult[7] == limpjog3[7], limpResult[8] == limpjog3[8], limpResult[9] == limpjog3[9], limpResult[10] == limpjog3[10], limpResult[11] == limpjog3[11]]
let jogador4 = [limpResult[0] == limpjog4[0],limpResult[1] == limpjog4[1], limpResult[2] == limpjog4[2], limpResult[3] == limpjog4[3], limpResult[4] == limpjog4[4], limpResult[5] == limpjog4[5], limpResult[6] == limpjog4[6], limpResult[7] == limpjog4[7], limpResult[8] == limpjog4[8], limpResult[9] == limpjog4[9], limpResult[10] == limpjog4[10], limpResult[11] == limpjog4[11]]
let jogador5 = [limpResult[0] == limpjog5[0],limpResult[1] == limpjog5[1], limpResult[2] == limpjog5[2], limpResult[3] == limpjog5[3], limpResult[4] == limpjog5[4], limpResult[5] == limpjog5[5], limpResult[6] == limpjog5[6], limpResult[7] == limpjog5[7], limpResult[8] == limpjog5[8], limpResult[9] == limpjog5[9], limpResult[10] == limpjog5[10], limpResult[11] == limpjog5[11]]
let jogador6 = [limpResult[0] == limpjog6[0],limpResult[1] == limpjog6[1], limpResult[2] == limpjog6[2], limpResult[3] == limpjog6[3], limpResult[4] == limpjog6[4], limpResult[5] == limpjog6[5], limpResult[6] == limpjog6[6], limpResult[7] == limpjog6[7], limpResult[8] == limpjog6[8], limpResult[9] == limpjog6[9], limpResult[10] == limpjog6[10], limpResult[11] == limpjog6[11]]
let jogador7 = [limpResult[0] == limpjog7[0],limpResult[1] == limpjog7[1], limpResult[2] == limpjog7[2], limpResult[3] == limpjog7[3], limpResult[4] == limpjog7[4], limpResult[5] == limpjog7[5], limpResult[6] == limpjog7[6], limpResult[7] == limpjog7[7], limpResult[8] == limpjog7[8], limpResult[9] == limpjog7[9], limpResult[10] == limpjog7[10], limpResult[11] == limpjog7[11]]
let jogador8 = [limpResult[0] == limpjog8[0],limpResult[1] == limpjog8[1], limpResult[2] == limpjog8[2], limpResult[3] == limpjog8[3], limpResult[4] == limpjog8[4], limpResult[5] == limpjog8[5], limpResult[6] == limpjog8[6], limpResult[7] == limpjog8[7], limpResult[8] == limpjog8[8], limpResult[9] == limpjog8[9], limpResult[10] == limpjog8[10], limpResult[11] == limpjog8[11]]
let jogador9 = [limpResult[0] == limpjog9[0],limpResult[1] == limpjog9[1], limpResult[2] == limpjog9[2], limpResult[3] == limpjog9[3], limpResult[4] == limpjog9[4], limpResult[5] == limpjog9[5], limpResult[6] == limpjog9[6], limpResult[7] == limpjog9[7], limpResult[8] == limpjog9[8], limpResult[9] == limpjog9[9], limpResult[10] == limpjog9[10], limpResult[11] == limpjog9[11]]
let jogador10 = [limpResult[0] == limpjog10[0], limpResult[1] == limpjog10[1], limpResult[2] == limpjog10[2], limpResult[3] == limpjog10[3], limpResult[4] == limpjog10[4], limpResult[5] == limpjog10[5], limpResult[6] ==  limpjog10[6], limpResult[7] == limpjog10[7], limpResult[8] == limpjog10[8], limpResult[9] == limpjog10[9], limpResult[10] == limpjog10[10], limpResult[11] == limpjog10[11]]

let jogadores = [jogador1, jogador2, jogador3, jogador4, jogador5, jogador6, jogador7, jogador8, jogador9, jogador10]
console.log(jogadores)





//const rgxPalpite = /\s(\d-\d\/)+(\d-\d)/g


let nJogador1 = resRgxnomePalpite[0]
let nJogador2 = resRgxnomePalpite[1]
let nJogador3 = resRgxnomePalpite[2]
let nJogador4 = resRgxnomePalpite[3]
let nJogador5 = resRgxnomePalpite[4]
let nJogador6 = resRgxnomePalpite[5]
let nJogador7 = resRgxnomePalpite[6]
let nJogador8 = resRgxnomePalpite[7]
let nJogador9 = resRgxnomePalpite[8]
let nJogador10 = resRgxnomePalpite[9]

let nomeJogador1 = nJogador1.replace(rgxPalpite,'')
let nomeJogador2 = nJogador2.replace(rgxPalpite,'')
let nomeJogador3 = nJogador3.replace(rgxPalpite,'')
let nomeJogador4 = nJogador4.replace(rgxPalpite,'')
let nomeJogador5 = nJogador5.replace(rgxPalpite,'')
let nomeJogador6 = nJogador6.replace(rgxPalpite,'')
let nomeJogador7 = nJogador7.replace(rgxPalpite,'')
let nomeJogador8 = nJogador8.replace(rgxPalpite,'')
let nomeJogador9 = nJogador9.replace(rgxPalpite,'')
let nomeJogador10 = nJogador10.replace(rgxPalpite,'')






// console.log (nomeJogador1)
// console.log (nomeJogador2)
// console.log (nomeJogador3)
// console.log (nomeJogador4)
// console.log (nomeJogador5)
// console.log (nomeJogador6)
// console.log (nomeJogador7)
// console.log (nomeJogador8)
// console.log (nomeJogador9)
// console.log (nomeJogador10);