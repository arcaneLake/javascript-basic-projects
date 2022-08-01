// make the array
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// make btn equal to code to get btn ID from dom
const btn = document.getElementById("btn");

// make color equal to code to get .class from doc
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}