// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let vetor = [];
let pares = [];
let impares = [];

//TODO: Implemente uma condição para o armazenamento dos números PARES e ÍMPARES:
for (let i = 0; i < 5; i++) {
  vetor[i] = gets();
  if (vetor[i] % 2 === 1) {
    impares.push(vetor[i]);
  } else {
    pares.push(vetor[i]);
  }
}

//TODO: Imprima os valores dos três vetores um em cada linha:
print("Vetor: ".concat(vetor));
print("Par(es): ".concat(pares));
print("Impar(es): ".concat(impares));
