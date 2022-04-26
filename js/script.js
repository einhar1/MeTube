var request;

$(document).ready(function () {

    // Följande kod är i grunden hämtad från stackoverflow.com.
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
    
    // Följande kod är i grunden hämtad från stackoverflow.com.
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    if (params.uname != null) {
        if (params.remember === 'on') {
            localStorage.setItem('uname', params.uname);
            document.getElementById('loggaIn').innerHTML = localStorage.getItem('uname');
        } else {
            sessionStorage.setItem('uname', params.uname);
            document.getElementById('loggaIn').innerHTML = sessionStorage.getItem('uname');
        }
    } else if (sessionStorage.getItem('uname') != null) {
        document.getElementById('loggaIn').innerHTML = sessionStorage.getItem('uname');
    } else if (localStorage.getItem('uname') != null) {
        document.getElementById('loggaIn').innerHTML = localStorage.getItem('uname');
    }

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
        document.getElementById('loggaIn').innerHTML = "Logga in";
        localStorage.clear();
        sessionStorage.clear();
    }

    document.getElementById('loggaIn').onclick = function (event) {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('body').style.overflow = 'hidden';
    }

    var i = 1;

    $("#mode").click(function () {

        if (i == 1) {
            console.log("dark");

            $("main").css('background-color', 'grey');
            $("header").css('background-color', '#666666');
            $("nav").css('background-color', 'grey');
            $("footer").css('background-color', 'grey');
            $("vids").css('background-color', 'grey');
            $("meny").css('background-color', '#666666');
            $("vid").css('background-color', 'grey');
            $("Prenumerationer").css('background-color', 'grey');
            $("trender").css('background-color', 'white');
            $("Bibliotek").css('background-color', 'white');
            $("historik").css('background-color', 'white');
            $("musik").css('background-color', 'white');
            $("Komedi").css('background-color', 'white');
            $("v1").css('background-color', 'white');

            i = 2;
        } else if (i == 2) {

            console.log("light");
            //light mode

            $("main").css('background-color', 'white');
            $("header").css('background-color', 'white');
            $("nav").css('background-color', 'white');
            $("footer").css('background-color', 'white');
            $("vids").css('background-color', 'white');
            $("meny").css('background-color', 'white');
            $("Prenumerationer").css('background-color', 'grey');
            $("trender").css('background-color', 'grey');
            $("Bibliotek").css('background-color', 'grey');
            $("historik").css('background-color', 'grey');
            $("musik").css('background-color', 'grey');
            $("Komedi").css('background-color', 'grey');
            $("v1").css('background-color', 'grey');


            i = 1;

        }

    });

});