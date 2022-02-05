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



