const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 140)
})
let menu = document.getElementById('menu');
let x = document.getElementById('x');
let nav = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    nav.classList.remove('open');
}



var fullcontainer = document.getElementById('fullcontainer');
var iframe = fullcontainer.querySelector('iframe');
var closebtn = fullcontainer.querySelector(".closebtn");