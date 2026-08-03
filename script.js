const images = [
  "Screenshot_20260801-205849.jpg",
  "Screenshot_20260801-205905.jpg",
  "file_00000000b9e0820ba22eac6950f6e747.png"
];

let current = 0;

const photo = document.getElementById("photo");
const button = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

button.addEventListener("click", () => {
    music.currentTime = 0;
    music.play().catch(error => console.log(error));
    button.style.display = "none";

    setInterval(() => {
        current++;
        if (current >= images.length) {
            current = 0;
        }
        photo.src = images[current];
    }, 3000);
});
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 25; i++) {
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            3,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
        ctx.fill();
    }

    requestAnimationFrame(drawFireworks);
}

drawFireworks();
