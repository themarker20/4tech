const toggleMenu = document.querySelector(".menu");
const menu = document.querySelector("nav");

toggleMenu.addEventListener("click", function () {
  menu.classList.toggle("show");
  toggleMenu.classList.toggle("cros");
});

const showMore = document.querySelector(".show-me-more");
const hiddenBoxes = document.querySelectorAll(".hidden-box");

showMore.addEventListener("click", (event) => {
  event.preventDefault();

  hiddenBoxes.forEach((box) => {
    box.classList.toggle("show-hidden");
  });
});
