//Solve these problems:

//#1 Create a one line function that adds adds two parameters
// Answer:
const oneLineFunctionMultiply = (a, b) => a * b;

//Closure: What does the last line return?
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3);
// Answer:
// Vai retornar o valor 13 pois o primeiro e único parâmetro adicionado com a função addToTen é (3). E de acordo com a função addTo, o valor de x será somado com o de y.

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);
// Answer:
// Irá retornar o valor 31 pois de acordo com a função, o valor de a será somado com o valor de b. Nesse caso ao executar a variável curriedSum com os parâmetros (30) e (1). Isso quer dizer que a + b terá o valor de 31.

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);
//Answer:
// O valor final será 17 pois ao executar a variável curriedSum que armazena duas funções diferentes, ela irá somar a + b, que no nosso caso possuem o valor 5 e 12 respectivamente.

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);
// Answer:
// Retorna o valor 16 já que nas variáveis add1 e add5 foram passados as somas do num + 1 e num + 5 respectivamente. O que nos faz supor que esse valor irá valer 6, porém no compose é adicionado o número 10 como terceiro parâmetro da função. Gerando o valor final de 16.

//What are the two elements of a pure function?
// Sem side-effects (Algo que pode alterar o escopo principal do código, gerando uma falta de controle sobre nosso código). É uma boa prática sempre evitar side-effects.
// Já o segundo elemento de uma função pura seria que as entradas(inputs) sempre retornam as mesmas saídas(outputs). Ou seja uma função sempre deve ter os mesmos valores iniciais e finais independente de quantas vezes for executada.
