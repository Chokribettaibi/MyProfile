let canvas = document.getElementById('canvas1');

let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 500;

let image1 = new Image();
image1.src = '1763379927002.jpg';

image1.addEventListener('load',()=>{
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    let scannedImage = ctx.getImageData(0,0, canvas.width, canvas.height);
    // console.log(scannedImage);
    // let scannedData = scannedImage.data;
    // for (let i = 0; i < scannedData.length; i+=4){
    //     let total = scannedData[i] + scannedData[i+1] + scannedData[i+2]; // 3 Color
    //     let averageColorValue = total/3;
    //     scannedData[i] = averageColorValue;
    //     scannedData[i+1] = averageColorValue;
    //     scannedData[i+2] = averageColorValue;
    // }
    // scannedImage.data = scannedData;
    // ctx.putImageData(scannedImage, 0, 0);
    let particlesArray = [];
    const numberOfParticles = 1000;

    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 3.5;
            this.size = Math.random() * 1.5 + 1;
        }
        update(){
            this.y+= this.velocity;
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
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0,0, canvas.width, canvas.height);
        for(let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
})
