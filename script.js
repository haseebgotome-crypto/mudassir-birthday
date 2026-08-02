const images = [
  "Screenshot_20260801-205849.jpg",
  "Screenshot_20260801-205905.jpg",
  "file_00000000b9e0820ba22eac6950f6e747.png"
];

let current = 0;

const photo = document.getElementById("photo");
const button = document.getElementById("startBtn");

button.addEventListener("click", () => {
    button.style.display = "none";

    setInterval(() => {
        current++;
        if (current >= images.length) {
            current = 0;
        }
        photo.src = images[current];
    }, 3000);
});
