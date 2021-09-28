// Parte 1 


//Acesse o elemento elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'blue';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.getElementById('primeiroFilhoDoFilho').innerHTML = 'Um texto';

//Acesse o primeiroFilho a partir de pai
document.getElementById('pai').firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
document.getElementById('elementoOndeVoceEsta').previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
document.getElementById('elementoOndeVoceEsta').nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
document.getElementById('elementoOndeVoceEsta').nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai
document.getElementById('pai').lastElementChild.previousElementSibling;


// Parte 2


//Crie um irmão para elementoOndeVoceEsta
let pai = document.getElementById('pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
pai.appendChild(irmaoElementoOndeVoceEsta).id = 'irmaoElementoOndeVoceEsta';

//Crie um filho para elementoOndeVoceEsta
let filhoElementoOndeVoceEsta = document.createElement('section');
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta).id = 'filhoElementoOndeVoceEsta';

//Crie um filho para primeiroFilhoDoFilho
let filhoPrimeiroFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho).id = 'filhoPrimeiroFilhoDoFilho';

//A partir desse filho criado, acesse terceiroFilho
filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;


// Parte 3


//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho

// TODO corrigir o código
const naoRemove = ['pai', 'elementoOndeVoceEsta', 'primeiroFilhoDoFilho'];

const filterSections = document.querySelectorAll('section');

for (let i = 0; i < filterSections.length; i += 1) {
  if (filterSections !== naoRemove) {
    filterSections[i].remove();
  }
}