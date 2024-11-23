// let titulo = document.querySelector('h1')
// titulo.innerHTML = ('Seu resultado aqui')
// let subTitulo = document.querySelector('p')
// subTitulo.innerHTML = ('Cole sua cartela aqui')

document.addEventListener('DOMContentLoaded', () => {
    let campoResultado = document.getElementById('resultados');
    let campoCartela = document.getElementById('sua-cartela');
    let botaoEnviar = document.getElementById('botao-calcular');

    // Função para preparar o resultado
    function preparaResultado(resultado) {
        const resultados = resultado.match(rgxPalpite).toString().replace(rgxhifen, '').replace(rgxbarra, ',').split(','); // Exemplo: separa por vírgulas
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
        while (resultados.lenght < 12) {
            resultados.push('198')
        }
        console.log("Resultados processados:", resultados);
        return resultados;
    }

    function preparaCartela(cartela) {
        const nomePalpite = cartela.replace(regexEmoji, '').replace(rgxNumDp, ' ').match(rgxNomeEPalpite).toString()
        const nomes = nomePalpite.match(rgxNome)
        const palpites = nomePalpite.match(rgxPalpite)
        const palpiteFake = ['199', '199', '199', '199', '199', '199', '199', '199', '199', '199', '199', '199']
        console.log(palpites)

        let jog1 = palpites[0].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        let jog2 = palpites[1].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        let jog3 = palpites[2].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        let jog4 = palpites[3].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        let jog5 = palpites[4].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        let jog6 = palpites[5].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        let jog7 = palpites[6].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        let jog8 = palpites[7]
        palpites[7] == undefined ? jog8 = palpiteFake : jog8 = palpites[7].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        let jog9 = palpites[8]
        palpites[8] == undefined ? jog9 = palpiteFake : jog9 = palpites[8].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')
        let jog10 = palpites[9]
        palpites[9] == undefined ? jog10 = palpiteFake : jog10 = palpites[9].replace(rgxhifen, '').replace(rgxbarra, ',').split(',')

        // if (palpites.length <= 7) {
        //     //alert('deu ruim, foi wo na fmw')
        //     console.log('deu ruim, foi WO na fmw')
        // }


        console.log(nomes[0], jog1);
        console.log(nomes[1], jog2)
        console.log(nomes[2], jog3)
        console.log(nomes[3], jog4)
        console.log(nomes[4], jog5)
        console.log(nomes[5], jog6)
        console.log(nomes[6], jog7)
        console.log(nomes[7], jog8)
        console.log(nomes[8], jog9)
        console.log(nomes[9], jog10)


        // console.log(nomePalpite)
        // console.log(nomes);
        // console.log(palpites);



        return cartela
    }

    function comparaçao() {
        preparaCartela()
        preparaResultado
        let jogador1 = [resultado[0] == jog1[0], resultado[1] == jog1[1], resultado[2] == jog1[2], resultado[3] == jog1[3], resultado[4] == jog1[4], resultado[5] == jog1[5], resultado[6] == jog1[6], resultado[7] == jog1[7], resultado[8] == jog1[8], resultado[9] == jog1[9], resultado[10] == jog1[10], resultado[11] == jog1[11]]
        let jogador2 = [resultado[0] == jog2[0], resultado[1] == jog2[1], resultado[2] == jog2[2], resultado[3] == jog2[3], resultado[4] == jog2[4], resultado[5] == jog2[5], resultado[6] == jog2[6], resultado[7] == jog2[7], resultado[8] == jog2[8], resultado[9] == jog2[9], resultado[10] == jog2[10], resultado[11] == jog2[11]]
        let jogador3 = [resultado[0] == jog3[0], resultado[1] == jog3[1], resultado[2] == jog3[2], resultado[3] == jog3[3], resultado[4] == jog3[4], resultado[5] == jog3[5], resultado[6] == jog3[6], resultado[7] == jog3[7], resultado[8] == jog3[8], resultado[9] == jog3[9], resultado[10] == jog3[10], resultado[11] == jog3[11]]
        let jogador4 = [resultado[0] == jog4[0], resultado[1] == jog4[1], resultado[2] == jog4[2], resultado[3] == jog4[3], resultado[4] == jog4[4], resultado[5] == jog4[5], resultado[6] == jog4[6], resultado[7] == jog4[7], resultado[8] == jog4[8], resultado[9] == jog4[9], resultado[10] == jog4[10], resultado[11] == jog4[11]]
        let jogador5 = [resultado[0] == jog5[0], resultado[1] == jog5[1], resultado[2] == jog5[2], resultado[3] == jog5[3], resultado[4] == jog5[4], resultado[5] == jog5[5], resultado[6] == jog5[6], resultado[7] == jog5[7], resultado[8] == jog5[8], resultado[9] == jog5[9], resultado[10] == jog5[10], resultado[11] == jog5[11]]
        let jogador6 = [resultado[0] == jog6[0], resultado[1] == jog6[1], resultado[2] == jog6[2], resultado[3] == jog6[3], resultado[4] == jog6[4], resultado[5] == jog6[5], resultado[6] == jog6[6], resultado[7] == jog6[7], resultado[8] == jog6[8], resultado[9] == jog6[9], resultado[10] == jog6[10], resultado[11] == jog6[11]]
        let jogador7 = [resultado[0] == jog7[0], resultado[1] == jog7[1], resultado[2] == jog7[2], resultado[3] == jog7[3], resultado[4] == jog7[4], resultado[5] == jog7[5], resultado[6] == jog7[6], resultado[7] == jog7[7], resultado[8] == jog7[8], resultado[9] == jog7[9], resultado[10] == jog7[10], resultado[11] == jog7[11]]
        let jogador8 = [resultado[0] == jog8[0], resultado[1] == jog8[1], resultado[2] == jog8[2], resultado[3] == jog8[3], resultado[4] == jog8[4], resultado[5] == jog8[5], resultado[6] == jog8[6], resultado[7] == jog8[7], resultado[8] == jog8[8], resultado[9] == jog8[9], resultado[10] == jog8[10], resultado[11] == jog8[11]]
        let jogador9 = [resultado[0] == jog9[0], resultado[1] == jog9[1], resultado[2] == jog9[2], resultado[3] == jog9[3], resultado[4] == jog9[4], resultado[5] == jog9[5], resultado[6] == jog9[6], resultado[7] == jog9[7], resultado[8] == jog9[8], resultado[9] == jog9[9], resultado[10] == jog9[10], resultado[11] == jog9[11]]
        let jogador10 = [resultado[0] == jog10[0], resultado[1] == jog10[1], resultado[2] == jog10[2], resultado[3] == jog10[3], resultado[4] == jog10[4], resultado[5] == jog10[5], resultado[6] == jog10[6], resultado[7] == jog10[7], resultado[8] == jog10[8], resultado[9] == jog10[9], resultado[10] == jog10[10], resultado[11] == jog10[11]]
        
        console.log(jogador1);
        console.log(jogador2)
        console.log(jogador3)
        console.log(jogador4)
        console.log(jogador5);
        console.log(jogador6)
        console.log(jogador7)
        console.log(jogador8)
        console.log(jogador9);
        console.log(jogador10)
        

    }
    comparaçao()
    
    // Evento de clique no botão
    botaoEnviar.addEventListener('click', () => {
        let resultado = campoResultado.value; // Captura o valor atual do campo
        let cartela = campoCartela.value;     // Captura o valor da cartela (se necessário)

        //console.log("Valor da cartela:", cartela); // Exibe no console para depuração
        //console.log(resultado)
        const resultadosProcessados = preparaResultado(resultado);
        const cartelaProcesada = preparaCartela(cartela)
        // Você pode fazer algo mais aqui, como comparar os resultados e a cartela
    });
});


/////////////////////////////

// let campoResultado = document.getElementById('resultados');
// let campoCartela = document.getElementById('sua-cartela');
// let botaoEnviar = document.getElementById('botao-calcular')

// function preparaResultado(resultado){
//     const resultados = resultado
//     console.log(resultados)
//     return
// }
// preparaResultado(resultado)










// let resultado = campoResultado.value 
// let cartela = campoCartela.value


const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const rgxNumDp = /\d{2,3}/g
const regexClube = /clube.+/gmi
const rgxNomeEPalpite = /[A-Za-zÀ-ÿ]+.+\s+(\d-\d\/)+(\d-\d)/g
const rgxNome = /([A-Za-zÀ-ÿ]+\s){1,5}[A-Za-zÀ-ÿ]+|[A-Za-zÀ-ÿ]+/gm
const rgxPalpite = /(\d-\d\/)+(\d-\d)/g
const rgxhifen = /-/g
const rgxbarra = /\//g
