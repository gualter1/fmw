// importa os numeros
const fs = require('fs');
const textoImport = fs.readFileSync('telefones.teste.txt', 'utf-8')

// limpar os numeros e tira os emojis
const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|[-]|⬜/g
const resLimpEmoji = textoImport.replace(regexEmoji, '')
console.log(resLimpEmoji);

const regexCza = /çza|[()-]/gm
const limpCza = resLimpEmoji.replace(regexCza, '')

const regexPalavras = /jogadores|até 3/gmi
const limpPalavras = resLimpEmoji.replace(regexPalavras, '')

const espaco = /\s{1,56}/g
const limpFinal = limpPalavras.replaceAll(espaco,' ')
//console.log (limpFinal);

const regexNome = /([A-Za-zÀ-ÿ]+\s|[A-Za-zÀ-ÿ}]+\s[A-Za-zÀ-ÿ]+\s){1,5}\d+/gm 
const resRegexNome = limpFinal.match(regexNome)








//funcionando ate aqui

const regexClube = /clube.+/gmi
const resRegexClube = limpFinal.match(regexClube)
const regexPresidente = /presidente:.+/gmi
const resRegexPresidente = limpFinal.match(regexPresidente)
const regexTelefone = /\d+\s\d{4,5}-\d+|\d+\s\d{8,9}/gm
const resRegexTelefone = limpFinal.match(regexTelefone)
console.log(resRegexTelefone);


console.log (resRegexPresidente);


// criar um padrao nome e 99 999999999
const espaçoInicio = /çza\sçza\sçza|çza\sçza\s|^[çza]+|/gm
const regexHifen = /([)-]\s|[(])|-/gm
//const resLimpa = resLimpEmoji.replace(regexHifen, '')

// Regex
// const regexNome = /([A-Za-zÀÿú]+\s|[A-Za-zÀÿú]+\s[A-Za-zÀÿú]+\s){1,5}-\s\d+/gm
const regexTelefoneInt = /(\d+\s\d+\s\d+\s\d+)|\d{12}/gm
const regexBrasil55 = /\+55|55\s\d+\s\d{4,5}-\d+|\d+\s\d{8,9}/gm

// Resultados da Regex
const resRegexTelefoneInt = limpEspaçoInicio.match(regexTelefoneInt)

// if (resRegexNome != resRegexTelefone) { 
    //console.log(`Tem algum erro nos telefones dos jogadores do ${resRegexClube}`);
    

// console.log
// console.log(resRegexClube);
// console.log(resRegexPresidente);
// console.log(resRegexNome);

//console.log(`O jogador ${resRegexNome[0]} tem o numero de telefone ${resRegexTelefone[0]}`);
// console.log(`os nomes de jogadores são ${resRegexNome}`);



// const numero = limpEspaçoInicio.replace(regexBrasil55, resRegexNumero)

// const nomeNumero = nome + numero


// salva o resultado em algum lugar

// colocar nome ao lado do telefone

// classificar e procura iguais

// Importa o texto

// Tira os emoji

// Limpa o número
// 12 12345678

// Formata número 
// 12 12345-6789

// Pegar os nomes e junta com os número (provavelmente array)



