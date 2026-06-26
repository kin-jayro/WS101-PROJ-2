const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

function openSidebar() {
    sidebar.classList.add("show");
    overlay.classList.add("show");
    menuBtn.classList.add("hide");
}

function closeSidebar() {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
    menuBtn.classList.remove("hide");
}

menuBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        sidebar.classList.remove("show");
        overlay.classList.remove("show");
        menuBtn.classList.remove("hide");
    }
});