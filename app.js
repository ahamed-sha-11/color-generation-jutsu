const displayColor  = document.querySelector('#bg');
const upgrade = document.querySelector('#upbg');

const color = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

let code;

upgrade.addEventListener('click',getBgColor);

function getBgColor() {

    code = "#";

    for(let i=0;i<6;i++) {

        code +=color[Math.floor(Math.random()*color.length)];

    }

    update();
}

function update(){

    displayColor .textContent = `Background : ${code}`;
    document.body.style.background = code;
}