const arrow = document.querySelector(".share");
const box = document.querySelector(".share-box");

arrow.addEventListener("click", () => {
    box.classList.toggle("show");
    arrow.classList.toggle("clicked");
});