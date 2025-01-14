const body = document.querySelector("body"),
navMenu = body.querySelector(".menu-list"),
navOpenBtn = document.querySelector(".navOpen-btn");
navCloseBtn = document.querySelector(".navclose-btn");

if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener(("click") , ()=>{
        navMenu.classList.add("open")
        body.style.overflowY = "hidden"
    })
}
if (navMenu && navCloseBtn) {
    navCloseBtn.addEventListener(("click") , ()=>{
        navMenu.classList.remove("open")
        body.style.overflowY = "scroll"
    })
}
