const fs = require("fs")
const tcartela = fs.readFileSync("cartela.txt","utf-8")

const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const resLimpEmoji = tcartela.replace(regexEmoji, '')

const espaco = /\s{1,56}/g
const limpFinal = resLimpEmoji.replaceAll(espaco,' ')

const rgxNomePalpite =/[A-Za-zÀ-ÿ]+\s(\d-\d\/)+(\d-\d)/g
const resRgxnomePalpite = limpFinal.match(rgxNomePalpite)
console.log(resRgxnomePalpite.toString())

const rgxPalpite = /\s(\d-\d\/)+(\d-\d)/g


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






console.log (nomeJogador1)
console.log (nomeJogador2)
console.log (nomeJogador3)
console.log (nomeJogador4)
console.log (nomeJogador5)
console.log (nomeJogador6)
console.log (nomeJogador7)
console.log (nomeJogador8)
console.log (nomeJogador9)
console.log (nomeJogador10);