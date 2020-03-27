$(function () {
    //load page elements
    $("#encabezado").load("src/components/header/header.html");
    $("#main").load("src/application/App.html");
    $("#pie-de-pagina").load("src/components/footer/footer.html");
    $("#scroll-header").load("src/components/scroll-header/scroll-header.html");

    //scrolls for the navbar
    var prevScrollpos = window.pageYOffset;
    var navTwo = document.getElementById("scroll-header");
    navTwo.classList.add("d-none")
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            //if last sccroll pos is down I mean is great than the current position remove display none
            navTwo.classList.remove("d-none");
            if (window.pageYOffset <= 150) {
                navTwo.classList.add("d-none")
            }
        } else {
            navTwo.classList.add("d-none");
        }
        prevScrollpos = currentScrollPos;
    }

   
});