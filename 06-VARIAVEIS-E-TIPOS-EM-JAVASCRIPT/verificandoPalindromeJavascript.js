//Solução 1
function verificaPalindrome(string){
    if(!string) return;

    var mensagem = string.split("").reverse().join("") === string;
    if(mensagem === true){
        return "Palindrome";
    }
    return "Não é palindrome";
}

function mostrarPalindrome(){
    
}
console.log(verificaPalindrome("ovo"));
console.log(verificaPalindrome("gato"));
