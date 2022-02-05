//Funçoes em Javascript

//Definição comum de uma função

function nome(parametros){
    //instruções
    return; //valor de retorno
}

//Obs.: Quando invocamos o "return", a função para de ser executada.

//Função Anônima

const soma = function(a, b){
    return a + b;
}

soma(1, 2); //Saida 3
soma(5, 4); //Saida 9

//Função autoinvocável e callbacks 
//(IFF) Immediately Invoked Function Expression

/*Uma função anônima entre parenteses,
seguido pór outro par de parênteses, que 
representa sua chamada*/

(
    function(){
        let name = "Digital Innovation One"
        return name;
    }
)();

//Obs.: Também pode ser utilizada com parâmetros ou armazenada em uma variável.

(
    function(a, b){
        return a + b;
    }
)(1, 2); // Saida 3

const soma3 = (
    function(){
        return a + b;
    }
)(1, 2);

console.log(soma3); // Saida 3

//Função  CallBack
/*
Uma função passada como argumento para outra.

Utilizando callbacks, você tem maior controle da ordem de chamadas.
*/

const calc = function(operador, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 + num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); // Saida -1
console.log(resultSoma); // Saida 3

//************************************************* */

// IF ELSE

//3 EXEMPLOS DE USO DE IF ELSE COM A MESMA SOLUÇÃO

//1º
function numeroPositivo(num){
    let resultado;
    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

numeroPositivo(2); // Saida true

numeroPositivo(-9); // Saida false

//2º

function numeroPositivo(){
    let resultado;

    const ehNegativo = num < 0;

    if (ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

//3º

function numeroPositivo(num){
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }

    return true;
}

//SWITCH CASE

function getAnimal(id){
    switch (id) {
        case 1:
            return "cão";
        case 2:
            return "gato"
        case 3:
            return "pássaro";
        default:
            break;
    }
}

getAnimal(1) // Saida cão