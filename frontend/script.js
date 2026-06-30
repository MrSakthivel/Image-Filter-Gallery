
const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterablecards = document.querySelectorAll('.filter-cards .card');

const filtercards = (e) => {

    document.querySelector(".filter-buttons .active")?.classList.remove("active");
    e.target.classList.add("active");

    filterablecards.forEach(card => {

        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => {
    button.addEventListener("click", filtercards);
});

