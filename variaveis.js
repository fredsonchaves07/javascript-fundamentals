/* A utilização do var obedece o escopo da função mesmo que seja utilizada dentro de funções */
var pi = 3.14;
console.log(pi);
var pi = 3;
console.log(pi)

/* A utilização do let obedece o escopo da função, respeitando o blobo e permite reatribuição */
let pi2 = 3.14;
console.log(pi2)