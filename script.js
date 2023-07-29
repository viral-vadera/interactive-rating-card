"use strict";

//element selections
const ratings = document.querySelectorAll(".ratings");
const submitBtn = document.querySelector(".submit");
const ratingTake = document.querySelector(".card__rating--start");
const thankCard = document.querySelector(".card__rating--thankyou");
const ratingGivenMessage = document.querySelector(".rating");

//implementing the color change in rating element on click
let ratingGiven;
ratings.forEach((element, i) => {
  element.addEventListener("click", function (e) {
    ratings.forEach((element, r) => {
      if (r <= i) element.style.backgroundColor = "hsl(25, 97%, 53%, 1)";
      else if (r > i) element.style.backgroundColor = "hsl(216, 12%, 54%)";
    });
    ratingGiven = i;
  });
});

// rendering the thankyou card as sybmit is clicked

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  ratingTake.classList.add("hidden");
  thankCard.classList.remove("hidden");
  ratingGivenMessage.textContent = `You selected ${ratingGiven + 1} out of 5`;
  ratings.forEach((element) => {
    element.style.backgroundColor = "hsl(216, 12%, 54%)";
  });
});
