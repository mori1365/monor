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

let op = document.getElementById('op');
let cl = document.getElementById('cl');
let img = document.querySelector(".img");

op.onclick = () => {
    op.style.display= 'none';
    img.style.right = "0";
    cl.style.display= 'block';
}
cl.onclick = () => {
    op.style.display= 'block';
    img.style.right = "100%";
    cl.style.display= 'none';
}