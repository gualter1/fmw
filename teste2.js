const fs = require("fs")
const tcartela = fs.readFileSync("cartela.txt", "utf-8")
const tResult = fs.readFileSync("resultado.txt", "utf-8")
//limpa emoji
const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const resLimpEmoji = tcartela.replace(regexEmoji, '')
//acha numero duplo e tira
const rgxNumDp = /\d{2,3}/g
const resRgxNumDp = resLimpEmoji.replace(rgxNumDp, ' ')
//encontra clube
const regexClube = /clube.+/gmi
const resRegexClube = resLimpEmoji.match(regexClube)
//encontra so nome e palpite
const rgxNomeEPalpite = /[A-Za-zÀ-ÿ]+.+\s+(\d-\d\/)+(\d-\d)/g
const resRgxNomeEPalpite = resRgxNumDp.match(rgxNomeEPalpite).toString()
//encontra o nome 
const rgxNome = /([A-Za-zÀ-ÿ]+\s){1,5}[A-Za-zÀ-ÿ]+|[A-Za-zÀ-ÿ]+/gm
const nomes = resRgxNomeEPalpite.match(rgxNome)
//encontra o palpite 
const rgxPalpite = /(\d-\d\/)+(\d-\d)/g
const palpites = resRgxNomeEPalpite.match(rgxPalpite)
//acha o resultado
const resultados = tResult.match(rgxPalpite).toString()
//verifica wo
if (palpites.length <= 7) {
  //alert('deu ruim, foi wo na fmw')
  console.log('deu ruim, foi WO na fmw')
}
//encontra - e / 
const rgxhifen = /-/g
const rgxbarra = /\//g
//prepara resultado para comparaçao
let limpResult = resultados.replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
//const palpiteFake = '9-8/9-8/9-8/9-8/9-8/9-8/9-8/9-8/9-8/9-8'
const palpiteFake = ['98','98','98','98','98','98','98','98','98','98']

console.log(palpiteFake)

//procura jg anulado
limpResult[0] == 99 ? limpResult[0] = '97' : limpResult[0]
limpResult[1] == 99 ? limpResult[1] = '97' : limpResult[1]
limpResult[2] == 99 ? limpResult[2] = '97' : limpResult[2]
limpResult[3] == 99 ? limpResult[3] = '97' : limpResult[3]
limpResult[4] == 99 ? limpResult[4] = '97' : limpResult[4]
limpResult[5] == 99 ? limpResult[5] = '97' : limpResult[5]
limpResult[6] == 99 ? limpResult[6] = '97' : limpResult[6]
limpResult[7] == 99 ? limpResult[7] = '97' : limpResult[7]
limpResult[8] == 99 ? limpResult[8] = '97' : limpResult[8]
limpResult[9] == 99 ? limpResult[9] = '97' : limpResult[9]

//resultado parcial
limpResult.length == 5 ? limpResult.push('98', '98', '98', '98', '98', '98', '98') : limpResult
limpResult.length == 6 ? limpResult.push('98', '98', '98', '98', '98', '98') : limpResult
limpResult.length == 7 ? limpResult.push('98', '98', '98', '98', '98') : limpResult
limpResult.length == 8 ? limpResult.push('98', '98', '98', '98') : limpResult
limpResult.length == 9 ? limpResult.push('98', '98', '98') : limpResult
limpResult.length == 10 ? limpResult.push('98', '98') : limpResult
limpResult.length == 11 ? limpResult.push('98') : limpResult
//prepara o palpite 
let jog1 = palpites[0].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
let jog2 = palpites[1].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
let jog3 = palpites[2].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
let jog4 = palpites[3].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
let jog5 = palpites[4].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
let jog6 = palpites[5].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
let jog7 = palpites[6].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
let jog8 = palpites[7]
palpites[7] == undefined? jog8 = palpiteFake : jog8 = palpites[7].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
let jog9 = palpites[8]
  palpites[8] == undefined? jog9 = palpiteFake : jog9 = palpites[8].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
let jog10 = palpites[9]
  palpites[9] == undefined? jog10 = palpiteFake : jog10 = palpites[9].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
  
console.log(jog8)
console.log(jog9)
console.log(jog10)


//Comparação
let jogador1 = [limpResult[0] == jog1[0], limpResult[1] == jog1[1], limpResult[2] == jog1[2], limpResult[3] == jog1[3], limpResult[4] == jog1[4], limpResult[5] == jog1[5], limpResult[6] == jog1[6], limpResult[7] == jog1[7], limpResult[8] == jog1[8], limpResult[9] == jog1[9], limpResult[10] == jog1[10], limpResult[11] == jog1[11]]
let jogador2 = [limpResult[0] == jog2[0], limpResult[1] == jog2[1], limpResult[2] == jog2[2], limpResult[3] == jog2[3], limpResult[4] == jog2[4], limpResult[5] == jog2[5], limpResult[6] == jog2[6], limpResult[7] == jog2[7], limpResult[8] == jog2[8], limpResult[9] == jog2[9], limpResult[10] == jog2[10], limpResult[11] == jog2[11]]
let jogador3 = [limpResult[0] == jog3[0], limpResult[1] == jog3[1], limpResult[2] == jog3[2], limpResult[3] == jog3[3], limpResult[4] == jog3[4], limpResult[5] == jog3[5], limpResult[6] == jog3[6], limpResult[7] == jog3[7], limpResult[8] == jog3[8], limpResult[9] == jog3[9], limpResult[10] == jog3[10], limpResult[11] == jog3[11]]
let jogador4 = [limpResult[0] == jog4[0], limpResult[1] == jog4[1], limpResult[2] == jog4[2], limpResult[3] == jog4[3], limpResult[4] == jog4[4], limpResult[5] == jog4[5], limpResult[6] == jog4[6], limpResult[7] == jog4[7], limpResult[8] == jog4[8], limpResult[9] == jog4[9], limpResult[10] == jog4[10], limpResult[11] == jog4[11]]
let jogador5 = [limpResult[0] == jog5[0], limpResult[1] == jog5[1], limpResult[2] == jog5[2], limpResult[3] == jog5[3], limpResult[4] == jog5[4], limpResult[5] == jog5[5], limpResult[6] == jog5[6], limpResult[7] == jog5[7], limpResult[8] == jog5[8], limpResult[9] == jog5[9], limpResult[10] == jog5[10], limpResult[11] == jog5[11]]
let jogador6 = [limpResult[0] == jog6[0], limpResult[1] == jog6[1], limpResult[2] == jog6[2], limpResult[3] == jog6[3], limpResult[4] == jog6[4], limpResult[5] == jog6[5], limpResult[6] == jog6[6], limpResult[7] == jog6[7], limpResult[8] == jog6[8], limpResult[9] == jog6[9], limpResult[10] == jog6[10], limpResult[11] == jog6[11]]
let jogador7 = [limpResult[0] == jog7[0], limpResult[1] == jog7[1], limpResult[2] == jog7[2], limpResult[3] == jog7[3], limpResult[4] == jog7[4], limpResult[5] == jog7[5], limpResult[6] == jog7[6], limpResult[7] == jog7[7], limpResult[8] == jog7[8], limpResult[9] == jog7[9], limpResult[10] == jog7[10], limpResult[11] == jog7[11]]
let jogador8 = [limpResult[0] == jog8[0], limpResult[1] == jog8[1], limpResult[2] == jog8[2], limpResult[3] == jog8[3], limpResult[4] == jog8[4], limpResult[5] == jog8[5], limpResult[6] == jog8[6], limpResult[7] == jog8[7], limpResult[8] == jog8[8], limpResult[9] == jog8[9], limpResult[10] == jog8[10], limpResult[11] == jog8[11]]
let jogador9 = [limpResult[0] == jog9[0], limpResult[1] == jog9[1], limpResult[2] == jog9[2], limpResult[3] == jog9[3], limpResult[4] == jog9[4], limpResult[5] == jog9[5], limpResult[6] == jog9[6], limpResult[7] == jog9[7], limpResult[8] == jog9[8], limpResult[9] == jog9[9], limpResult[10] == jog9[10], limpResult[11] == jog9[11]]
let jogador10 = [limpResult[0] == jog10[0], limpResult[1] == jog10[1], limpResult[2] == jog10[2], limpResult[3] == jog10[3], limpResult[4] == jog10[4], limpResult[5] == jog10[5], limpResult[6] ==  jog10[6], limpResult[7] == jog10[7], limpResult[8] == jog10[8], limpResult[9] == jog10[9], limpResult[10] == jog10[10], limpResult[11] == jog10[11]]


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

for (let i = 0; i < limpResult.length; i++) {
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
// console.log(soma1)
// console.log(soma2)
// console.log(soma3)
// console.log(soma4)
// console.log(soma5)
// console.log(soma6)
// console.log(soma7)
// console.log(soma8)
// console.log(soma9)
// console.log(soma10)

console.log(resultados)
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

  


  






//////////////////////////////cogigo para aqui////////////////////////////////

// console.log ('1',nomes[0],'=', palpites[0])
// console.log ('2',nomes[1],'=', palpites[1])
// console.log ('3',nomes[2],'=', palpites[2])
// console.log ('4',nomes[3],'=', palpites[3])
// console.log ('5',nomes[4],'=', palpites[4])
// console.log ('6',nomes[5],'=', palpites[5])
// console.log ('7',nomes[6],'=', palpites[6])
// console.log ('8',nomes[7],'=', palpites[7])
// console.log ('9',nomes[8],'=', palpites[8])
// console.log ('10', nomes[9],'=', palpites[9]);

//console.log('=', soma1+ soma2+ soma3+soma4+ soma5+ soma6+soma7+ soma8+ soma9+soma10)
// console.log(resultados, 'resultadas')


// console.log('O resultado encontrados foi \n', resultados)
//console.log('Os palpites encontrados foram', resRgxnomePalpite.toString(','))


// console.log(limpResult, 'teste 8')
// console.log(limpResult, 'teste 9')
// console.log(limpResult, 'teste 10')
// console.log(limpResult, 'teste 11')

// if(limpResult.length == 8 ) {
  //     limpResult.push('98', '98', '98', '98')
//   } if (limpResult.length == 9 ) {
  //       limpResult.push('98', '98', '98')
  //       if(limpResult.length == 10 ) {
    //         limpResult.push('98', '98')
//       } if (limpResult.length == 11 ) {
  //           limpResult.push('98')

  //let jog8 = palpites[7].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    //palpites[7] == undefined? jog8 = palpiteFake : palpites[7].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
  //let jog9 = palpites[8].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    //palpites[8] == undefined? jog9 = palpiteFake : palpites[8].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
  //let jog10 = palpites[9].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    //palpites[9] == undefined? jog10 = palpiteFake : palpites[9].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
  
  

  // console.log(regexClube)
  // console.log(resRgxNomeEPalpite)
  // console.log(nomes)
  // console.log(palpites)
// console.log(limpResult)

// console.log(limpResult)


// console.log (nomes[0], jog1);
// console.log (nomes[1], jog1)
// console.log (nomes[2], jog2)
// console.log (nomes[3], jog3)
// console.log (nomes[4], jog4)
// console.log (nomes[5], jog5)
// console.log (nomes[6], jog6)
// console.log (nomes[7], jog7)
// console.log (nomes[8], jog8)
// console.log (nomes[9], jog9)
// console.log (nomes[], jog10)

// console.log('nomes', nomes)
// console.log('palpites', palpites)
// console.log(nomes, palpites)
// console.log(resRgxNomeEPalpite)
















//const rgxNomePalpite = /[A-Za-zÀ-ÿ]+\s(\d-\d\/)+(\d-\d)/g
//const rgxNomePalpite = /[A-Za-zÀ-ÿ]+.\s(.+?)(\d-\d\/)+(\d-\d)/g
//const rgxNomePalpite = /[A-Za-zÀ-ÿ]+.(.+?)+\s+(\d-\d\/)+(\d-\d)/g
//limpa espaço duplo e transforma em linha
//const espaco = /\s{1,56}/g
//const espaco = /[\n]/gm
//const limpFinal = resRgxnomePalpite.replace(espaco, ' ')
//console.log(limpFinal)
// //encontra so palpite
// const rgxPalpite = /(\d-\d\/)+(\d-\d)/g
// const palpites = limpFinal.match(rgxPalpite)

//let teste = resRgxnomePalpite
//teste.split(',')
//console.log(resRgxnomePalpite)

//const espaco = /\s{1,56}/g
//const espaco = /[\s]/gm
//const limpFinal = teste.replace(espaco, ' ')
//console.log(teste.split(',')[1])

// let jog1 = resRgxnomePalpite.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
//console.log(resRgxnomePalpite)
