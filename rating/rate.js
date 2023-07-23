let container = document.querySelector(".star-rating");
let star = document.querySelectorAll("i");
let rate = document.querySelector(".rate");

let prevClicked = 0;
container.addEventListener("click", (e) => {
  let currentIndex = e.target.dataset.pos;

  for (let i = 0; i < prevClicked; i++) {
    star[i].classList.remove("gold");
  }

  for (let i = 0; i < currentIndex; i++) {
    star[i].classList.add("gold");
  }

  rate.innerText = currentIndex;
  prevClicked = currentIndex;
});

container.addEventListener("mouseover", (e) => {
  let currentIndex = e.target.dataset.pos;
  for (let i = 0; i < star.length; i++) {
    if (star[i].classList.contains("gold")) {
      star[i].classList.remove("gold");
    }
  }

  for (let i = 0; i < currentIndex; i++) {
    star[i].classList.add("gold");
  }
});

container.addEventListener("mouseout", () => {
  for (let i = 0; i < star.length; i++) {
    star[i].classList.remove("gold");
  }

  console.log("sdsdf", prevClicked);
  for (let i = 0; i < prevClicked; i++) {
    star[i].classList.add("gold");
  }
});
