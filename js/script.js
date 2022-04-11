// JavaScript-filen består till stor del kod som i grunden är 
// hämtad från bland annat w3schools.com och stackoverflow.com.

var request;

$(document).ready(function () {

    $(document).on('submit', '#searchbar', function () {
        
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        request.open('GET', "../videor/" + document.getElementById("search").value + ".html", false);
        request.send();

        if (request.status === 404) {
            alert("Inga sökresultat");
        } else {
            window.location.href = "../videor/" + document.getElementById("search").value + ".html";
        }

        return false;
    });

    var targetObj = {};
    var targetProxy = new Proxy(targetObj, {
        set: function (target, key, value) {
            if (params.uname != null) {
                document.getElementById('link').innerHTML = params.uname;
            }
            target[key] = value;
            return true;
        }
    });

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    targetProxy.uname = params.uname;

    window.onclick = function (event) {
        if (event.target == document.getElementById('modal')) {
            document.getElementById('modal').style.display = "none";
            document.getElementById('body').style.overflow = 'auto';
            document.getElementById("login").reset();
        }
    }

    document.getElementById('close').onclick = function (event) {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('body').style.overflow = 'auto';
        document.getElementById("login").reset();
    }

    document.getElementById('cancelbtn').onclick = function (event) {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('body').style.overflow = 'auto';
        document.getElementById("login").reset();
    }

    document.getElementById('link').onclick = function (event) {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('body').style.overflow = 'hidden';
    }

});