const arrayResultados = [21, 20, 21, 2, 12, 21, 20, 21, 2, 12, 0]
const arrayPalpite1 = [21, 30, 21, 11, 12, 20, 21, 21, 1,12, 1]
const arrayPalpite2 = [11, 20, 21, 21, 12, 21, 10,20,1,0]

//const total = arrayResultados [i] == arrayPalpite1 [i] 

const palpite1 = [arrayResultados [0] == arrayPalpite1 [0], arrayResultados [1] == arrayPalpite1 [1] , arrayResultados [2] == arrayPalpite1 [2], arrayResultados [3] == arrayPalpite1 [3], arrayResultados [4] == arrayPalpite1 [4], arrayResultados [5] == arrayPalpite1 [5], arrayResultados [6] == arrayPalpite1 [6],arrayResultados [7] == arrayPalpite1 [7],arrayResultados [8] == arrayPalpite1 [8],arrayResultados [9] == arrayPalpite1 [9],arrayResultados [10] == arrayPalpite1 [10],arrayResultados [11] == arrayPalpite1 [11],] 

const palpite2 = [arrayResultados [0] == arrayPalpite2 [0], arrayResultados [1] == arrayPalpite2 [1] , arrayResultados [2] == arrayPalpite2 [2], arrayResultados [3] == arrayPalpite2 [3], arrayResultados [4] == arrayPalpite2 [4]] 


console.log (palpite1)
console.log (palpite2)

let soma = 0;
for (let i = 0; i < arrayResultados.length; i++) {
  soma += palpite1[i];palpite2
}
console.log("A soma dos elementos é:", soma);