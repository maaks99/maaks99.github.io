let menuIcon = document.querySelector('.menu-icon');
let menuList = document.getElementById('menuList');

menuList.style.maxHeight = "0px";

const toggleMenu = () => {

    if(menuList.style.maxHeight == "0px") {

        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

menuIcon.addEventListener('click', toggleMenu);