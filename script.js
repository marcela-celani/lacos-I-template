// PRÁTICA GUIADA - LAÇOS DE REPETIÇÃO

/* PRATICA I
Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.
Quando a pessoa digitar o número '0', devemos parar de solicitar novos inputs (entradas) e imprimir no console a soma de todos os números inseridos.
Exemplo: A pessoa usuária colocou os números:  10, 3, 50, 7, 0 
O resultado deve ser: 70
*/

function somaNumerosInseridos() {
    let numero = Number(prompt('Digite um numero: '))
    let soma = 0
    while(numero !== 0){
        soma = soma + numero 
        console.log(`Valor da soma até agora: ${soma}`)
        numero = Number(prompt('Digite outro numero: '))
    }
    console.log(`A soma dos numeros inseridos é: ${soma}`)
}

//somaNumerosInseridos()

/* PRATICA II
Vamos escrever um programa que recebe um número do usuário.
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.
*/

function imprimeNumerosAteNumeroEscolhido() {
    const numeroUsuario = Number(prompt('Digite um numero: '))

    for (i = 0; i <= numeroUsuario; i++) {
        console.log(i)
    }
}

// imprimeNumerosAteNumeroEscolhido()

/* PRATICA III
Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
“O elemento de índice ${indice} é ${numero[indice]}”
*/

const numeros = [1, 56, 3, 34, 12, 55, 21]

function percorrerArray(array) {
    
    for(let i = 0; i < array.length; i++) {
        console.log(`O elemento do indice ${i} é ${array[i]}`)
    }
}

// percorrerArray(numeros)

// EXERCICIOS DE FIXAÇÃO

// exercicio I
function permiteAdmin() {
    let tipoDeUsuario = prompt(`Digite o tipo de usuário, de acordo com a legenda abaixo:
    "A" para administrador
    "B" para usuário comum
    "C" para usuário assinante`).toUpperCase()
    
    while (tipoDeUsuario !== 'A') {
        console.log('Acesso Negado')
        
        tipoDeUsuario = prompt(`Digite o tipo de usuário, de acordo com a legenda abaixo:
        "A" para administrador
        "B" para usuário comum
        "C" para usuário assinante`).toUpperCase()
    }

    console.log('Boas vindas, Admin!')
}

//permiteAdmin()

// exercicio II

function tabuada(numero) { 
    for(let i = 1; i <= 10 ;i++) {
        let resultado = numero * i
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}
//tabuada(2)

// exercicio III

const arrayStrings = ['marcela', 'ama', 'alex']

function imprimeArrays(array) {
    for(let i = 0; i < array.length; i++) {
        const elementos = array[i].toUpperCase()
        console.log(i, elementos)
    }
}

imprimeArrays(arrayStrings)