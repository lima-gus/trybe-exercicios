/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

function callFunctions() {
  descriptionText();
  changeSideColor();
  changeCenterColor();
  changeTitle();
  paragraphsToUpperCase();
  displayParagraphs();
}


// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function descriptionText() {
  document.getElementsByTagName('p')[0].innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis sequi officia atque accusamus, doloremque libero ut, officiis cumque ipsa provident, inventore modi. Corporis adipisci odio nam, accusamus veniam perferendis id.';
};

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeSideColor() {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = "rgb(76,164,109)";
};

// Crie uma função que mude a cor do quadrado vermelho para branco.

function changeCenterColor() {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = "white";
}

// Crie uma função que corrija o texto da tag <h1>

function changeTitle() {
  document.getElementsByClassName('title')[0].innerText = "Exercício 5.1 - JavaScript";
}

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

const paragraphs = document.getElementsByTagName('p');

function paragraphsToUpperCase() {
  for (let i = 0; i < paragraphs.length; i += 1) {
    paragraphs[i].innerHTML = paragraphs[i].innerHTML.toUpperCase();
  }
}

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function displayParagraphs() {
  for (p of paragraphs) {
    console.log(p.innerText);
  }
}
