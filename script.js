const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular");
const colors = ["red", "orange", "lightblue", "lightgreen", "green"];

const updateRating = function (index) {
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
