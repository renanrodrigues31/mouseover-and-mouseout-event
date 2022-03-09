const container = document.querySelectorAll('.container');
const content = document.querySelectorAll('.content');
const button = document.querySelectorAll('.button');
const img = document.querySelectorAll('.img');


for (var i = 0; i < container.length; ++i) {
    container[i].addEventListener('mouseover', mudandoEstilo00);
    function mudandoEstilo00(){
        for (var dois = 0; dois < img.length; ++dois) {
            img[dois].classList.add('imgJs');
            button[dois].classList.add('buttonJs');
            content[dois].classList.add('contentJs');
        }
    }
}

for (var i = 0; i < container.length; ++i) {
    container[i].addEventListener('mouseout', mudandoEstilo00);
    function mudandoEstilo00(){
        for (var dois = 0; dois < img.length; ++dois) {
            img[dois].classList.remove('imgJs');
            button[dois].classList.remove('buttonJs');
            content[dois].classList.remove('contentJs');
        }
    }
}

