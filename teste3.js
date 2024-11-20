const fs = require("fs")
const tcartela = fs.readFileSync("cartela.txt","utf-8")
const tResult = fs.readFileSync("resultado.txt","utf-8")

const rgxPalpite = /[(\d\-\d)\/]{10,50}/gm
const rgxhifen = /-/g
const rgxbarra = /\//g

const palpites = tcartela.match(rgxPalpite)
const resultados = tResult.match(rgxPalpite).toString()
//console.log(palpites);

//const sPalpites = palpites.toString()
//const sResultados = resultados.toString()
//console.log(sPalpites);
//console.log(sResultados);

const jog1 = palpites[0].toString()
const jog2 = palpites[1].toString()
const jog3 = palpites[2].toString()
const jog4 = palpites[3].toString()
const jog5 = palpites[4].toString()
const jog6 = palpites[5].toString()
const jog7 = palpites[6].toString()
const jog8 = palpites[7].toString()
const jog9 = palpites[8].toString()
const jog10 = palpites[9].toString()



const limpResult = resultados.replace(rgxhifen,'').replace(rgxbarra,',').split(',')
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



//console.log (limpTexto)
//console.log (limpTexto2) 

// const palpite = limpTexto.split(',')
// const resultado = limpTexto2.split(',')

//console.log (palpite[0])
//console.log (resultado) 

//Comparação 
const jogador1 = [limpResult[0] == limpjog1[0],limpResult[1] == limpjog1[1], limpResult[2] == limpjog1[2], limpResult[3] == limpjog1[3], limpResult[4] == limpjog1[4], limpResult[5] == limpjog1[5], limpResult[6] == limpjog1[6], limpResult[7] == limpjog1[7], limpResult[8] == limpjog1[8], limpResult[9] == limpjog1[9], limpResult[10] == limpjog1[10], limpResult[11] == limpjog1[11]]
const jogador2 = [limpResult[0] == limpjog2[0],limpResult[1] == limpjog2[1], limpResult[2] == limpjog2[2], limpResult[3] == limpjog2[3], limpResult[4] == limpjog2[4], limpResult[5] == limpjog2[5], limpResult[6] == limpjog2[6], limpResult[7] == limpjog2[7], limpResult[8] == limpjog2[8], limpResult[9] == limpjog2[9], limpResult[10] == limpjog2[10], limpResult[11] == limpjog2[11]] 
const jogador3 = [limpResult[0] == limpjog3[0],limpResult[1] == limpjog3[1], limpResult[2] == limpjog3[2], limpResult[3] == limpjog3[3], limpResult[4] == limpjog3[4], limpResult[5] == limpjog3[5], limpResult[6] == limpjog3[6], limpResult[7] == limpjog3[7], limpResult[8] == limpjog3[8], limpResult[9] == limpjog3[9], limpResult[10] == limpjog3[10], limpResult[11] == limpjog3[11]]
const jogador4 = [limpResult[0] == limpjog4[0],limpResult[1] == limpjog4[1], limpResult[2] == limpjog4[2], limpResult[3] == limpjog4[3], limpResult[4] == limpjog4[4], limpResult[5] == limpjog4[5], limpResult[6] == limpjog4[6], limpResult[7] == limpjog4[7], limpResult[8] == limpjog4[8], limpResult[9] == limpjog4[9], limpResult[10] == limpjog4[10], limpResult[11] == limpjog4[11]]
const jogador5 = [limpResult[0] == limpjog5[0],limpResult[1] == limpjog5[1], limpResult[2] == limpjog5[2], limpResult[3] == limpjog5[3], limpResult[4] == limpjog5[4], limpResult[5] == limpjog5[5], limpResult[6] == limpjog5[6], limpResult[7] == limpjog5[7], limpResult[8] == limpjog5[8], limpResult[9] == limpjog5[9], limpResult[10] == limpjog5[10], limpResult[11] == limpjog5[11]]
const jogador6 = [limpResult[0] == limpjog6[0],limpResult[1] == limpjog6[1], limpResult[2] == limpjog6[2], limpResult[3] == limpjog6[3], limpResult[4] == limpjog6[4], limpResult[5] == limpjog6[5], limpResult[6] == limpjog6[6], limpResult[7] == limpjog6[7], limpResult[8] == limpjog6[8], limpResult[9] == limpjog6[9], limpResult[10] == limpjog6[10], limpResult[11] == limpjog6[11]]
const jogador7 = [limpResult[0] == limpjog7[0],limpResult[1] == limpjog7[1], limpResult[2] == limpjog7[2], limpResult[3] == limpjog7[3], limpResult[4] == limpjog7[4], limpResult[5] == limpjog7[5], limpResult[6] == limpjog7[6], limpResult[7] == limpjog7[7], limpResult[8] == limpjog7[8], limpResult[9] == limpjog7[9], limpResult[10] == limpjog7[10], limpResult[11] == limpjog7[11]]
const jogador8 = [limpResult[0] == limpjog8[0],limpResult[1] == limpjog8[1], limpResult[2] == limpjog8[2], limpResult[3] == limpjog8[3], limpResult[4] == limpjog8[4], limpResult[5] == limpjog8[5], limpResult[6] == limpjog8[6], limpResult[7] == limpjog8[7], limpResult[8] == limpjog8[8], limpResult[9] == limpjog8[9], limpResult[10] == limpjog8[10], limpResult[11] == limpjog8[11]]
const jogador9 = [limpResult[0] == limpjog9[0],limpResult[1] == limpjog9[1], limpResult[2] == limpjog9[2], limpResult[3] == limpjog9[3], limpResult[4] == limpjog9[4], limpResult[5] == limpjog9[5], limpResult[6] == limpjog9[6], limpResult[7] == limpjog9[7], limpResult[8] == limpjog9[8], limpResult[9] == limpjog9[9], limpResult[10] == limpjog9[10], limpResult[11] == limpjog9[11]]
const jogador10 = [limpResult[0] == limpjog10[0], limpResult[1] == limpjog10[1], limpResult[2] == limpjog10[2], limpResult[3] == limpjog10[3], limpResult[4] == limpjog10[4], limpResult[5] == limpjog10[5], limpResult[6] ==  limpjog10[6], limpResult[7] == limpjog10[7], limpResult[8] == limpjog10[8], limpResult[9] == limpjog10[9], limpResult[10] == limpjog10[10], limpResult[11] == limpjog10[11]]
console.log(jogador1)
console.log(jogador2);
console.log(jogador3);
console.log(jogador4);
console.log(jogador5);
console.log(jogador6);
console.log(jogador7);
console.log(jogador8);
console.log(jogador9);
console.log(jogador10);
// console.log(jog9);
// console.log(jog10);

let soma = 0;
for (let i = 0; i < limpResult.length; i++) {
soma += jogador1[i] + jogador2[i] + jogador3[i] + jogador4[i] + jogador5[i] +jogador6[i] +jogador7[i] +jogador8[i] +jogador9[i] + jogador10[i];
}
console.log("A soma dos elementos é:", soma);