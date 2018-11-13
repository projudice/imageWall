
var img1 = document.getElementById("container1").getElementsByTagName("img");
var img2 = document.getElementById("container2").getElementsByTagName("img");
var img3 = document.getElementById("container3").getElementsByTagName("img");
var img4 = document.getElementById("container4").getElementsByTagName("img");
var img5 = document.getElementById("hide1").getElementsByTagName("img");
var img6 = document.getElementById("hide2").getElementsByTagName("img");
var img7 = document.getElementById("hide3").getElementsByTagName("img");
var img8 = document.getElementById("hide4").getElementsByTagName("img");
var popup = document.getElementById("popup");
var btn = document.getElementById('show');

btn.onclick = function () {
    show.style.display = "none";
    hide1.style.display = "block";
    hide2.style.display = "block";
    hide3.style.display = "block";
    hide4.style.display = "block";
}

for (var i = 0; i < img1.length; i++) {
    img1[i].onclick = function (event) {
        event = event || window.event;
        var target = document.elementFromPoint(event.clientX, event.clientY);
        showBig(target.src);
    }
}
for (var i = 0; i < img2.length; i++) {
    img2[i].onclick = function (event) {
        event = event || window.event;
        var target = document.elementFromPoint(event.clientX, event.clientY);
        showBig(target.src);
    }
}
for (var i = 0; i < img3.length; i++) {
    img3[i].onclick = function (event) {
        event = event || window.event;
        var target = document.elementFromPoint(event.clientX, event.clientY);
        showBig(target.src);
    }
}
for (var i = 0; i < img4.length; i++) {
    img4[i].onclick = function (event) {
        event = event || window.event;
        var target = document.elementFromPoint(event.clientX, event.clientY);
        showBig(target.src);
    }
}
for (var i = 0; i < img5.length; i++) {
    img5[i].onclick = function (event) {
        event = event || window.event;
        var target = document.elementFromPoint(event.clientX, event.clientY);
        showBig(target.src);
    }
}for (var i = 0; i < img6.length; i++) {
    img6[i].onclick = function (event) {
        event = event || window.event;
        var target = document.elementFromPoint(event.clientX, event.clientY);
        showBig(target.src);
    }
}for (var i = 0; i < img7.length; i++) {
    img7[i].onclick = function (event) {
        event = event || window.event;
        var target = document.elementFromPoint(event.clientX, event.clientY);
        showBig(target.src);
    }
}for (var i = 0; i < img8.length; i++) {
    img8[i].onclick = function (event) {
        event = event || window.event;
        var target = document.elementFromPoint(event.clientX, event.clientY);
        showBig(target.src);
    }
}
popup.onclick = function () {
    popup.style.display = "none";
}
function showBig(src) {
    popup.getElementsByTagName("img")[0].src = src;
    popup.style.display = "block";
}