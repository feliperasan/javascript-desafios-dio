// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que contabilize quantos espaços em branco e quantas vogais existem
//na string de entrada;

let str = gets(); 
let strSplit = str.toLowerCase().split('');
let vogais = strSplit.filter(strVogais)
let brancos = strSplit.filter(strBranco)

function strVogais(str) {
  if(str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
    return true
  }
}

function strBranco(str) {
   if(str === " ") {
     return true
   }
}

print(`Espacos em branco: ${brancos.length} Vogais: ${vogais.length}`)
