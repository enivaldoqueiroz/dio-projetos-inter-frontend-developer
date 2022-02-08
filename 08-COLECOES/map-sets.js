// METODOS - Adicionar | Ler | Deletar

const myMap = new Map();

myMap.set('apple', 'fruit');
// Saida Map(1) {"apple" => fruit}

myMap.get(apple);
// Saida "fruit"

myMap.delete("apple");
// Saida true

myMap.get("apple");
// undefined

/**
 * MAP vs OBJETO
 * 
 *  - Maps podem ter chaves de qualquer tipo;
 *  - Maps possuem a propriedade length;
 *  - Maps são mais fáceis de iterar;
 *  - Utilizado quando o valor das chaves é desconhecido;
 *  - Os valores tem o mesmo tipo.
 */


// SET são estruturas que armazenam apenas VALORES ÚNICOS.

const myArry = [1,1,2,2,3,4,5,6,7,8,2,1];

const mySet = new Set[myArry];

// Add, Consultar e Deleter no SET

const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
//Saida true

mySet.has(3);
//Saida false

mySet.delete(5);

/*
OBS.: 
    - Possui valoresunicos;
    - Em vez da propriedade length, consulta-se o némuro de registro pelo size;
    - Não possui os métodos map, filter e reduce etc 

*/
