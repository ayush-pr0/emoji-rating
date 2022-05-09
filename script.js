const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular");
const colors = ["red", "orange", "lightblue", "lightgreen", "green"];
const button = document.querySelector(".button");
let rate = 1;

const updateRating = function (index) {
    rate = index + 1;
    starsEl.forEach((starEl, id) => {
        if (id < index + 1) starEl.classList.add("active");
        else starEl.classList.remove("active");
    });

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colors[index];
    });
};

updateRating(0);

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateRating(index);
    });
});

button.addEventListener("click", () => {
    console.log(`Rating : ${rate}`);
    rate = 1;
    updateRating(0);
});
