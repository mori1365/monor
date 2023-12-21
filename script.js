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



function openFullscreen(url) {
    var fullscreenContainer = document.getElementById("fullscreenContainer");
    var iframe = fullscreenContainer.querySelector("iframe");
    var closeButton = fullscreenContainer.querySelector(".close-btn");
    
    iframe.src = url;
    fullscreenContainer.style.display = "block";
    closeButton.style.display = "block";
  }
  
  function closeFullscreen() {
    var fullscreenContainer = document.getElementById("fullscreenContainer");
    var iframe = fullscreenContainer.querySelector("iframe");
    var closeButton = fullscreenContainer.querySelector(".close-btn");
    
    iframe.src = "";
    fullscreenContainer.style.display = "none";
    closeButton.style.display = "none";
  }