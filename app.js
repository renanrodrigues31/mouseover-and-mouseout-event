const container = document.querySelector('.container');
const content = document.querySelector('.content');
const button = document.querySelector('.button');
const img = document.querySelector('.img');

container.addEventListener('mouseover', mudandoEstilo);

function mudandoEstilo(){
    img.classList.add('imgJs');
    button.classList.add('buttonJs');
    content.classList.add('contentJs');
} 

container.addEventListener('mouseout', mudandoEstilo2);

function mudandoEstilo2(){
    img.classList.remove('imgJs');
    button.classList.remove('buttonJs');
    content.classList.remove('contentJs');
} 