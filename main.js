
function togglenav() {
    document.getElementById("nav-links-mobile").style.display = "flex";
}

function closenav() {
    document.getElementById("nav-links-mobile").style.display = "none";
}


const slider = document.getElementById("about-item-container");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

scrollLeftBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -550,
        behavior: "smooth",
    });
});

scrollRightBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: 550,
        behavior: "smooth",
    });
});
