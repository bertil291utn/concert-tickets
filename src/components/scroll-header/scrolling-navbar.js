$(function () {
    window.onscroll = function () { myFunction() };

    var navTwo = document.getElementById("scroll-header");
    navTwo.classList.add("d-none")
    function myFunction() {

        if (window.pageYOffset >= 300) {
            navTwo.classList.remove("d-none")
        }
        else {
            navTwo.classList.add("d-none")
        }
    }
});