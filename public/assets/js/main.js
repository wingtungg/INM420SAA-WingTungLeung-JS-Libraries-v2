// JS code for displaying and hiding different page and mobile menu

// Task when window hit 540px hide menu, show burger
let burger = document.getElementById("burger");
let menu = document.getElementById("menu");

// check if user resize/load the window
window.addEventListener("resize", _doSomething);
window.addEventListener("load", _doSomething);

function _doSomething() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth >= 540) {
        // hide burger
        burger.style.display = "none";
        // show menu
        menu.style.display = "flex";

        // If the mobile menu is open while resizing/loading and window >540, slide it up
        if (mobileMenu.classList.contains("slideDown")) {
            mobileMenu.classList.remove("slideDown");
            mobileMenu.classList.add("slideUp");
        }
    } else {
        //show burger
        burger.style.display = "flex";
        
        //hide menu
        menu.style.display = "none";
    }
}

//check if burger is clicked when the mobile menu is downed
burger.addEventListener("click", _displayMenu);

function _displayMenu() {
    console.log(mobileMenu.classList);
    let menuClassName = mobileMenu.classList;
    // if the menu is down, move it up
    if (menuClassName == "slideDown") {
        mobileMenu.classList.remove("slideDown");
        mobileMenu.classList.add("slideUp");
    } else {
        mobileMenu.classList.remove("slideUp");
        mobileMenu.classList.add("slideDown");
    }
}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


