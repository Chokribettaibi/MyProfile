let canvas = document.getElementById('canvas1');
let animRange = document.getElementById('animeOne');
let animRange2 = document.getElementById('animeTwo');
let animRange3 = document.getElementById('animeThree');
let animRange4 = document.getElementById('animeFour');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

// animRange.onclick = function aniValue(){
//     console.log(animRange.value);
// };
// animRange2.onclick = function aniValue2(){
//     console.log(animRange2.value);
// };
// animRange3.onclick = function aniValue3(){
//     console.log(animRange3.value);
// };

let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

let image1 = new Image();
image1.src = '1760830748021.jpg';

img1.onclick = function() {
    image1.src = '1760830748021.jpg';
}
img2.onclick = function() {
    image1.src = '1766736530645.jpg';
}
img3.onclick = function() {
    image1.src = '1761094810451.jpg';
}

image1.addEventListener('load',()=>{
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    let pixels = ctx.getImageData(0,0, canvas.width, canvas.height);
    ctx.clearRect (0, 0, canvas.width, canvas.height);
    

    let particlesArray = [];
    const numberOfParticles = 5000;
    animRange4.onclick = function aniValue4(){
        numberOfParticles = numberOfParticles * animRange4.value * 0.1; // animRange4.value * 0.1 to adjust the number of particles based on the range input
    }

    let mappedImage = [];

    for(let y = 0; y < canvas.height ; y++){
        let row = [];
        for (let x = 0; x < canvas.width; x++){
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row)
    }

    function calculateRelativeBrightness(red, green, blue){
        return Math.sqrt(
            (red * red) * 0.299 + 
            (green * green) * 0.587 + 
            (blue * blue) * 0.114
        )/100;
    }
    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.9;
            this.size = Math.random() * 1.5 + 1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }
        update(){
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (2.5 - this.speed) + this.velocity;

            this.y+= movement;
            if(this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function init(){
        for (let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate(){
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.02;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05 * animRange2.value * 0.01; // animRange2.value * 0.01 to adjust the alpha based on the range input
        for(let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * animRange.value * 0.01; // animRange.value * 0.01 to adjust the alpha based on the range input
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
})

