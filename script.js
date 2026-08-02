const images = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg"
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
