const videor = ["video1", "video2", "video3", "video4"];

function checkVideo(video) {
    return video == document.getElementById("search").value;
}

function myFunction() {
    if (videor.find(checkVideo) == undefined) {
        window.alert("Inga sökresultat");
    } else {
        window.location.href = videor.find(checkVideo) + ".html";
    }
}