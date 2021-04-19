let click = document.querySelector('button');
let p1 = document.getElementById("name");
let p2 = document.getElementById("surname");
let p3 = document.getElementById("phone");

click.onclick = function () {
    
 console.log(p1.value);
 console.log(p2.value);
 console.log(p3.value);
 document.getElementById("name-par").textContent = 'Imię: '+ p1.value;
 document.getElementById("surname-par").textContent = 'Nazwisko: '+p2.value;
 document.getElementById("phone-par").textContent = 'Telefon: '+p3.value;
}





