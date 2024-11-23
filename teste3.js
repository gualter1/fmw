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

function preparaPalpites(){
    const limpaTexto = tcartela.replace(regexEmoji, '').replace(rgxNumDp, ' ').match(rgxNomeEPalpite).toString()
    const nomes = limpaTexto.match(rgxNome)
    const palpites = limpaTexto.match(rgxPalpite)
    const palpiteFake = ['199','199','199','199','199','199','199','199','199','199','199','199']
    palpites[0].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    palpites[1].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    palpites[2].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    palpites[3].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    palpites[4].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    palpites[5].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    palpites[6].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    palpites[7] == undefined? palpites[7] = palpiteFake : palpites[7].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    palpites[8] == undefined? palpites[8] = palpiteFake : palpites[8].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    palpites[9] == undefined? palpites[9] = palpiteFake : palpites[9].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    if (palpites.length <= 7) {
        //alert('deu ruim, foi wo na fmw')
        console.log('deu ruim, foi WO na fmw')
    }
//     return
 }
// preparaPalpites()

function preparaResultados(){
    const resultados = tResult.match(rgxPalpite).toString().replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        //procura jg anulado
        resultados[0] == 99 ? resultados[0] = '196' : resultados[0]
        resultados[1] == 99 ? resultados[1] = '196' : resultados[1]
        resultados[2] == 99 ? resultados[2] = '196' : resultados[2]
        resultados[3] == 99 ? resultados[3] = '196' : resultados[3]
        resultados[4] == 99 ? resultados[4] = '196' : resultados[4]
        resultados[5] == 99 ? resultados[5] = '196' : resultados[5]
        resultados[6] == 99 ? resultados[6] = '196' : resultados[6]
        resultados[7] == 99 ? resultados[7] = '196' : resultados[7]
        resultados[8] == 99 ? resultados[8] = '196' : resultados[8]
        resultados[9] == 99 ? resultados[9] = '196' : resultados[9]
        resultados.length == 5 ? resultados.push('198', '198', '198', '198', '198', '198', '198') : resultados
        resultados.length == 6 ? resultados.push('198', '198', '198', '198', '198', '198') : resultados
        resultados.length == 7 ? resultados.push('198', '198', '198', '198', '198') : resultados
        resultados.length == 8 ? resultados.push('198', '198', '198', '198') : resultados
        resultados.length == 9 ? resultados.push('198', '198', '198') : resultados
        resultados.length == 10 ? resultados.push('198', '198') : resultados
        resultados.length == 11 ? resultados.push('198') : resultados
        // console.log(palpiteFake)
    }
//preparaResultados()


// encontra - e / 
//verifica wo
// console.log(limpaTexto)
// console.log(nomes)
console.log(resultados)
// console.log(resultados)



let jog1 = palpites[0]
let jog2 = palpites[1]
let jog3 = palpites[2]
let jog4 = palpites[3]
let jog5 = palpites[4]
let jog6 = palpites[5]
let jog7 = palpites[6]
let jog8 = palpites[7]
let jog9 = palpites[8]
let jog10 = palpites[9]

  

  
  

  





  

  
  
  
  
  //prepara resultado para comparaçao
//   let limpResult = resultados.replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
// //limpa emoji
// const resLimpEmoji = tcartela.replace(regexEmoji, '')
// //acha numero duplo e tira
// const resRgxNumDp = resLimpEmoji.replace(rgxNumDp, ' ')
// //encontra so nome e palpite
// const resRgxNomeEPalpite = resRgxNumDp.match(rgxNomeEPalpite).toString()
// //encontra o nome 
// const nomes = resRgxNomeEPalpite.match(rgxNome)
// //encontra o palpite 
// const palpites = resRgxNomeEPalpite.match(rgxPalpite)
//acha o resultado
//const resultados = tResult.match(rgxPalpite).toString()