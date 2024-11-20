// importa os numeros
const fs = require('fs');
const textoImport = fs.readFileSync('teste.txt', 'utf-8')

// limpar os numeros e tira os emojis
const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|[-]|⬜/g
const resLimpEmoji = textoImport.replace(regexEmoji, '')
//console.log(resLimpEmoji);

const regexPalavras = /jogadores|até 3/gmi
const limpPalavras = resLimpEmoji.replace(regexPalavras, '')

const espaco = /\s{1,56}/g
const limpFinal = resLimpEmoji.replaceAll(espaco,' ')
//console.log (limpFinal);


const regexClube = /clube.+/gmi
const resRegexClube = resLimpEmoji.match(regexClube)
const regexPresidente = /presidente:.+/gmi
const resRegexPresidente = resLimpEmoji.match(regexPresidente)

const regexNome = /([A-Za-zÀ-ÿ]+\s|[A-Za-zÀ-ÿ}]+\s[A-Za-zÀ-ÿ]+\s){1,5}\d+/gm 

const newrgxNome = /([A-Za-zÀ-ÿ].+\s\n\d+.\d+.\d+$)|([A-Za-zÀ-ÿ].+\s\n\d+.\d+.\d+.$)/gm
// nao funciona
const resRegexNome = limpFinal.match(newrgxNome)
console.log(resRegexNome)

const regexTelefone = /\d+\s\d{4,5}-\d+|\d+\s\d{8,9}/gm
const resRegexTelefone = limpFinal.match(regexTelefone)
// console.log(resRegexTelefone);
// console.log (resRegexPresidente);
// console.log (resRegexClube);


//tudo funcionando, unico erro pessoal penarol 

// console.log(`O ${resRegexClube[0]} é do ${resRegexPresidente[0]} e tem os jogadores ${resRegexNome} no seu elenco`);
