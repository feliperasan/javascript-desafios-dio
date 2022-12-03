// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que retorne a data da entrada com o mês por extenso;


let data = gets();
let dataSplit = data.split('/');
let dia = dataSplit[0];
let mes = dataSplit[1];
const ano = dataSplit[2];
const zeroPad = (str, quant) => String(str).padStart(quant, '0');

if(dia.length < 2) {
  dia = zeroPad(dia, 2);
}

if(mes.length < 2) {
  mes = zeroPad(mes, 2);
}

switch (mes) {
  case '01':
    mes = 'Janeiro';
    break;
  case '02':
    mes = 'Fevereiro';
    break;
  case '03':
    mes = 'Março';
    break;
  case '04':
    mes = 'Abril';
    break;
  case '05':
    mes = 'Maio';
    break;
  case '06':
    mes = 'Junho';
    break;
  case '07':
    mes = 'Julho';
    break;
  case '08':
    mes = 'Agosto';
    break;
  case '09':
    mes = 'Setembro';
    break;
  case '10':
    mes = 'Outubro';
    break;
  case '11':
    mes = 'Novembro';
    break;
  case '12':
    mes = 'Dezembro';
    break;
}

print(`${dia} de ${mes} de ${ano}`);
