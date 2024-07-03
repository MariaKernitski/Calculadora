var prompt = require("prompt-sync")()

function sair(s) {
    s = prompt("Digite 's' para sair e 'c' para executar outra operação: ")
              if (s == "c") {
                sinal = "";
              }
              else {
                process.exit()
              }
}

console.log(`Digite '+' para soma;
Digite '-' para subtração;
Digite 'x' para multiplicação;
Digite '/' para divisão;
Digite '%' para porcentagem.
`)

while (true) {

let sinal = prompt("Digite o sinal da operação:")

switch (sinal) {
    case "+": var a = parseFloat(prompt("Digite o primeiro número: "));
              var b = parseFloat(prompt("Digite o segundo número: "));

            if (isNaN(a) || isNaN(b)) {
                console.log("Valores inválidos.")
            }
            else {
              console.log(`O resultado da soma de ${a} + ${b} é: ` + (a+b));
              sair();
            }
        break;
    case "-": var a = parseFloat(prompt("Digite o primeiro número: "));
              var b = parseFloat(prompt("Digite o segundo número: "));

              if (isNaN(a) || isNaN(b)) {
                console.log("Valores inválidos.")
            }
            else if(b < 0) {
                console.log(`O resultado de ${a} ${b} é: ` + (a+b));
                sair();
            }
            else{
              console.log(`O resultado de ${a} - ${b} é: ` + (a-b));
              sair();
            }
        break;
    case "x": var a = parseFloat(prompt("Digite o primeiro número: "));
              var b = parseFloat(prompt("Digite o segundo número: "));
              if (isNaN(a) || isNaN(b)) {
                console.log("Valores inválidos.")
            } 
            else {
              console.log(`O resultado de ${a} x ${b} é: `+ (a*b));
              sair();
            }
        break;
    case "/": var a = parseFloat(prompt("Digite o dividendo: "));
              var b = parseFloat(prompt("Digite o divisor: "));
              if (isNaN(a) || isNaN(b)) {
                console.log("Valores inválidos.")
            } 
            else {
              if (b != 0) {
              console.log(`O resultado de ${a} / ${b} é: `+ (a/b));
              sair();
            }
            else {
                console.log("O divisor deve ser diferente de 0.")
            }
        }
        break;
    case "%": var a = parseFloat(prompt("Digite o primeiro valor: "));
              var b = parseFloat(prompt("Digite o segundo valor: "));
              var a2 = a/100;

              if (isNaN(a) || isNaN(b)) {
                console.log("Valores inválidos.")
            }
            else {
              console.log(`O resultado de ${a} % de ${b} é: ` + (a2*b).toFixed(2));
              sair();
            }
        break;
    default: console.log("O operador digitado é inválido!");
}
}