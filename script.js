var request;

$(document).ready(function () {

    // Denna del innehåller kod kopierad från diverse sidor.
    $(document).on('submit', '#searchbar', function () {
        
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        request.open('GET', document.getElementById("search").value + ".html", false);
        request.send();

        if (request.status === 404) {
            alert("Inga sökresultat");
        } else {
            window.location.href = document.getElementById("search").value + ".html";
        }

        return false;
    });

    // Get the modal
    var modal = document.getElementById('id01');
    var close = document.getElementById('close');
    var cancelbtn = document.getElementById('cancelbtn');
    var link = document.getElementById('link');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById('body').style.overflow = 'auto';
        }
    }

    close.onclick = function (event) {
        document.getElementById('id01').style.display = 'none';
        document.getElementById('body').style.overflow = 'auto';
    }

    cancelbtn.onclick = function (event) {
        document.getElementById('id01').style.display = 'none';
        document.getElementById('body').style.overflow = 'auto';
    }

    link.onclick = function (event) {
        document.getElementById('id01').style.display = 'block';
        document.getElementById('body').style.overflow = 'hidden';
    }

});