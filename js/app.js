const card1 = document.getElementById("card_1");
const card2 = document.getElementById("card_2");
const card3 = document.getElementById("card_3");
const card4 = document.getElementById("card_4");
const card5 = document.getElementById("card_5");
const card6 = document.getElementById("card_6");


// This handler will be executed every time the cursor is moved over a different list item
card1.addEventListener("mouseover", () => {
  card1.style.backgroundColor = makeRandColor();
});
card2.addEventListener("mouseover", () => {
  card2.style.backgroundColor = makeRandColor();
});
card3.addEventListener("mouseover", () => {
  card3.style.backgroundColor = makeRandColor();
});
card4.addEventListener("mouseover", () => {
  card4.style.backgroundColor = makeRandColor();
});
card5.addEventListener("mouseover", () => {
  card5.style.backgroundColor = makeRandColor();
});
card6.addEventListener("mouseover", () => {
  card6.style.backgroundColor = makeRandColor();
});



