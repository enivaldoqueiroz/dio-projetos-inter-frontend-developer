//Solução 1
function verificaPalindrome(string){
    if(!string) return;

    var mensagem = string.split("").reverse().join("") === string;
    if(mensagem === true){
        return "É palindrome";
    }
    return "Não é palindrome";
}

function mostrarPalindrome(){
    
}
console.log(verificaPalindrome("ovo"));
console.log(verificaPalindrome("gato"));

//Solução 2

function verificaPalindrome2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return "É palindrome";
        }
        return "Não é palindrome";
    }
}

console.log(verificaPalindrome2("ovo"));
console.log(verificaPalindrome2("gato"));