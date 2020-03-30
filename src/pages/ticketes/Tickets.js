//get button view more
function selectHeadphones() {
    var alertSelect = document.getElementById("alert-select-headphones");
    var alertError = document.getElementById("alert-error-headphones");


    if ($('input:radio:checked').length == 0) {
        //if there's no input checked
        alertError.classList.remove("d-none");
        setTimeout(function () { alertError.classList.add("d-none"); }, 4000);
    }
    else {
        alertSelect.classList.remove("d-none");
        setTimeout(function () { alertSelect.classList.add("d-none"); }, 4000);
        //if wednesday and thursday are checked
        if (document.querySelector('input[name="thursday"]:checked') &&
            document.querySelector('input[name="wednesday"]:checked')) {
            document.querySelector('input[name="thursday"]:checked').checked = false;
            document.querySelector('input[name="wednesday"]:checked').checked = false;
        } else if (document.querySelector('input[name="thursday"]:checked')) {
            //if it's just thursday checked

            document.querySelector('input[name="thursday"]:checked').checked = false;
        }
        else {
            document.querySelector('input[name="wednesday"]:checked').checked = false;
        }
    }



}