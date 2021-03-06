
### Parte I - Objetos e For/In

Usando o objeto abaixo, faça os exercícios a seguir:

```javascript
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

----------

**1 -** Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

```shell
Bem-vinda, Margarida
```

----------

**2 -** Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

```javascript
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```

----------

**3 -** Faça um  `for/in`  que mostre todas as chaves do objeto. Valor esperado no console:

```shell
personagem
origem
nota
recorrente
```

----------

**4 -** Faça um novo  `for/in`  , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

```shell
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```

----------

**5 -** Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

```bash
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```

----------

### Parte II - Funções

Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos,  [clique aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.

**_Spoiler-alert_** : para os exercícios do dia, os métodos  `split`  ,  `join`  e  `reverse`  podem ser muito úteis.

----------

**1 -** Crie uma função que receba uma  `string`  e retorne  `true`  se for um  [palíndromo](https://pt.wikipedia.org/wiki/Pal%C3%ADndromo) , ou  `false`  , se não for.

-   Exemplo de palíndromo:  _arara_ .
    
-   `verificaPalindrome('arara')`  ;
    
-   Retorno esperado:  `true`
    
-   `verificaPalindrome('desenvolvimento')`  ;
    
-   Retorno esperado:  `false`
    

----------

**2 -** Crie uma função que receba um  `array`  de inteiros e retorne o índice do maior valor.

-   Array de teste:  _`[2, 3, 6, 7, 10, 1];`_ .
    
-   Valor esperado no retorno da função:  `4`  .
    

----------

**3 -** Crie uma função que receba um  `array`  de inteiros e retorne o índice do menor valor.

-   Array de teste:  _`[2, 4, 6, 7, 10, 0, -3];`_ .
    
-   Valor esperado no retorno da função:  `6`  .
    

----------

**4 -** Crie uma função que receba um  `array`  de nomes e retorne o nome com a maior quantidade de caracteres.

-   Array de teste:  _`['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];`_ .
    
-   Valor esperado no retorno da função:  `Fernanda`  .
    

----------

**5 -** Crie uma função que receba um  `array`  de inteiros e retorne o inteiro que mais se repete.

-   Array de teste:  _`[2, 3, 2, 5, 8, 2, 3];`_ .
    
-   Valor esperado no retorno da função:  `2`  .
    

----------

**6 -** Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

-   Valor de teste:  _`N = 5`_ .
    
-   Valor esperado no retorno da função:  _1+2+3+4+5 =_ `15`  .
    

----------

**7 -** Crie uma função que receba uma  `string word`  e outra  `string ending`  . Verifique se a  `string ending`  é o final da  `string word`  . Considere que a  `string ending`  sempre será menor que a  `string word`  .

-   Valor de teste:  `'trybe' e 'be'`
    
-   Valor esperado no retorno da função:  `true`
    
-   `verificaFimPalavra('trybe', 'be')`  ;
    
-   Retorno esperado:  `true`
    
-   `verificaFimPalavra('joaofernando', 'fernan')`  ;
    
-   Retorno esperado:  `false`
    

----------

### Bônus

**1 -** (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

**Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!**

**Dicas:**

-   Uma string é um array de caracteres, então cada elemento do array é uma letra.
-   O valor de cada numeral romano é:

```shell
| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
```

-   Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
    
-   **Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.**
    

----------

**2 -** Crie uma função chamada  `arrayOfNumbers`  que receberá a variável  `vector`  como parâmetro. Através de um loop  `for`  , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

```javascript
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
```

----------

**3 -** A partir do array de frutas  `basket`  , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato:  `Sua cesta possui: x Melancias, x Abacates...`

```javascript
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
```

----------

