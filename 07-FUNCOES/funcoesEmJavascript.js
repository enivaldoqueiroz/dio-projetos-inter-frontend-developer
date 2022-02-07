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

//****************************************************** */

//FOR 
// Loop dentro de elementos iteraveis (array, strings)

function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros);

//Saida [4, 66, 912, 712,80]

//FOR IN

// Loop entre propriedades enumeráveis de um objeto.

function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);

/* Saida
    nome
    idade
    cidade
*/ 

function forInExemplo(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);

/* Saida
    João
    20
    Salvador
*/ 

// FOR OF

/* Loop entre estruturas iteráveis (arrays, strings) */

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi";

console.log(palavra);

// WHILE

//Executa instruções até que a condição se torne falsa.

function exemploWhile(){
    let num = 0

    while (num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile()
/**
 * Saida
 * 0
 * 1
 * 2
 * 3
 * 4
 */

// DO WHILE

/* Executa instruções até que a condição 
se torne falsa.

Porém a primeira execução sempre ocorre.*/

function exemploDoWhile(){
    let num = 0;

    do {
        console.log(num);
        num++;
    } while(num <= 5)
}

exemploDoWhile()

/**
 * Saida
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 */


// THIS

/* A palavra reservada this é uma referencia de contexto

No exemplo, this refere-se ao objeto pessoa*/

const pessoa = {
    firsName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){
        return this.firsName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

pessoa.fullName();
// Saida André Soares
pessoa.getId();
// Sainda 1

// CALL

const pessoa = {
    nome : 'Miguel',
};

const animal = {
    nome : 'Murphy',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa);
// Saida Miguel

getSomething.call(animal);
// Saida Miguel

//É possível passar parâmetros para essa função separando-os pro vírgulas.

const myObj = {
    num1: 2,
    num2: 4,
}

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);

// Saida 12

// APPLY

const pessoa = {
    nome : 'Miguel',
};

const animal = {
    nome : 'Murphy',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(pessoa);
// Saida Miguel

getSomething.apply(animal);
// Saida Miguel

// BIND

/* Clona a estrutura da função onde é chamado e aplica o valor do objeto passado como parâmetro */

const retornaNomes = function() {
    return this.nome;
};

let bruno = retornaNomes.bind({ nome: 'Bruno'});

bruno();
// Saida Bruno