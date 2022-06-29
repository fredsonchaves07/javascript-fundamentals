# Introdução

## Javascript é objeto
- Javascript é uma linguagem orientada a objetos
- Todos os tipos primitivos e estruturas de dados são considerados objetos
- Podemos acessar os atributos e métodos nos tipos primitivos

```javascript
    'uma string qualquer'.length
```
- Os tipos `null` e `undefined` não são objetos. É a única exceção do Javascript
- Cada tipo primitivo, com exceção do `null` e `undefined` estão contidos no objeto global 

## Utilização do `var`
- É um tipo de variável global
- Pode ser redeclaravel
- Pode ser retribuido
- São delimitadas por função
- Depreciado

## Utilização de constantes `const`
- Não permite redeclaração
- Não permite retribuição
- São delimitadas por blocos

## Utilizaçãodo `let`
- Alternativa a utilização do `var` 
- Pode ser retribuido
- União entre o `const` e o `var`
- Não pode ser redeclaravel
- Delimitado por blocos
- Mais recomendável utilizar esse tipo de variável

## Declaração de funções
- A função no javascript é declarada através da palavra reservada `function`
- Exemplo de utilização da função

```javascript
    function hello() {
        console.log("Hello")
    }
```

- As funções podem ter retorno. Usamos a palavra reservada `return` para retornar um valor de uma função
- Por padrão é retornado `undefined`
- Uma função também e um objeto no javascript