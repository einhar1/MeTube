var request;

$(document).ready(function () {
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
    
});