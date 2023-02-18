const randomColor = document.getElementById("random_color");

// This handler will be executed every time the cursor is moved over a different list item
randomColor.addEventListener("mouseover", () => {
  randomColor.style.backgroundColor = makeRandColor();

});


const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}