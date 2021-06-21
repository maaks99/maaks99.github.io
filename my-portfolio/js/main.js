$(document).ready(function () {

    // toggleClass

    let dropDown = $("#drop");
    let list = $(".list");

    $(dropDown, list).click(function () {

        if (list.hasClass("show")) {

            list.css("display", "inline-block");
            list.removeClass("show");
        } else {
            list.css("display", "none");
            list.addClass("show");
        }
    })

    // smothScroll

    let navbar = $('#navbar').height();

    $('a').click(function () {

        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - navbar}, 500, 'linear')

    });

    // validate form

    let name = $('#name');
    let email = $('#email');
    let phone = $('#phone');
    let message = $('#message');

    $('#btn-submit').click(function (event) {

        if(name.val().trim() === '') {
            name.css('border', '1px solid red');
        } else {
            name.css('border', '1px solid green');
        }

        if(email.val().trim() === '') {
            email.css('border', '1px solid red');

        } else if (!email.val().includes("@")) {

            email.css('border', '1px solid red');
        }
        else {
            email.css('border', '1px solid green');
        }

        if(phone.val().trim() === '') {
            phone.css('border', '1px solid red');
        } else {
            phone.css('border', '1px solid green');
        }

        if(message.val().trim() === '') {
            message.css('border', '1px solid red');
        } else {
            message.css('border', '1px solid green');
        }


        if(name.val().trim() === '' || email.val().trim() === '' || !email.val().includes("@") || phone.val().trim() === '' || message.val().trim() === '' ) {

             event.preventDefault();
        } else {
            
            $('#form')[0].reset();
        }
       
    });

});