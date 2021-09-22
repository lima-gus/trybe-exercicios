### Setup e Teardown

1.  O  `beforeEach`  é executado antes de cada teste, evitando que você tenha que repetir trechos de código, como por exemplo a criação de cidades utilizada no vídeo, dentro de cada teste. Dessa forma, você escreve o trecho de código uma única vez e garante que o "ambiente" esteja preparado para os testes que precisarem.
    
2.  Além do  `beforeEach`  , temos também o  `afterEach`  que foi citado no vídeo e que executa um trecho de código após cada teste. Ele é especialmente útil para resetar configurações, dados, entre outras coisas.
    
3.  Assim como vimos que pode acontecer dentro dos testes, durante o vídeo tivemos a execução de código assíncrono no  `beforeEach`  . Isso reforça, novamente, que é importante sempre se atentar a esse fator e que ele pode aparecer em diferentes cenários.
    

Outra maneira de tunar o uso do  `beforeEach`  e do  `afterEach`  é agrupá-los através do  `describe`  , para que executem apenas para um determinado conjunto de testes, ao invés de executá-los para todos os testes, pois frequentemente um trecho de código se aplica a alguns testes, mas não a outros.
