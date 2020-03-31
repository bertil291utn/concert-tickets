//get button view more
function viewMore() {
    var elementsToShow = document.getElementById("view-more");
    var nameButton = document.getElementById("name-button");
    var iconButton = document.getElementById("icon-button");

    if (elementsToShow.classList.contains("d-none")) {
        elementsToShow.classList.remove("d-none");
        nameButton.innerHTML="LESS";
        iconButton.classList.remove("fa-angle-down");
        iconButton.classList.add("fa-angle-up");
    }
    else {
        elementsToShow.classList.add("d-none");
        nameButton.innerHTML="MORE";
        iconButton.classList.remove("fa-angle-up");
        iconButton.classList.add("fa-angle-down");
    
    }
}