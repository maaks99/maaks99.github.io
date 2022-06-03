document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})
document.getElementsByClassName('mobile-close')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})


const createAppointment = (appointment) => {
    console.log(appointment);

    const appointmentMessage = document.querySelector('.appointment-message');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(resJSON =>{
        console.log(resJSON);
        appointmentMessage.classList.add('send');
        appointmentMessage.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`
    });

}

document.getElementById('appointment-form').addEventListener('submit', function(e){
    

    const appointmentMessage = document.querySelector('.appointment-message');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;
    let appointment = {
        name: document.getElementById('appointment-name').value,
        email: document.getElementById('appointment-email').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('appointment-phone').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        message: document.getElementById('appointment-message').value
    }

    for(let i=0; i < formFields.length; i++) {
        if(formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
            e.preventDefault();
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        }
    }

    if(allFields) {
        createAppointment(appointment);
    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = 'Wypelnij wymagane pola';
    }
    
})

document.getElementById('contact-form').addEventListener('submit', function(e){
   
    const appointmentMessage2 = document.querySelector('.contact-message');
    let formFields2 = document.getElementsByClassName('form-field2');
    let allFields2 = false;

    for(let i=0; i < formFields2.length; i++) {
        if(formFields2[i].value === '') {
            e.preventDefault();
            allFields2 = false;
            formFields2[i].classList.add('error');
        } else {
            allFields2 = true;
            formFields2[i].classList.remove('error');
        }
    }

    if(allFields2) {
        let nameContact = document.getElementById('name_contact');
        let emailContact = document.getElementById('contact_email');
        let messageContact = document.getElementById('contact_message');
        appointmentMessage2.classList.add('error');
        appointmentMessage2.innerText = 'Wypelnij wymagane pola';
    } else {
        appointmentMessage2.classList.add('error');
        appointmentMessage2.innerText = 'Wypelnij wymagane pola';
    }
})

$(document).ready(function(){

    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });
  });
