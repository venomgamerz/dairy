let currentPage = 1; // Start at the first page
const diary = document.getElementById("diary");

// Function to open the diary and flip through pages
diary.addEventListener("click", () => {
    if (currentPage <= 10) {
        const page = document.getElementById(`page${currentPage}`);
        page.classList.add("show"); // Show the current page
        currentPage++; // Move to the next page
        if (currentPage > 10) {
            diary.classList.add("open"); // Close diary after 10 pages
        }
    }
});
