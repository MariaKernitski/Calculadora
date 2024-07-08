var prompt = require("prompt-sync")()

function sair(s) {
    s = prompt("Digite 's' para sair ou pressione 'enter' para executar outra operação: ")
              if (s.toLowerCase() == "s") {
                process.exit()
              }
              else {
                sinal = "";
              }
}

console.log("Bem vindo(a) à calculadora, escolha dentre as opções o operador desejado:")

console.log(`Digite '+' para soma;
Digite '-' para subtração;
Digite 'x' para multiplicação;
Digite '/' para divisão;
Digite '%' para porcentagem.
`)
console.log("OBS: Utilize 'ponto' em vez de 'vírgula' em números decimais. Ex: 2.5")

while (true) {

var a = parseFloat(prompt("Digite o primeiro número: "));
var b = parseFloat(prompt("Digite o segundo número: "));

if (isNaN(a) || isNaN(b)) {
  console.log("Valores inválidos, por favor digite números válidos.")
  continue;
  }

let sinal = prompt("Digite o operador:")

switch (sinal) {
    case "+": console.log(`O resultado da soma de ${a} + ${b} é: ` + (a+b));
              sair();
        break;
        
    case "-": console.log(`O resultado de ${a} - ${b} é: ` + (a-b));
              sair();
        break;

    case "x": console.log(`O resultado de ${a} x ${b} é: `+ (a*b));
              sair();
        break;

    case "/": if (b != 0) {
              console.log(`O resultado de ${a} / ${b} é: `+ (a/b).toFixed(2));
              sair();
            }
            else {
                console.log("O divisor(segundo número) deve ser diferente de 0.")
            }
        break;

    case "%": var a2 = a/100; 
              console.log(`O resultado de ${a} % de ${b} é: ` + (a2*b).toFixed(2));
              sair();
        break;

    default: console.log("Operador inválido, digite um operador válido![+ - x / %]");
    break;
}
};