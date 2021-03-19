
const colors = ['red','green','blue'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',(e) =>{
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
