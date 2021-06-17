let dropDown = document.getElementById('drop');
let list = document.querySelector('.list');

const toggleClass = () => {
    if(list.classList.contains("show")) {

        list.style.display = "inline-block";
        list.classList.remove("show");
    } else {
        list.style.display = "none";
        list.classList.add("show");
    }

}

dropDown.addEventListener('click', toggleClass);