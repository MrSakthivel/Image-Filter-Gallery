const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".card");
const noResults = document.querySelector(".no-results");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-name");
        let visibleCount = 0;

        cards.forEach(card => {
            const cat = card.querySelector("p").innerText.replace("Category: ", "").toLowerCase();

            if (filter === "all" || cat === filter) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        // show "no items" message if nothing matched
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? "block" : "none";
        }

        // active button style
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});