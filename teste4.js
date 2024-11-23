// function textoSite(tag, texto) {
//     let campo = document.querySelector(tag)
//     campo.innerHTML = (texto)
// }

// textoSite('h1', 'Contador de sumulas')
// textoSite('p', 'eu o lindaum')

const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const rgxNumDp = /\d{2,3}/g
const regexClube = /clube.+/gmi
const rgxNomeEPalpite = /[A-Za-zÀ-ÿ]+.+\s+(\d-\d\/)+(\d-\d)/g
const rgxPalpite = /(\d-\d\/)+(\d-\d)/g
const rgxNome = /([A-Za-zÀ-ÿ]+\s){1,5}[A-Za-zÀ-ÿ]+|[A-Za-zÀ-ÿ]+/gm
const rgxhifen = /-/g
const rgxbarra = /\//g

function preparaResultado() {
    let campoResultado = document.getElementById('caixa1')
    let resultado = campoResultado.value
    
    console.log(resultado)
    //let resultados = campoResultado.value.match(rgxPalpite)
    // resultado[0] == 99 ? resultado[0] = '196' : resultado[0]
    // resultado[1] == 99 ? resultado[1] = '196' : resultado[1]
    // resultado[2] == 99 ? resultado[2] = '196' : resultado[2]
    // resultado[3] == 99 ? resultado[3] = '196' : resultado[3]
    // resultado[4] == 99 ? resultado[4] = '196' : resultado[4]
    // resultado[5] == 99 ? resultado[5] = '196' : resultado[5]
    // resultado[6] == 99 ? resultado[6] = '196' : resultado[6]
    // resultado[7] == 99 ? resultado[7] = '196' : resultado[7]
    // resultado[8] == 99 ? resultado[8] = '196' : resultado[8]
    // resultado[9] == 99 ? resultado[9] = '196' : resultado[9]
    // resultado.length == 5 ? resultado.push('198', '198', '198', '198', '198', '198', '198') : resultado
    // resultado.length == 6 ? resultado.push('198', '198', '198', '198', '198', '198') : resultado
    // resultado.length == 7 ? resultado.push('198', '198', '198', '198', '198') : resultado
    // resultado.length == 8 ? resultado.push('198', '198', '198', '198') : resultado
    // resultado.length == 9 ? resultado.push('198', '198', '198') : resultado
    // resultado.length == 10 ? resultado.push('198', '198') : resultado
    // resultado.length == 11 ? resultado.push('198') : resultado
    
    
    
    return    
}

preparaResultado()
let resultados = resultado.match(rgxPalpite)
console.log(resultados)

function preparaCartela(){
    let campoCartela = document.getElementById('caixa2')  
    let cartela = campoCartela.value
    //cartela = campoCartela.value.tcartela.replace(regexEmoji, '').replace(rgxNumDp, ' ').match(rgxNomeEPalpite).toString()
    // const nomes = cartela.match(rgxNome)
    // const palpites = cartela.match(rgxPalpite)
    // const palpiteFake = ['199','199','199','199','199','199','199','199','199','199','199','199']
    // palpites[0].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // palpites[1].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // palpites[2].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // palpites[3].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // palpites[4].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // palpites[5].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // palpites[6].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // palpites[7] == undefined? palpites[7] = palpiteFake : palpites[7].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // palpites[8] == undefined? palpites[8] = palpiteFake : palpites[8].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // palpites[9] == undefined? palpites[9] = palpiteFake : palpites[9].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
    // if (palpites.length <= 7) {
    //     //alert('deu ruim, foi wo na fmw')
    //     console.log('deu ruim, foi WO na fmw')
    // }
    // console.log(cartela)

console.log(cartela)
return
}

preparaCartela()

function fazerSumula(){
    if(preparaCartela() == preparaResultado()) {
        console.log('deu bom')
        } else {
            console.log('deu ruim')
        }
}
fazerSumula()

// console.log(campoCartela)
// console.log(campoResultado)

