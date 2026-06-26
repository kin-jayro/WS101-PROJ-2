const modal = document.getElementById("blotterModal");



document.getElementById("add-btn").onclick = () => {
    modal.classList.add("show");
};

document.getElementById("closeModal").onclick = () => {
    modal.classList.remove("show");
};

document.getElementById("cancelBtn").onclick = () => {
    modal.classList.remove("show");
};

window.onclick = (e) => {
    if(e.target === modal){
        modal.classList.remove("show");
    }
};