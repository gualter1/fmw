const fs = require("fs")
const tcartela = fs.readFileSync("cartela.txt", "utf-8")
const tResult = fs.readFileSync("resultado.txt", "utf-8")

const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const rgxNumDp = /\d{2,3}/g
const regexClube = /clube.+/gmi
const rgxNomeEPalpite = /[A-Za-zÀ-ÿ]+.+\s+(\d-\d\/)+(\d-\d)/g
const rgxNome = /([A-Za-zÀ-ÿ]+\s){1,5}[A-Za-zÀ-ÿ]+|[A-Za-zÀ-ÿ]+/gm
const rgxPalpite = /(\d-\d\/)+(\d-\d)/g
const rgxhifen = /-/g
const rgxbarra = /\//g

//encontra clube
// const resRegexClube = resLimpEmoji.match(regexClube)

// const limpaTexto = tcartela.replace(regexEmoji, '').replace(rgxNumDp, ' ').match(rgxNomeEPalpite).toString()
// const nomes = limpaTexto.match(rgxNome)
// const palpites = limpaTexto.match(rgxPalpite)
// const palpiteFake = ['199', '199', '199', '199', '199', '199', '199', '199', '199', '199', '199', '199']
// let jog1 = palpites[0].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// let jog2 = palpites[1].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// let jog3 = palpites[2].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// let jog4 = palpites[3].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// let jog5 = palpites[4].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// let jog6 = palpites[5].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// let jog7 = palpites[6].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// let jog8 = palpites[7]
// palpites[7] == undefined? jog8 = palpiteFake : jog8 = palpites[7].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// let jog9 = palpites[8]
//   palpites[8] == undefined? jog9 = palpiteFake : jog9 = palpites[8].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// let jog10 = palpites[9]
//   palpites[9] == undefined? jog10 = palpiteFake : jog10 = palpites[9].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')

// if (palpites.length <= 7) {
//   //alert('deu ruim, foi wo na fmw')
//   console.log('deu ruim, foi WO na fmw')
// }
//const resultados = tResult.match(rgxPalpite).toString().replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
//procura jg anulado
// resultados[0] == 99 ? resultados[0] = '196' : resultados[0]
// resultados[1] == 99 ? resultados[1] = '196' : resultados[1]
// resultados[2] == 99 ? resultados[2] = '196' : resultados[2]
// resultados[3] == 99 ? resultados[3] = '196' : resultados[3]
// resultados[4] == 99 ? resultados[4] = '196' : resultados[4]
// resultados[5] == 99 ? resultados[5] = '196' : resultados[5]
// resultados[6] == 99 ? resultados[6] = '196' : resultados[6]
// resultados[7] == 99 ? resultados[7] = '196' : resultados[7]
// resultados[8] == 99 ? resultados[8] = '196' : resultados[8]
// resultados[9] == 99 ? resultados[9] = '196' : resultados[9]
resultados.length == 5 ? resultados.push('198', '198', '198', '198', '198', '198', '198') : resultados
resultados.length == 6 ? resultados.push('198', '198', '198', '198', '198', '198') : resultados
resultados.length == 7 ? resultados.push('198', '198', '198', '198', '198') : resultados
resultados.length == 8 ? resultados.push('198', '198', '198', '198') : resultados
resultados.length == 9 ? resultados.push('198', '198', '198') : resultados
resultados.length == 10 ? resultados.push('198', '198') : resultados
resultados.length == 11 ? resultados.push('198') : resultados

let jogador1 = [resultados[0] == jog1[0], resultados[1] == jog1[1], resultados[2] == jog1[2], resultados[3] == jog1[3], resultados[4] == jog1[4], resultados[5] == jog1[5], resultados[6] == jog1[6], resultados[7] == jog1[7], resultados[8] == jog1[8], resultados[9] == jog1[9], resultados[10] == jog1[10], resultados[11] == jog1[11]]
let jogador2 = [resultados[0] == jog2[0], resultados[1] == jog2[1], resultados[2] == jog2[2], resultados[3] == jog2[3], resultados[4] == jog2[4], resultados[5] == jog2[5], resultados[6] == jog2[6], resultados[7] == jog2[7], resultados[8] == jog2[8], resultados[9] == jog2[9], resultados[10] == jog2[10], resultados[11] == jog2[11]]
let jogador3 = [resultados[0] == jog3[0], resultados[1] == jog3[1], resultados[2] == jog3[2], resultados[3] == jog3[3], resultados[4] == jog3[4], resultados[5] == jog3[5], resultados[6] == jog3[6], resultados[7] == jog3[7], resultados[8] == jog3[8], resultados[9] == jog3[9], resultados[10] == jog3[10], resultados[11] == jog3[11]]
let jogador4 = [resultados[0] == jog4[0], resultados[1] == jog4[1], resultados[2] == jog4[2], resultados[3] == jog4[3], resultados[4] == jog4[4], resultados[5] == jog4[5], resultados[6] == jog4[6], resultados[7] == jog4[7], resultados[8] == jog4[8], resultados[9] == jog4[9], resultados[10] == jog4[10], resultados[11] == jog4[11]]
let jogador5 = [resultados[0] == jog5[0], resultados[1] == jog5[1], resultados[2] == jog5[2], resultados[3] == jog5[3], resultados[4] == jog5[4], resultados[5] == jog5[5], resultados[6] == jog5[6], resultados[7] == jog5[7], resultados[8] == jog5[8], resultados[9] == jog5[9], resultados[10] == jog5[10], resultados[11] == jog5[11]]
let jogador6 = [resultados[0] == jog6[0], resultados[1] == jog6[1], resultados[2] == jog6[2], resultados[3] == jog6[3], resultados[4] == jog6[4], resultados[5] == jog6[5], resultados[6] == jog6[6], resultados[7] == jog6[7], resultados[8] == jog6[8], resultados[9] == jog6[9], resultados[10] == jog6[10], resultados[11] == jog6[11]]
let jogador7 = [resultados[0] == jog7[0], resultados[1] == jog7[1], resultados[2] == jog7[2], resultados[3] == jog7[3], resultados[4] == jog7[4], resultados[5] == jog7[5], resultados[6] == jog7[6], resultados[7] == jog7[7], resultados[8] == jog7[8], resultados[9] == jog7[9], resultados[10] == jog7[10], resultados[11] == jog7[11]]
let jogador8 = [resultados[0] == jog8[0], resultados[1] == jog8[1], resultados[2] == jog8[2], resultados[3] == jog8[3], resultados[4] == jog8[4], resultados[5] == jog8[5], resultados[6] == jog8[6], resultados[7] == jog8[7], resultados[8] == jog8[8], resultados[9] == jog8[9], resultados[10] == jog8[10], resultados[11] == jog8[11]]
let jogador9 = [resultados[0] == jog9[0], resultados[1] == jog9[1], resultados[2] == jog9[2], resultados[3] == jog9[3], resultados[4] == jog9[4], resultados[5] == jog9[5], resultados[6] == jog9[6], resultados[7] == jog9[7], resultados[8] == jog9[8], resultados[9] == jog9[9], resultados[10] == jog9[10], resultados[11] == jog9[11]]
let jogador10 = [resultados[0] == jog10[0], resultados[1] == jog10[1], resultados[2] == jog10[2], resultados[3] == jog10[3], resultados[4] == jog10[4], resultados[5] == jog10[5], resultados[6] ==  jog10[6], resultados[7] == jog10[7], resultados[8] == jog10[8], resultados[9] == jog10[9], resultados[10] == jog10[10], resultados[11] == jog10[11]]

let soma1 = 0;
let soma2 = 0;
let soma3 = 0;
let soma4 = 0;
let soma5 = 0;
let soma6 = 0;
let soma7 = 0;
let soma8 = 0;
let soma9 = 0;
let soma10 = 0;
for (let i = 0; i < resultados.length; i++) {
    soma1 += jogador1[i];
    soma2 += jogador2[i];
    soma3 += jogador3[i];
    soma4 += jogador4[i];
    soma5 += jogador5[i];
    soma6 += jogador6[i];
    soma7 += jogador7[i];
    soma8 += jogador8[i];
    soma9 += jogador9[i];
    soma10 += jogador10[i];
}  
//console.log(resultados)
console.log('resRegexClube.toString()','=', soma1+ soma2+ soma3+soma4+ soma5+ soma6+soma7+ soma8+ soma9+soma10)
console.log ('1',nomes[0],'=',  soma1)
console.log ('2',nomes[1],'=',  soma2)
console.log ('3',nomes[2],'=',  soma3)
console.log ('4',nomes[3],'=',  soma4)
console.log ('5',nomes[4],'=',  soma5)
console.log ('6',nomes[5],'=',  soma6)
console.log ('7',nomes[6],'=',  soma7)
console.log ('8',nomes[7],'=',  soma8)
console.log ('9',nomes[8],'=',  soma9)
console.log ('10',nomes[9],'=', soma10)