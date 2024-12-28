
function togglenav() {
    document.getElementById("nav-links-mobile").style.display = "flex";
}

function closenav() {
    document.getElementById("nav-links-mobile").style.display = "none";
}



function log() {
    document.getElementById("form-container").style.display = "flex";
    document.getElementById("nav-links-mobile").style.display = "none";
}
function formclose() {
    document.getElementById("form-container").style.display = "none";
}

function signupbtn() {
    document.getElementById("Signup").style.transform = "translateY(0%)";
    document.getElementById("Signup").style.transition = "transform 0.8s";
}

function loginbtn() {
    document.getElementById("Signup").style.transform = "translateY(-100%)";
    document.getElementById("Signup").style.transition = "transform 0.8s";
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



