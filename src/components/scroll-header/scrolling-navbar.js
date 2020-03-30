$(function () {
    //scrolls for the navbar
    var prevScrollpos = window.pageYOffset;
    $('#scroll-header').css('visibility', 'hidden');
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            //if last sccroll pos is down I mean is great than the current position remove display none
            $('#scroll-header').css('visibility', 'visible');
            $('#scroll-header .fixed').css('top', '0');
            if (window.pageYOffset <= 150) {
                $('#scroll-header').css('visibility', 'hidden');
                $('#scroll-header .fixed').css('top', '30%');
            }
        } else {
            $('#scroll-header').css('visibility', 'hidden');
            $('#scroll-header .fixed').css('top', '30%');
        }
        prevScrollpos = currentScrollPos;
    }
});