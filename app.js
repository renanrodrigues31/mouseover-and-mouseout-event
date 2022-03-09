const container = document.querySelectorAll('.container');
const content = document.querySelectorAll('.content');
const button = document.querySelectorAll('.button');
const img = document.querySelectorAll('.img');


container[0].addEventListener('mouseover', mudandoEstilo00);
container[1].addEventListener('mouseover', mudandoEstilo01);
container[2].addEventListener('mouseover', mudandoEstilo02);

function mudandoEstilo00(){
    img[0].classList.add('imgJs');
    button[0].classList.add('buttonJs');
    content[0].classList.add('contentJs');
} 
function mudandoEstilo01(){
    img[1].classList.add('imgJs');
    button[1].classList.add('buttonJs');
    content[1].classList.add('contentJs');
} 
function mudandoEstilo02(){
    img[2].classList.add('imgJs');
    button[2].classList.add('buttonJs');
    content[2].classList.add('contentJs');
} 

container[0].addEventListener('mouseout', mudandoEstilo21);
container[1].addEventListener('mouseout', mudandoEstilo22);
container[2].addEventListener('mouseout', mudandoEstilo23);

function mudandoEstilo21(){
    img[0].classList.remove('imgJs');
    button[0].classList.remove('buttonJs');
    content[0].classList.remove('contentJs');
} 
function mudandoEstilo22(){
    img[1].classList.remove('imgJs');
    button[1].classList.remove('buttonJs');
    content[1].classList.remove('contentJs');
} 
function mudandoEstilo23(){
    img[2].classList.remove('imgJs');
    button[2].classList.remove('buttonJs');
    content[2].classList.remove('contentJs');
} 

container[0].addEventListener('click', direcionando1);
container[1].addEventListener('click', direcionando1);
container[2].addEventListener('click', direcionando1);

function direcionando1() {
     console.log("tá funcionando");
}





