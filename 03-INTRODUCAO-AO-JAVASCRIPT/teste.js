//Variaveis

/*var y = 0;
var x = 1;*/

//Função do 1º Grau | ax + b = 0

/*var preco = 2;
var desconto = 0.2;

proco = preco - desconto;*/

//Funções

/*function soma(a,b)
{
    console.log(a + b);
    return a + b;
}

soma(5 + 2);*/

//console.log("Hello World!");

function returnEvenValues(array)
{
    let evenNums = [];
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 === 0)
        {
            evenNums.push(array[i]);
        } 
        else 
        {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os numeros pares são:',evenNums);
}

let array = [1, 2, 3, 4, 5, 7, 8];

returnEvenValues(array);